import {
  Box,
  Button,
  Card,
  Stack,
  TextField,
  Typography,
  Select,
  FormHelperText,
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Navbar from "../../components/navbar/Navbar";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as BankService from "./../../services/bankService";
import * as ExpenseService from "./../../services/expenseService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import { expenseTypes } from "../../contants";
import { setBanks } from "../../store/reducer.bank";
import NotificationManager from "react-notifications/lib/NotificationManager";

const InputForm = ({ editData }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeBranch = useSelector((state) => state.auth.activeBranch);
  const banks = useSelector((state) => state.bank.banks);
  const schema = yup.object().shape({
    name: yup.string().required(),
    type: yup.string().required(),
    bank_account_id: editData ? yup.number() : yup.number().required(),
    total: editData ? yup.number() : yup.number().required(),
  });

  const {
    register,
    control,
    handleSubmit: formHandleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loadData = async () => {
    const query = { branch_id: activeBranch.id };
    const response = await BankService.getAll(query);
    dispatch(setBanks(response));
  };

  useEffect(() => {
    if (editData) {
      reset({
        name: editData?.name,
        type: editData.type,
        remark: editData?.remark,
      });
    } else {
      reset();
    }
    loadData();
  }, [editData, reset]);

  const handleSubmit = useCallback(
    async (values) => {
      const selectedBank = banks.find((bank) => Number(bank.id) === Number(values.bank_account_id));

      if (selectedBank.amount < Number(values.total)) {
        NotificationManager.error('Expense amount is larger than bank balance')
        return;
      }

      editData
        ? await ExpenseService.update(values, editData?.id)
        : await ExpenseService.store({ ...values, branch_id: activeBranch.id });

      reset();
      navigate("/admin/list-expense");
    },
    [activeBranch.id, banks, editData, navigate, reset]
  );




  return (
    <>
      <Navbar />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "80%",
          marginTop: "75px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={formHandleSubmit(handleSubmit)}>
          <Card sx={{ marginTop: "65px", bgcolor: "#edeff2" }}>
            <Box sx={{ margin: "30px" }}>
              <Typography variant="h6" color="#094708" ml={2} mb={4} mt={0}>
                {" "}
                {t("expense.create")}
              </Typography>
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
                  {t("expense.type")}
                </Button>
                <Controller
                  name="type"
                  id="type"
                  control={control}
                  render={({ field }) => (
                    <Select labelId="expense-type-label" {...field} fullWidth>
                      {expenseTypes.map((type) => (
                        <MenuItem value={type}>{type}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                <FormHelperText error={true}>
                  {errors.account_name?.message}
                </FormHelperText>
              </Stack>

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
                  {t("expense.name")}
                </Button>
                <TextField
                  type="text"
                  required
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("name")}
                  error={errors.name?.message}
                  helperText={errors.name?.message}
                />
              </Stack>
              {!editData && (
                <>
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
                      {t("bank.account")}
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
                          {banks.map((bankAccount) => (
                            <MenuItem value={bankAccount.id}>
                              {bankAccount.name} ({bankAccount.amount})
                            </MenuItem>
                          ))}
                        </Select>
                      )}
                    />
                    <FormHelperText error={true}>
                      {errors.account_name?.message}
                    </FormHelperText>
                  </Stack>
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
                      {t("expense.total")}
                    </Button>
                    <TextField
                      type="text"
                      label=""
                      variant="outlined"
                      size="small"
                      sx={{ width: "350px" }}
                      {...register("total")}
                      error={errors.total?.message}
                      helperText={errors.total?.message}
                    />
                  </Stack>
                </>
              )}

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
                  {t("about")}
                </Button>
                <TextField
                  type="text"
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("remark")}
                  error={errors.remark?.message}
                  helperText={errors.remark?.message}
                />
              </Stack>
              <Stack
                spacing={2}
                direction="row"
                m={2}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => {
                    navigate("/admin/list-expense");
                  }}
                  sx={{
                    textTransform: "none",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    minWidth: "200px",
                    fontSize: "14px",
                    color: "green",
                    ":hover": {
                      bgcolor: "#fff",
                      color: "#094708",
                    },
                  }}
                >
                  <ExitToAppIcon />
                  <Box>{t("go_back")}</Box>
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: "none",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    backgroundColor: "#469152",
                    minWidth: "200px",
                    fontSize: "14px",
                    ":hover": {
                      bgcolor: "#469152",
                      color: "#fff",
                    },
                  }}
                >
                  <SaveAsIcon />
                  <Box>{t("save")}</Box>
                </Button>
              </Stack>
            </Box>
          </Card>
        </form>
      </div>
    </>
  );
};

export default InputForm;
