import React, { useCallback, useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SaveIcon from "@mui/icons-material/Save";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import {
  Box,
  Button,
  Card,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as TrueMoneyTransactionService from "../../services/trueMoneyTransactionService ";
import * as TrueMoneyTransferService from "../../services/trueMoneyTransferService";
import * as yup from "yup";
import { transactionTypes } from "../../contants";
import { useDispatch, useSelector } from "react-redux";
import * as BankService from "../../services/bankService";
import { setBanks } from "../../store/reducer.bank";
import { setTrueMoneyTransfers } from "../../store/reducer.trueMoneyTransfer";
import * as CustomerService from "./../../services/customerService";
import { setCustomers } from "../../store/reducer.customer";

const CreateTrue = ({ open, handleClose, scroll, descriptionElementRef }) => {
  const { t } = useTranslation();
  const [transactionType, setTransactionType] = useState(null);
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    type: yup.string().required(),
    sender_phone:
      transactionType === "transfer" ? yup.number().required() : yup.number(),
    receiver_phone:
      transactionType === "transfer" ? yup.number().required() : yup.number(),
    transfer_fee:
      transactionType === "transfer" ? yup.number().required() : yup.number(),
    amount: yup.number().required(),
    bank_account_id: yup.number().required(),
    transaction_id:
      transactionType === "from bank" || transactionType === "to bank"
        ? yup.number()
        : yup.number().required(),
    commission:
      transactionType === "from bank" || transactionType === "to bank"
        ? yup.number()
        : yup.number().required(),
    customer_id: yup.number().required(),
  });

  const {
    register,
    handleSubmit: formHandleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const watchAmount = watch("amount", false);

  const banks = useSelector((state) => state.bank.banks);
  const customers = useSelector((state) => state.customer.customers);

  const trueMoneyTransfers = useSelector(
    (state) => state.trueMoneyTransfer.trueMoneyTransfers
  );

  const activeBranch = useSelector((state) => state.auth.activeBranch);

  useEffect(() => {
    async function loadData() {
      const query = { branch_id: activeBranch.id };
      const response = await BankService.getAll(query);
      dispatch(setBanks(response));
      const trueComiisonoResponse = await TrueMoneyTransferService.getAll(
        query
      );
      dispatch(setTrueMoneyTransfers(trueComiisonoResponse));
      const result = await CustomerService.getAll();
      dispatch(setCustomers(result));
    }
    loadData();
  }, []);

  useEffect(() => {
    const amount = parseInt(watchAmount);
    console.log(amount);
    const commision = trueMoneyTransfers.find(
      (e) => amount >= e.minimum_amount && amount <= e.maximum_amount
    );
    if (commision) {
      if (transactionType === "transfer")
        setValue("commission", commision.transfer_fee);
      else if (transactionType === "deposit")
        setValue("commission", commision.deposit_fee);
      else if (transactionType === "withdraw")
        setValue("commission", commision.withdraw_fee);
    }
  }, [setValue, transactionType, watchAmount, trueMoneyTransfers]);

  const handleSubmit = useCallback(
    async (values) => {
      values.branch_id = activeBranch.id;
      console.log(values);
      if (transactionType === "transfer") {
        await TrueMoneyTransactionService.store(values);
      } else if (
        transactionType === "from bank" ||
        transactionType === "to bank"
      ) {
        await TrueMoneyTransactionService.store({
          type: values.type,
          amount: values.amount,
          bank_account_id: values.bank_account_id,
          branch_id: activeBranch.id,
          customer_id: values.customer_id,
        });
      } else {
        await TrueMoneyTransactionService.store({
          type: values.type,
          transaction_id: values.transaction_id,
          amount: values.amount,
          commission: values.commission,
          bank_account_id: values.bank_account_id,
          branch_id: activeBranch.id,
          customer_id: values.customer_id,
        });
      }

      reset();
    },
    [reset, transactionType]
  );

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">
        {t("true_money_transcation")}
      </DialogTitle>

      <form onSubmit={formHandleSubmit(handleSubmit)}>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          ></DialogContentText>
          <Card sx={{ bgcolor: "#edeff2" }}>
            <Box sx={{ margin: "10px" }}>
              {/* <Typography variant="h6" color="#094708" ml={2} mb={4} mt={0}>
                {t("create-wave-transaction")}
              </Typography> */}
              <Stack spacing={2} direction="row" m={2}>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: "none",
                    backgroundColor: "#094708",
                    minWidth: "200px",
                    fontSize: "14px",
                    ":hover": {
                      bgcolor: "#094708",
                      color: "#fff",
                    },
                  }}
                >
                  {t("type")}
                </Button>
                <Controller
                  name="type"
                  id="type"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="type-label"
                      {...field}
                      fullWidth
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        setTransactionType(e.target.value);
                      }}
                    >
                      {transactionTypes.map((type) => (
                        <MenuItem value={type}>
                          {type && type[0].toUpperCase() + type.slice(1)}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </Stack>
              {transactionType === "transfer" && (
                <Stack spacing={2} direction="row" m={2}>
                  <TextField
                    type="number"
                    required
                    label={t("sender_phone")}
                    variant="outlined"
                    size="small"
                    sx={{ width: "350px" }}
                    {...register("sender_phone")}
                    error={errors.sender_phone?.message}
                    helperText={errors.sender_phone?.message}
                  />
                  <TextField
                    type="number"
                    required
                    label={t("receiver_phone")}
                    variant="outlined"
                    size="small"
                    sx={{ width: "350px" }}
                    {...register("receiver_phone")}
                    error={errors.receiver_phone?.message}
                    helperText={errors.receiver_phone?.message}
                  />
                </Stack>
              )}
              {transactionType && (
                <Stack spacing={2} direction="row" m={2}>
                  {(transactionType === "transfer" ||
                    transactionType === "deposit" ||
                    transactionType === "withdraw") && (
                    <TextField
                      type="number"
                      required
                      label={t("transaction_id")}
                      variant="outlined"
                      size="small"
                      sx={{ width: "350px" }}
                      {...register("transaction_id")}
                      error={errors.transaction_id?.message}
                      helperText={errors.transaction_id?.message}
                    />
                  )}
                  <TextField
                    type="number"
                    required
                    label={t("amount")}
                    variant="outlined"
                    size="small"
                    sx={{ width: "350px" }}
                    {...register("amount")}
                    error={errors.amount?.message}
                    helperText={errors.amount?.message}
                  />
                </Stack>
              )}
              {(transactionType === "transfer" ||
                transactionType === "deposit" ||
                transactionType === "withdraw") && (
                <Stack spacing={2} direction="row" m={2}>
                  {transactionType === "transfer" && (
                    <TextField
                      type="number"
                      required
                      label={t("transfer_fee")}
                      variant="outlined"
                      size="small"
                      sx={{ width: "350px" }}
                      {...register("transfer_fee")}
                      error={errors.transfer_fee?.message}
                      helperText={errors.transfer_fee?.message}
                    />
                  )}
                  <TextField
                    type="number"
                    required
                    label={t("commission")}
                    variant="outlined"
                    size="small"
                    sx={{ width: "350px" }}
                    {...register("commission")}
                    error={errors.commission?.message}
                    helperText={errors.commission?.message}
                  />
                </Stack>
              )}

              {transactionType && (
                <Stack spacing={2} direction="row" m={2}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#094708",
                      minWidth: "200px",
                      fontSize: "14px",
                      ":hover": {
                        bgcolor: "#094708",
                        color: "#fff",
                      },
                    }}
                  >
                    {t("branch-transfer.to-transfer-type")}
                  </Button>
                  <Controller
                    name="bank_account_id"
                    id="bank_account_id"
                    control={control}
                    render={({ field }) => (
                      <Select
                        labelId="bank_account_id-label"
                        {...field}
                        fullWidth
                      >
                        {banks
                          .filter((bank) => bank.account_name === "True Money")
                          .map((bank) => (
                            <MenuItem value={bank.id}>
                              {bank.name} - {bank.account_name} ({bank.amount})
                            </MenuItem>
                          ))}
                      </Select>
                    )}
                  />
                </Stack>
              )}
              {transactionType && (
                <Stack spacing={2} direction="row" m={2}>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#094708",
                      minWidth: "200px",
                      fontSize: "14px",
                      ":hover": {
                        bgcolor: "#094708",
                        color: "#fff",
                      },
                    }}
                  >
                    {t("customer.name")}
                  </Button>
                  <Controller
                    name="customer_id"
                    id="customer_id"
                    control={control}
                    render={({ field }) => (
                      <Select labelId="customer_id-label" {...field} fullWidth>
                        {customers.map((customer) => (
                          <MenuItem value={customer.id}>
                            {customer.name}
                          </MenuItem>
                        ))}
                      </Select>
                    )}
                  />
                </Stack>
              )}
            </Box>
          </Card>
        </DialogContent>
        <DialogActions
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "13px",
          }}
        >
          <Button
            onClick={handleClose}
            variant="contained"
            size="small"
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "#fff",
              minWidth: "100px",
              fontSize: "14px",
              color: "green",
              textTransform: "none",
              ":hover": {
                bgcolor: "#fff",
                color: "#094708",
              },
            }}
          >
            <SaveIcon />
            {t("close")}
          </Button>
          <Button
            type="submit"
            variant="contained"
            size="small"
            sx={{
              textTransform: "none",
              marginLeft: "20px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "#469152",
              minWidth: "100px",
              fontSize: "14px",
              ":hover": {
                bgcolor: "#469152",
                color: "#fff",
              },
            }}
          >
            <SaveAsIcon />
            {t("save")}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateTrue;
