import Navbar from "../../components/navbar/Navbar";
import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useCallback } from "react";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as EmployeeService from "./../../services/employeeService";
import * as yup from "yup";

const InputForm = ({ editData }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required(),
    position: yup.string().required(),
    birthday: yup.string().required(),
    phone: yup.string().required(),
    nrc: yup.string().required(),
    start_work: yup.string().required(),
    // end_work: yup.string().required(),
    // remark: yup.string().required(),
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
        ? await EmployeeService.update(values, editData?.id)
        : await EmployeeService.store(values);

      reset();
      navigate("/admin/list-employee");
    },
    [editData, reset]
  );

  useEffect(() => {
    if (editData) {
      reset({
        name: editData?.name,
        birthday: editData?.birthday,
        position: editData?.position,
        nrc: editData?.nrc,
        phone: editData?.phone,
        start_work: editData?.start_work,
        end_work: editData?.end_work,
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
                {t("employee.create_title")}
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
                  {t("position")}
                </Button>
                <TextField
                  type="text"
                  required
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("position")}
                  error={errors.position?.message}
                  helperText={errors.position?.message}
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
                  {t("name")}
                </Button>
                <TextField
                  type="text"
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
                  {t("birthday")}
                </Button >
                <TextField
                  type="text"
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("birthday")}
                  error={errors.birthday?.message}
                  helperText={errors.birthday?.message}
                />
              </Stack >
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
                  {t("nrc")}
                </Button>
                <TextField
                  type="text"
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("nrc")}
                  error={errors.nrc?.message}
                  helperText={errors.nrc?.message}
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
                  {" "}
                  {t("start_work")}
                </Button>
                <TextField
                  type="text"
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("start_work")}
                  error={errors.start_work?.message}
                  helperText={errors.start_work?.message}
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
                  {t("end_work")}
                </Button>
                <TextField
                  type="text"
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("end_work")}
                // error={errors.end_work?.message}
                // helperText={errors.end_work?.message}
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
                // error={errors.remark?.message}
                // helperText={errors.remark?.message}
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
                >
                  <SaveAsIcon />
                  {t("save_assign")}
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
            </Box >
          </Card >
        </form >
      </div >
    </>
  );
};

export default InputForm;
