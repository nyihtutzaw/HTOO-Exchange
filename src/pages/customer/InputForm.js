
import Navbar from "../../components/navbar/Navbar";
import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useCallback } from "react";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as CustomerService from "./../../services/customerService";
import * as yup from "yup";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const InputForm = ({ editData }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required(),
    fb_name: yup.string().required(),
    fb_id: yup.string().required(),
    phone: yup.string().required(),
    address: yup.string().required(),
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
        ? await CustomerService.update(values, editData?.id)
        : await CustomerService.store(values);

      reset();
      navigate("/admin/list-customer");
    },
    [editData, reset]
  );

  useEffect(() => {
    if (editData) {
      reset({
        name: editData?.name,
        fb_name: editData?.fb_name,
        fb_id: editData?.fb_id,
        phone: editData?.phone,
        address: editData?.address,
        remark: editData?.remark,
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
              {t("new_customer")}
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
                  {t("name")}
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
                  {" "}
                  {t("f_name")}
                </Button>
                <TextField
                  type="text"
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("fb_name")}
                  error={errors.fb_name?.message}
                  helperText={errors.fb_name?.message}
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
                  {" "}
                  {t("f_id")}
                </Button>
                <TextField
                  type="text"
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("fb_id")}
                  error={errors.fb_id?.message}
                  helperText={errors.fb_id?.message}
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
                  {t("phone")}
                </Button>
                <TextField
                  type="text"
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("phone")}
                  error={errors.phone?.message}
                  helperText={errors.phone?.message}
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
                  {t("address")}
                </Button>
                <TextField
                  type="text"
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("address")}
                  error={errors.address?.message}
                  helperText={errors.address?.message}
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
                  {t("remark")}
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
                    navigate("/admin/list-customer");
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
