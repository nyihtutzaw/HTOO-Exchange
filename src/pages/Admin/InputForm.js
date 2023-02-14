
import Navbar from "../../components/navbar/Navbar";
import { Box, Button, Card, Stack, TextField, Typography, Select, FormHelperText } from "@mui/material";
import { useEffect, useCallback, useState } from "react";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { useTranslation } from "react-i18next";

import * as EmployeeService from "./../../services/employeeService";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as AdminService from "./../../services/adminService";
import * as RoleService from "./../../services/roleService";
import * as yup from "yup";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { setRoles } from "../../store/reducer.role";
import { useDispatch, useSelector } from "react-redux";
import { setEmployees } from "../../store/reducer.employee";
import MenuItem from '@mui/material/MenuItem';
import { Controller, useForm } from "react-hook-form";

const InputForm = ({ editData }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const roles = useSelector((state) => state.role.roles);
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employee.employees);
  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
    role_id: yup.string().required(),
    employee_id: yup.string().required(),
  });

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const response = await RoleService.getAll();
      dispatch(setRoles(response));
      const empRes = await EmployeeService.getAll();
      dispatch(setEmployees(empRes));
      setLoading(false);
    }
    loadData();
  }, [dispatch]);



  const {
    register,
    control,
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
        ? await AdminService.update(values, editData?.id)
        : await AdminService.store(values);

      reset();
      navigate("/admin/list-admin");
    },
    [editData, navigate, reset]
  );

  useEffect(() => {
    if (editData) {
      reset({
        email: editData?.email,
        password: editData?.password,
        role_id: editData.role_id,
        employee_id: editData?.employee_id,
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
        {!loading && <form onSubmit={formHandleSubmit(handleSubmit)}>
          <Card sx={{ marginTop: "65px", bgcolor: "#edeff2" }}>
            <Box sx={{ margin: "30px" }}>
              <Typography variant="h6" color="#094708" ml={2} mb={4} mt={0}>
                {t("new_admin")}
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
                  {t("email")}
                </Button>
                <TextField
                  type="text"
                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("email")}
                  error={errors.email?.message}
                  helperText={errors.email?.message}
                />
              </Stack>
              {!editData && <Stack spacing={2} direction="row" m={2}>
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
                  {t("password")}
                </Button>
                <TextField
                  type="text"

                  label=""
                  variant="outlined"
                  size="small"
                  sx={{ width: "350px" }}
                  {...register("password")}
                  error={errors.password?.message}
                  helperText={errors.password?.message}
                />
              </Stack>}
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
                  {t("role-access")}
                </Button>
                <Controller
                  name="role_id"
                  id="role_id"
                  control={control}
                  render={({ field }) => (
                    <Select labelId="role-label" {...field} fullWidth>
                      {roles?.map((role, index) => (
                        <MenuItem value={role.id}>{role.name}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                <FormHelperText error={true}>{errors.role?.message}</FormHelperText>


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
                  {t("employee")}
                </Button>
                <Controller
                  name="employee_id"
                  id="employee_id"
                  control={control}
                  render={({ field }) => (
                    <Select labelId="employee-label" {...field} fullWidth>
                      {employees?.map((employee, index) => (
                        <MenuItem value={employee.id}>{employee.name}</MenuItem>
                      ))}
                    </Select>
                  )}
                />
                <FormHelperText error={true}>{errors.employee?.message}</FormHelperText>

              </Stack>s
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
                    navigate("/admin/list-admin");
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
        </form>}
      </div>
    </>
  );
};

export default InputForm;
