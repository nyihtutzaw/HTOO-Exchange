import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useCallback } from "react";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Navbar from "../../components/navbar/Navbar";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import * as BranchService from "./../../services/branchService";

const InputForm = ({ editData }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const schema = yup.object().shape({
        name: yup.string().required(),
        phone: yup.string().required(),
        address: yup.string().required(),
    });

    const {
        register,
        handleSubmit: formHandleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm({
        resolver: yupResolver(schema),
    });

    const handleSubmit = useCallback(
        async (values) => {

            editData ? await BranchService.update(values, editData?.id) : await BranchService.store(values);

            reset();
            navigate("/admin/list-branch");
        },
        [editData, reset]
    );

    useEffect(() => {
        if (editData) {
            reset({
                name: editData?.name,
                phone: editData?.phone,
                address: editData?.address,
            })
        }
        else {
            reset();
        }
    }, [editData, reset, setValue])

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
                                {t("branch.create")}
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
                                    {t("branch.name")}
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
                                        navigate("/admin/list-branch");
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
