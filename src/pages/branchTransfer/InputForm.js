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
import * as BranchService from "../../services/branchService";
import * as BranchTransferService from "../../services/branchTransferService";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import { branchToBranchTransferTypes, expenseTypes } from "../../contants";
import NotificationManager from "react-notifications/lib/NotificationManager";
import { setBranches } from "../../store/reducer.branch";
import * as BankService from "./../../services/bankService";
import { setBanks } from "../../store/reducer.bank";

const InputForm = ({ editData }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeBranch = useSelector((state) => state.auth.activeBranch);
  const branches = useSelector((state) => state.branch.branches);
  const banks = useSelector((state) => state.bank.banks);
  const [transferToBanks, setTransferToBanks] = useState([]);
  const schema = yup.object().shape({
    type: yup.number().required(),
   toBranchId: yup.number().required(),
    amount: yup.number().required(),
    toBankAccountId: yup.number().required(),
    fromBankAccountId: yup.number().required(),
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
    const response = await BranchService.getAll(query);
    dispatch(setBranches(response));

    const result = await BankService.getAll(query);
    dispatch(setBanks(result));
  };

  const getTransferToBanks = async (id) => {
    const query = { branch_id: id };
    const response = await BankService.getAll(query);
    setTransferToBanks(response);
  };

  useEffect(() => {
    if (editData) {
      getTransferToBanks(editData.toBranchId)
      reset({
        type: editData.type,
        amount: editData.amount,
        toBranchId: editData.toBranchId,
        toBankAccountId: editData.toBankAccountId,
        fromBankAccountId: editData.fromBankAccountId,
        remark: editData?.remark,
      });
    } else {
      reset();
    }
    loadData();
  }, []);

  const handleSubmit = useCallback(
    async (values) => {
     
      values.fromBranchId = activeBranch.id;
      editData
        ? await BranchTransferService.update(values, editData?.id)
        : await BranchTransferService.store({
            ...values,
            branch_id: activeBranch.id,
          });

      reset();
      navigate("/admin/list-branch-transfer");
    },
    [activeBranch.id, branches, editData, navigate, reset]
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
                  {t("branch-transfer.type")}
                </Button>
                <Controller
                  name="type"
                  id="type"
                  control={control}
                  render={({ field }) => (
                    <Select labelId="type-label" {...field} fullWidth>
                      {branchToBranchTransferTypes.map((type) => (
                        <MenuItem value={type.value}>{type.label}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                <FormHelperText error={true}>
                  {errors.type?.message}
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
                  {t("branch-transfer.to-transfer-type")}
                </Button>
                <Controller
                  name="toBranchId"
                  id="toBranchId"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="toBranchId-label"
                      {...field}
                      fullWidth
                      
                      onChange={(e) => {
                        field.onChange(e.target.value);
                        getTransferToBanks(e.target.value);
                      }}
                    >
                      {branches.map(
                        (branch) =>
                          branch.id !== activeBranch.id && (
                            <MenuItem value={branch.id}>{branch.name}</MenuItem>
                          )
                      )}
                    </Select>
                  )}
                />
                <FormHelperText error={true}>
                  {errors.toBranchId?.message}
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
                  {t("branch-transfer.account-cash")}
                </Button>
                <TextField
                  type="number"
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("amount")}
                  error={errors.amount?.message}
                  helperText={errors.amount?.message}
                />
              </Stack>

              {/* from bank  */}
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
                  {t("branch-transfer.from-transfer-type")}
                </Button>
                <Controller
                  name="fromBankAccountId"
                  id="fromBankAccountId"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="fromBankAccountId-label"
                      {...field}
                      fullWidth
                    >
                      {banks.map((bank) => (
                        <MenuItem value={bank.id}>{bank.name}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                <FormHelperText error={true}>
                  {errors.fromBankAccountId?.message}
                </FormHelperText>
              </Stack>

              {/* to bank  */}
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
                  name="toBankAccountId"
                  id="toBankAccountId"
                  control={control}
                  render={({ field }) => (
                    <Select
                      labelId="toBankAccountId-label"
                      {...field}
                      fullWidth
                    >
                      {transferToBanks.map((bank) => (
                        <MenuItem value={bank.id}>{bank.name}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                <FormHelperText error={true}>
                  {errors.toBankAccountId?.message}
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
                    navigate("/admin/list-branch-transfer");
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
