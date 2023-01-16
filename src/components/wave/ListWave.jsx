import React, { useState, useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
import { Box, Button, Card, FormControl, InputLabel, MenuItem, Paper, Select, Stack, TextareaAutosize, Typography } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import GetAppIcon from '@mui/icons-material/GetApp';
import PrintIcon from '@mui/icons-material/Print';
import { useTranslation } from "react-i18next";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
// import Modal from '@mui/joy/Modal';
// import { Stack } from '@mui/joy';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import DisplaySettingsRoundedIcon from '@mui/icons-material/DisplaySettingsRounded';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import SaveIcon from '@mui/icons-material/Save';
import SaveAsIcon from '@mui/icons-material/SaveAs';

const useStyles = makeStyles({
    root: {
        width: "100%",
        overflowX: "auto"
    },
    table: {
        width: "200%",
        // minWidth: 700
    },
    thead: {
        backgroundColor: "#094708",
    },
    tHColor: {
        color: "#fff",
    }
});

// const styles = theme => ({
//     root: {
//         width: "100%",
//         marginTop: theme.spacing.unit * 3,
//         overflowX: "auto"
//     },
//     table: {
//         minWidth: 700
//     }
// });


function createData(no, datetime, phone_from, phone_to, transition_id, transfer_amount, transfer_fee,
    export_amount, export_fee, wave_acc, comission, to_brank, from_bank, otm, ma_thi,
    wave_acc_left_money, total_e_money, total_cash, employee_name) {
    return {
        no, datetime, phone_from, phone_to, transition_id, transfer_amount, transfer_fee,
        export_amount, export_fee, wave_acc, comission, to_brank, from_bank, otm, ma_thi,
        wave_acc_left_money, total_e_money, total_cash, employee_name
    };
}

const rows = [
    createData(1, "12-08-2022 12-30PM", "09888888", "0933333333", "cvbvb34brttrte", 13000, 400,
        13500, 500, "Mg Kyaw Wace Acc", 600, "Yoma", "KBZ", "7%", "Mathi",
        690000, 1020000, 3000000, "U Maung Maung"),
    createData(2, "12-08-2022 12-30PM", "09888888", "0933333333", "cvbvb34brttrte", 13000, 400,
        13500, 500, "Mg Kyaw Wace Acc", 600, "Yoma", "KBZ", "7%", "Mathi",
        690000, 1020000, 3000000, "U Maung Maung"),
    createData(3, "12-08-2022 12-30PM", "09888888", "0933333333", "cvbvb34brttrte", 13000, 400,
        13500, 500, "Mg Kyaw Wace Acc", 600, "Yoma", "KBZ", "7%", "Mathi",
        690000, 1020000, 3000000, "U Maung Maung"),
    createData(4, "12-08-2022 12-30PM", "09888888", "0933333333", "cvbvb34brttrte", 13000, 400,
        13500, 500, "Mg Kyaw Wace Acc", 600, "Yoma", "KBZ", "7%", "Mathi",
        690000, 1020000, 3000000, "U Maung Maung"),

];


const ListWave = () => {
    const { t } = useTranslation();
    const classes = useStyles();

    const [age, setAge] = useState('');
    const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleLink = () => {
        // navigate("/admin/create-employee")
    }

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const handleEdit = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
        console.log("edit")
    }

    const handleDelete = () => {
        console.log("delete");
    }

    const handleChangeAge = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Navbar />
            <div
                style={{
                    // position: "absolute",
                    width: "100%",
                    height: "80%",
                    marginTop: "75px",
                    display: "flex", justifyContent: "center", flexDirection: "column"
                }}
            >
                <Box m={2} display="flex" flexDirection="row" justifyContent="space-between">
                    <Box mt={2}>
                        <Typography variant="h6" color="#094708" ml={2} mb={1} mt={0}>
                            {/* {t('exchange-list')} */}
                            Wave List
                        </Typography>
                    </Box>
                    <Box m={1} display="flex" justifyContent="space-between" alignItems="center">
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DesktopDatePicker
                                label={t('start-date')}
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} sx={{ mr: 2 }} size="small" />}
                            />
                            <DesktopDatePicker
                                label={t('end-date')}
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} sx={{ mr: 2 }} size="small" />}
                            />
                        </LocalizationProvider>
                        <Button variant="contained"
                            size="small" sx={{
                                textTransform: "none",
                                display: "flex", justifyContent: "space-evenly", alignItems: "center",
                                margin: "3px", padding: "7px",
                                backgroundColor: "#1dad52", minWidth: "100px", fontSize: "14px", ':hover': {
                                    bgcolor: '#1dad52',
                                    color: '#fff'
                                }
                            }} onClick={handleLink}>
                            <GetAppIcon />
                            <Box>
                                Excel Export
                            </Box>

                        </Button>
                        <Button variant="contained"
                            size="small" sx={{
                                textTransform: "none",
                                display: "flex", justifyContent: "space-evenly", alignItems: "center",
                                margin: "3px", padding: "7px",
                                backgroundColor: "#1dad52", minWidth: "100px", fontSize: "14px", ':hover': {
                                    bgcolor: '#1dad52',
                                    color: '#fff'
                                }
                            }} onClick={handleLink}>
                            <PrintIcon />
                            <Box>
                                Print
                            </Box>

                        </Button>
                        <Button variant="contained" size="small" sx={{
                            textTransform: "none", margin: "3px", padding: "7px", minWidth: "100px",
                            display: "flex", justifyContent: "space-evenly", alignItems: "center",
                            backgroundColor: "#1dad52", fontSize: "14px", ':hover': {
                                bgcolor: '#1dad52',
                                color: '#fff'
                            }
                        }}
                            onClick={handleClickOpen('paper')}
                        >
                            <AddCircleRoundedIcon />
                            <Box>
                                {t("new")}
                            </Box>
                        </Button>

                    </Box>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" sx={{ margin: "10px" }}>
                    <Paper className={classes.root}>
                        <Table className={classes.table} aria-label="simple-table" >
                            <TableHead className={classes.thead}>
                                <TableRow>
                                    <TableCell width="20px" className={classes.tHColor}>{t('no')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('date-time')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('phone-out')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('phone-in')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('transition-id')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('transfer-amount')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('transfer-fee')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('export-amount')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">ငွေသွင်းရန်ပမာဏ</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('wave-acc')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('comission')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('from-bank')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('to-bank')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('otm')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">Ma</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('wave-acc-left-money')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('total-e-money')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('total-cash-money')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('customer.name')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('action')}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.no}>
                                        <TableCell width="20px" component="th" scope="row">
                                            {row.no}
                                        </TableCell>
                                        <TableCell align="center">{row.datetime}</TableCell>
                                        <TableCell align="center">{row.phone_from}</TableCell>
                                        <TableCell align="center">{row.phone_to}</TableCell>
                                        <TableCell align="center">{row.transition_id}</TableCell>
                                        <TableCell align="center">{row.transfer_amount}</TableCell>
                                        <TableCell align="center">{row.transfer_fee}</TableCell>
                                        <TableCell align="center">{row.export_amount}</TableCell>
                                        <TableCell align="center">{row.export_fee}</TableCell>
                                        <TableCell align="center">{row.wave_acc}</TableCell>
                                        <TableCell align="center">{row.comission}</TableCell>
                                        <TableCell align="center">{row.to_brank}</TableCell>
                                        <TableCell align="center">{row.from_bank}</TableCell>
                                        <TableCell align="center">{row.otm}</TableCell>
                                        <TableCell align="center">{row.ma_thi}</TableCell>
                                        <TableCell align="center">{row.wave_acc_left_money}</TableCell>
                                        <TableCell align="center">{row.total_e_money}</TableCell>
                                        <TableCell align="center">{row.total_cash}</TableCell>
                                        <TableCell align="center">{row.employee_name}</TableCell>
                                        <TableCell align="center">
                                            <DriveFileRenameOutlineRoundedIcon onClick={handleEdit('paper')} sx={{ color: "#36353d", fontSize: "25px" }} />
                                            <DeleteForeverRoundedIcon onClick={handleDelete} sx={{ color: "red", fontSize: "25px", marginLeft: "10px" }} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Box>
            </div>



            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">{t("create-exchange")}</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >

                    </DialogContentText>
                    <Card sx={{ bgcolor: '#edeff2' }} >
                        <Box sx={{ margin: "10px", }}>
                            {/* <Typography variant="h6" color="#094708" ml={2} mb={4} mt={0}>
                                {t("create-exchange")}
                            </Typography> */}
                            <Stack spacing={2} direction="row" m={2}>
                                <TextField type="text" required label={t('branch-bank-in')} variant="outlined" size="small" sx={{ width: "350px" }} />
                                <TextField type="text" required label={t('branch-bank-out')} variant="outlined" size="small" sx={{ width: "350px" }} />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <TextField type="text" required label={t('amount-money-in')} variant="outlined" size="small" sx={{ width: "350px" }} />
                                <TextField type="text" required label={t('amount-money-out')} variant="outlined" size="small" sx={{ width: "350px" }} />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <TextField type="text" required label={t('e-comission')} variant="outlined" size="small" sx={{ width: "350px" }} />
                                <TextField type="text" required label={t('cash-comission')} variant="outlined" size="small" sx={{ width: "350px" }} />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <TextField type="text" required label={t('employee.name')} variant="outlined" size="small" sx={{ width: "350px" }} />
                                <FormControl sx={{ m: 1, width: 350 }} size="small">
                                    <InputLabel id="demo-select-small">{t('customer.name')}
                                    </InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={age}
                                        label="Age"
                                        onChange={handleChangeAge}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                {/* <TextField type="text" required label={t('customer.name')} variant="outlined" size="small" sx={{ width: "350px" }} /> */}
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <TextareaAutosize minRows={5} required cols={28} type="text" label={t('about')} variant="outlined" size="small" sx={{ width: "350px" }} />
                            </Stack>

                        </Box>

                    </Card>

                </DialogContent >
                <DialogActions sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: '13px' }} >
                    <Button variant="contained" size="small" sx={{
                        display: "flex", justifyContent: "space-evenly", alignItems: "center",
                        backgroundColor: "#fff", minWidth: "100px", fontSize: "14px", color: "green", textTransform: "none", ':hover': {
                            bgcolor: '#fff',
                            color: '#094708'
                        }
                    }}>
                        <SaveIcon />
                        {t("save_assign")}</Button>
                    <Button variant="contained" size="small" sx={{
                        textTransform: "none", marginLeft: "20px",
                        display: "flex", justifyContent: "space-evenly", alignItems: "center",
                        backgroundColor: "#469152", minWidth: "100px", fontSize: "14px", ':hover': {
                            bgcolor: '#469152',
                            color: '#fff'
                        }

                    }} onClick={handleClose} >
                        <SaveAsIcon />
                        {t("save")}</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}


export default ListWave