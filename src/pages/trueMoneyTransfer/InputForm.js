import Navbar from "../../components/navbar/Navbar";
import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useCallback } from "react";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as TrueMoneyTransferService from "../../services/trueMoneyTransferService";
import * as yup from "yup";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const InputForm = ({ editData }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    minimum_amount: yup.number().required(),
    maximum_amount: yup.number().required(),
    true_transfer_fee: yup.number().required(),
    transfer_fee: yup.number().required(),
    deposit_fee: yup.number().required(),
    withdraw_fee: yup.number().required(),
  });

  const {
    register,
    handleSubmit: formHandleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmit = useCallback(
    async (values) => {
      editData
        ? await TrueMoneyTransferService.update(values, editData?.id)
        : await TrueMoneyTransferService.store(values);

      reset();
      navigate("/admin/list-true-money-transfer");
    },
    [editData, reset]
  );

  useEffect(() => {
    if (editData) {
      reset({
        minimum_amount: editData?.minimum_amount,
        maximum_amount: editData?.maximum_amount,
        true_transfer_fee: editData?.true_transfer_fee,
        transfer_fee: editData?.transfer_fee,
        deposit_fee: editData?.deposit_fee,
        withdraw_fee: editData?.withdraw_fee,
      });
    } else {
      reset();
    }
  }, [editData, reset, setValue]);

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
                {t("new_true_money_transfer")}
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
                  {t("minimum_amount")}
                </Button>
                <TextField
                  type="number"
                  required
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("minimum_amount")}
                  error={errors.minimum_amount?.message}
                  helperText={errors.minimum_amount?.message}
                />
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
                  {t("maximum_amount")}
                </Button>
                <TextField
                  type="number"
                  required
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("maximum_amount")}
                  error={errors.maximum_amount?.message}
                  helperText={errors.maximum_amount?.message}
                />
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
                  {t("true_transfer_fee")}
                </Button>
                <TextField
                  type="number"
                  required
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("true_transfer_fee")}
                  error={errors.true_transfer_fee?.message}
                  helperText={errors.true_transfer_fee?.message}
                />
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
                  {t("transfer_fee")}
                </Button>
                <TextField
                  type="number"
                  required
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("transfer_fee")}
                  error={errors.transfer_fee?.message}
                  helperText={errors.transfer_fee?.message}
                />
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
                  {t("deposit_fee")}
                </Button>
                <TextField
                  type="number"
                  required
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("deposit_fee")}
                  error={errors.deposit_fee?.message}
                  helperText={errors.deposit_fee?.message}
                />
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
                  {t("withdraw_fee")}
                </Button>
                <TextField
                  type="number"
                  required
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("withdraw_fee")}
                  error={errors.withdraw_fee?.message}
                  helperText={errors.withdraw_fee?.message}
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
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    minWidth: "200px",
                    fontSize: "14px",
                    color: "green",
                    textTransform: "none",
                    ":hover": {
                      bgcolor: "#fff",
                      color: "#094708",
                    },
                  }}
                  onClick={() => {
                    navigate("/admin/list-true-money-transfer");
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
                  {t("save")}
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
