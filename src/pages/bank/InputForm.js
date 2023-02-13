import { Box, Button, Card, Stack, TextField, Typography, Select, FormHelperText } from "@mui/material";
import React, { useCallback, useEffect } from "react";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Navbar from "../../components/navbar/Navbar";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as BankService from "./../../services/bankService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MenuItem from '@mui/material/MenuItem';
import { accountNames } from "../../contants";

const InputForm = ({ editData }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const activeBranch = useSelector((state) => state.auth.activeBranch);

    const schema = yup.object().shape({
        name: yup.string().required(),
        phone: yup.string().required(),
        account_name: yup.string().required(),
        amount: editData ? yup.string() : yup.string().required(),
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

    useEffect(() => {
        if (editData) {
            reset({
                account_name: editData?.account_name,
                name: editData?.name,
                phone: editData.phone,
                remark: editData?.remark,
            });
        } else {
            reset();
        }
    }, [editData, reset]);


    const handleSubmit = useCallback(
        async (values) => {
            editData
                ? await BankService.update(values, editData?.id)
                : await BankService.store({ ...values, branch_id: activeBranch.id });

            reset();
            navigate("/admin/list-bank");
        },
        [editData, navigate, reset]
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
                                {t("bank.create")}
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
                                    {t("bank.acc_name")}
                                </Button>
                                <Controller
                                    name="account_name"
                                    id="account_name"
                                    control={control}
                                    render={({ field }) => (
                                        <Select labelId="account_name-label" {...field} fullWidth>
                                            {accountNames.map((accountName) => (
                                                <MenuItem value={accountName}>{accountName}</MenuItem>
                                            ))}
                                        </Select>
                                    )}
                                />
                                <FormHelperText error={true}>{errors.account_name?.message}</FormHelperText>
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
                                    {t("bank.acc_owner")}
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
                                    {" "}
                                    {t("bank.acc_phone")}
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
                                    {t("bank.open_list")}
                                </Button>
                                <TextField
                                    type="text"
                                    label=""
                                    variant="outlined"
                                    size="small"
                                    sx={{ width: "350px" }}
                                    {...register("amount")}
                                    error={errors.amount?.message}
                                    helperText={errors.amount?.message}
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
                                    onClick={() => {
                                        navigate("/admin/list-bank");
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
