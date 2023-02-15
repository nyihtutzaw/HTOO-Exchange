import React from "react";
import {
    Box,
    Button,
    Card,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextareaAutosize,
} from "@mui/material";

import TextField from "@mui/material/TextField";

import { useTranslation } from "react-i18next";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import SaveAsIcon from "@mui/icons-material/SaveAs";


function AddDialog({ open, handleClose, scroll }) {
    const { t } = useTranslation();
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
            <DialogContent dividers={scroll === "paper"}>
                <DialogContentText
                    id="scroll-dialog-description"

                    tabIndex={-1}
                ></DialogContentText>
                <Card sx={{ bgcolor: "#edeff2" }}>
                    <Box sx={{ margin: "10px" }}>
                        <Stack spacing={2} direction="row" m={2}>
                            <TextField
                                type="text"
                                required
                                label={t("branch-bank-in")}
                                variant="outlined"
                                size="small"
                                sx={{ width: "350px" }}
                            />
                            <TextField
                                type="text"
                                required
                                label={t("branch-bank-out")}
                                variant="outlined"
                                size="small"
                                sx={{ width: "350px" }}
                            />
                        </Stack>
                        <Stack spacing={2} direction="row" m={2}>
                            <TextField
                                type="text"
                                required
                                label={t("amount-money-in")}
                                variant="outlined"
                                size="small"
                                sx={{ width: "350px" }}
                            />
                            <TextField
                                type="text"
                                required
                                label={t("amount-money-out")}
                                variant="outlined"
                                size="small"
                                sx={{ width: "350px" }}
                            />
                        </Stack>
                        <Stack spacing={2} direction="row" m={2}>
                            <TextField
                                type="text"
                                required
                                label={t("e-comission")}
                                variant="outlined"
                                size="small"
                                sx={{ width: "350px" }}
                            />
                            <TextField
                                type="text"
                                required
                                label={t("cash-comission")}
                                variant="outlined"
                                size="small"
                                sx={{ width: "350px" }}
                            />
                        </Stack>
                        <Stack spacing={2} direction="row" m={2}>

                            <FormControl sx={{ m: 1, width: 350 }} size="small">
                                <InputLabel id="demo-select-small">
                                    {t("customer.name")}
                                </InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"



                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, width: 350 }} size="small">
                                <TextareaAutosize
                                    placeholder="remark"
                                    minRows={5}
                                    required
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
                    onClick={handleClose}
                >
                    <SaveAsIcon />
                    {t("save")}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddDialog