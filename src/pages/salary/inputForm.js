import {
    Box,
    Button,
    Card,
    FormControl,
    InputLabel,
    FormHelperText,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Navbar from "../../components/navbar/Navbar";
import { useTranslation } from "react-i18next";
import { useEffect, useCallback, useState } from "react";
import { Controller, useForm, useFieldArray } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import * as EmployeeService from "./../../services/employeeService";
import * as AllowanceService from "./../../services/allowanceService";
import * as SalaryService from "./../../services/salaryService";
import { setEmployees } from "../../store/reducer.employee";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { setAllowances } from "../../store/reducer.allowance";

const InputForm = ({ editData }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employee.employees);
    const allowances = useSelector((state) => state.allowance.allowances);

    const schema = yup.object().shape({
        employee_id: yup.string().label("Employee").required(),
        salary: yup.string().required(),
        month: yup.string().required(),
        year: yup.string().required(),
        commission: yup.string().required(),
        allowances: yup.array(
            yup.object().shape({
                allowance_id: yup.string().label("Allowrence").required(),
                amount: yup.string().label("Amount").required(),
            }),
        ),
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

    const { fields, append } = useFieldArray({
        control,
        name: "allowances",
    });


    const handleSubmit = useCallback(
        async (values) => {

            editData
                ? await SalaryService.update(values, editData?.id)
                : await SalaryService.store(values);

            reset();
            navigate("/admin/list-stack-salary");
        },
        [editData, navigate, reset]
    );


    useEffect(() => {
        async function loadData() {
            setLoading(true);
            const allowRes = await AllowanceService.getAll();
            dispatch(setAllowances(allowRes));
            const empRes = await EmployeeService.getAll();
            dispatch(setEmployees(empRes));
            setLoading(false);
        }
        loadData();
    }, [dispatch]);

    const handleAppendAllowrence = () => {
        append({
            allowrence_id: 1,
            amount: 0,
        })
    }

    useEffect(() => {
        if (editData) {
            const allowanceValues = editData?.allowances?.map((allowance) => ({
                allowance_id: allowance.salary_allowance?.allowanceId,
                amount: allowance.salary_allowance?.amount
            }))

            reset({
                month: editData?.month,
                year: editData?.year,
                salary: editData?.salary,
                commission: editData?.commission,
                employee_id: editData.employee_id,
                allowances: allowanceValues
            });
        } else {
            reset();
        }
    }, [editData, reset,]);


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
                                {" "}
                                {t("staff-salary.create")}
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
                                    {t("staff-salary.month")}
                                </Button>
                                <TextField
                                    type="number"
                                    label=""
                                    variant="outlined"
                                    size="small"
                                    sx={{ width: "350px" }}
                                    {...register("month")}
                                    error={errors.month?.message}
                                    helperText={errors.month?.message}
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
                                    {t("staff-salary.year")}
                                </Button>
                                <TextField
                                    type="number"
                                    label=""
                                    variant="outlined"
                                    size="small"
                                    sx={{ width: "350px" }}
                                    {...register("year")}
                                    error={errors.year?.message}
                                    helperText={errors.year?.message}
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
                                    {t("staff-salary.staff_name")}
                                </Button>
                                <Controller
                                    name="employee_id"
                                    id="employee_id"
                                    control={control}
                                    render={({ field }) => (
                                        <>
                                            <Select labelId="employee-label" {...field} fullWidth>
                                                {employees?.map((employee, index) => (
                                                    <MenuItem value={employee.id}>{employee.name}</MenuItem>
                                                ))}
                                            </Select>
                                            <FormHelperText error={true}>{errors.employee_id?.message}</FormHelperText>
                                        </>
                                    )}
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
                                    {t("staff-salary.staff_salary")}
                                </Button>
                                <TextField
                                    type="number"
                                    label=""
                                    variant="outlined"
                                    size="small"
                                    sx={{ width: "350px" }}
                                    {...register("salary")}
                                    error={errors.salary?.message}
                                    helperText={errors.salary?.message}
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
                                    {t("staff-salary.comission")}
                                </Button>
                                <TextField
                                    type="number"
                                    label=""
                                    variant="outlined"
                                    size="small"
                                    sx={{ width: "350px" }}
                                    {...register("commission")}
                                    error={errors.commission?.message}
                                    helperText={errors.commission?.message}
                                />
                            </Stack>
                            {
                                fields.map((field, formIndex) => (
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
                                            {t("staff-salary.opportunity") + "-" + (formIndex + 1)}
                                        </Button>

                                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                            <Controller
                                                name={`allowances.${formIndex}.allowance_id`}
                                                control={control}
                                                render={({ field }) => (
                                                    <>
                                                        <Select labelId="employee-label" {...field} fullWidth>
                                                            {allowances?.map((allowance, index) => (
                                                                <MenuItem value={allowance.id}>{allowance.name}</MenuItem>
                                                            ))}
                                                        </Select>
                                                        <FormHelperText error={true}>{errors.allowances?.[formIndex]?.allowance_id?.message}</FormHelperText>
                                                    </>
                                                )}
                                            />
                                        </FormControl>
                                        <TextField
                                            type="text"
                                            label=""
                                            variant="outlined"
                                            size="small"
                                            sx={{ width: "210px" }}
                                            {...register(`allowances.${formIndex}.amount`)}
                                            error={errors.allowances?.[formIndex]?.amount?.message}
                                            helperText={errors.allowances?.[formIndex]?.amount?.message}
                                        />
                                    </Stack>
                                ))
                            }

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
                                    onClick={() => {
                                        navigate("/admin/list-stack-salary")
                                    }}
                                    variant="contained"
                                    size="small"
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
                                    onClick={handleAppendAllowrence}
                                    variant="contained"
                                    size="small"
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

                                    <Box> {t("staff-salary.opportunity")}<span style={{ marginLeft: 20 }}>+</span></Box>
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
