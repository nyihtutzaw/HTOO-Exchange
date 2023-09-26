import React, { useEffect, useCallback } from "react";
import {
    Box,
    Button,
    Card,
    FormControl,

    MenuItem,
    Select,
    Stack,
    TextareaAutosize,
    FormHelperText
} from "@mui/material";
import * as ExchangeService from "./../../services/exchangeService";
import TextField from "@mui/material/TextField";
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import * as BankService from "./../../services/bankService";
import { setBanks } from "../../store/reducer.bank";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as CustomerService from "./../../services/customerService";
import { setCustomers } from "../../store/reducer.customer";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
function AddDialog({ open, handleClose, scroll, editData }) {
    const { t } = useTranslation();
    const activeBranch = useSelector((state) => state.auth.activeBranch);
    const banks = useSelector((state) => state.bank.banks);
    const customers = useSelector((state) => state.customer.customers);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const schema = yup.object().shape({
        fromBankAccountId: yup.string().required(),
        toBankAccountId: yup.string().required(),
        customer_id: yup.string().required(),
        to_transfer_amount: yup.string().required(),
        e_money_comission: yup.string().required(),
        cash_comission: yup.string().required(),
        from_transfer_amount: yup.string().required(),
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
                fromBankAccountId: editData?.fromBankAccountId,
                toBankAccountId: editData?.toBankAccountId,
                from_transfer_amount: editData?.from_transfer_amount,
                to_transfer_amount: editData?.to_transfer_amount,
                customer_id: editData?.customer_id,
                e_money_comission: editData?.e_money_comission,
                cash_comission: editData?.cash_comission,
                remark: editData?.remark,
            });
        } else {
            reset();
        }
       
    }, [editData, reset]);

    const handleSubmit = useCallback(
        async (values) => {

            if (editData) {
                await ExchangeService.update(values, editData?.id)
            }
            else {
                const response = await ExchangeService.store({ ...values, branch_id: activeBranch.id });
                navigate("/admin/exchange-invoice/" + response.data.id)
            }
            reset();
            handleClose();
            return;

        },
        [activeBranch.id, editData, handleClose, reset]
    );


    return (
        <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">
                {t("create-exchange")}
            </DialogTitle>
            <form onSubmit={formHandleSubmit(handleSubmit)}>
                <DialogContent dividers={scroll === "paper"}>
                    <DialogContentText
                        id="scroll-dialog-description"

                        tabIndex={-1}
                    ></DialogContentText>
                    <Card sx={{ bgcolor: "#edeff2" }}>
                        <Box sx={{ margin: "10px" }}>


                            <Stack spacing={2} direction="row" m={2}>
                                <Box sx={{ width: "350px" }}>
                                    <label>{t("branch-bank-out")}</label>
                                    <Controller
                                        name="fromBankAccountId"
                                        id="fromBankAccountId"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                fullWidth
                                                label={t("branch-bank-out")}
                                                labelId="fromBankAccountId-label"
                                                {...field}
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
                                        {errors.fromBankAccountId?.message}
                                    </FormHelperText>
                                </Box>
                                <Box sx={{ width: "350px" }}>
                                    <label>{t("branch-bank-in")}</label>
                                    <Controller
                                        name="toBankAccountId"
                                        id="toBankAccountId"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                fullWidth
                                                label={t("branch-bank-out")}
                                                labelId="toBankAccountId-label"
                                                {...field}

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
                                        {errors.toBankAccountId?.message}
                                    </FormHelperText>
                                </Box>
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <TextField
                                    type="text"

                                    label={t("amount-money-out")}
                                    variant="outlined"
                                    size="small"
                                    sx={{ width: "350px" }}
                                    {...register("from_transfer_amount")}
                                    error={errors.from_transfer_amount?.message}
                                    helperText={errors.from_transfer_amount?.message}
                                />
                                <TextField
                                    type="text"

                                    label={t("amount-money-in")}
                                    variant="outlined"
                                    size="small"
                                    sx={{ width: "350px" }}
                                    {...register("to_transfer_amount")}
                                    error={errors.to_transfer_amount?.message}
                                    helperText={errors.to_transfer_amount?.message}
                                />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <TextField
                                    type="text"

                                    label={t("e-comission")}
                                    variant="outlined"
                                    size="small"
                                    sx={{ width: "350px" }}
                                    {...register("e_money_comission")}
                                    error={errors.e_money_comission?.message}
                                    helperText={errors.e_money_comission?.message}
                                />
                                <TextField
                                    type="text"

                                    label={t("cash-comission")}
                                    variant="outlined"
                                    size="small"
                                    sx={{ width: "350px" }}
                                    {...register("cash_comission")}
                                    error={errors.cash_comission?.message}
                                    helperText={errors.cash_comission?.message}
                                />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>

                                <Box sx={{ width: "350px" }}>
                                    <label>{t("customer.name")}</label>
                                    <Controller
                                        name="customer_id"
                                        id="customer_id"
                                        control={control}
                                        render={({ field }) => (
                                            <Select
                                                fullWidth
                                                {...field}
                                            >
                                                {customers.map((customer) => (
                                                    <MenuItem value={customer.id}>
                                                        {customer.name}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        )}
                                    />
                                    <FormHelperText error={true}>
                                        {errors.customer_id?.message}
                                    </FormHelperText>
                                </Box>
                                <FormControl sx={{ m: 1, width: 350 }} size="small">
                                    <TextareaAutosize
                                        placeholder="remark"
                                        {...register("remark")}
                                        error={errors.remark?.message}
                                        helperText={errors.remark?.message}
                                        minRows={5}

                                        cols={28}
                                        type="text"
                                        label={t("about")}
                                        variant="outlined"
                                        size="small"
                                        sx={{ width: "350px" }}
                                    />
                                </FormControl>

                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>

                            </Stack>
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
                        {t("close")}
                    </Button>
                    <Button
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
                        type="submit"
                    >
                        <SaveAsIcon />
                        {t("save")}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default AddDialog