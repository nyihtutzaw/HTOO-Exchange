import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
// import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
import { Box, Button,  Paper, Typography } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import GetAppIcon from '@mui/icons-material/GetApp';
import PrintIcon from '@mui/icons-material/Print';
import { useTranslation } from "react-i18next";
// import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
// import Modal from '@mui/joy/Modal';
// import { Stack } from '@mui/joy';
// import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
// import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
// import DisplaySettingsRoundedIcon from '@mui/icons-material/DisplaySettingsRounded';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import SaveIcon from '@mui/icons-material/Save';
// import SaveAsIcon from '@mui/icons-material/SaveAs';

const useStyles = makeStyles({
    root: {
        width: "100%",
        overflowX: "auto"
    },
    table: {
        width: "150%",
        // minWidth: 700
    },
    thead: {
        backgroundColor: "#094708",
    },
    tHColor: {
        color: "#fff",
    }
});


function createData(no, datetime, eEomission, cashComission, waveComission, trueComission, totalComission, totalExpense, totalNetProfit ) {
    return {
        no, datetime, eEomission, cashComission, waveComission, trueComission, totalComission, totalExpense, totalNetProfit
    };
}

const rows = [
    createData(1, "12-08-2022 12-30PM", 40000, 600000, 320000, 670000, 8900000, 800000, 12000000,),
    createData(2, "12-08-2022 12-30PM", 40000, 600000, 320000, 670000, 8900000, 800000, 12000000,),
    createData(3, "12-08-2022 12-30PM", 40000, 600000, 320000, 670000, 8900000, 800000, 12000000,),
    createData(4, "12-08-2022 12-30PM", 40000, 600000, 320000, 670000, 8900000, 800000, 12000000,),
    createData(5, "12-08-2022 12-30PM", 40000, 600000, 320000, 670000, 8900000, 800000, 12000000,),
    createData(6, "12-08-2022 12-30PM", 40000, 600000, 320000, 670000, 8900000, 800000, 12000000,),

];


const TransitionRecord = () => {
    const { t } = useTranslation();
    const classes = useStyles();

    // const [age, setAge] = useState('');
    const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));
    // const [open, setOpen] = useState(false);
    // const [scroll, setScroll] = useState('paper');

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleLink = () => {
        // navigate("/admin/create-employee")
    }

    // const handleClickOpen = (scrollType) => () => {
    //     setOpen(true);
    //     setScroll(scrollType);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // const descriptionElementRef = React.useRef(null);
    // useEffect(() => {
    //     if (open) {
    //         const { current: descriptionElement } = descriptionElementRef;
    //         if (descriptionElement !== null) {
    //             descriptionElement.focus();
    //         }
    //     }
    // }, [open]);

    // const handleEdit = (scrollType) => () => {
    //     setOpen(true);
    //     setScroll(scrollType);
    //     console.log("edit")
    // }

    // const handleDelete = () => {
    //     console.log("delete");
    // }

    // const handleChangeAge = (event) => {
    //     setAge(event.target.value);
    // };

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
                            {t('transition-record')}
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
                        {/* <Button variant="contained" size="small" sx={{
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
                        </Button> */}

                    </Box>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" sx={{ margin: "10px" }}>
                    <Paper className={classes.root}>
                        <Table className={classes.table} aria-label="simple-table" >
                            <TableHead className={classes.thead}>
                                <TableRow>
                                    <TableCell className={classes.tHColor}>{t('no')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('date-time')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('e-comission')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('cash-comission')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('wave-comission')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('true-comission')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('total-comission')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('total-expense')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('total-netprofit')}</TableCell>
                                    {/* <TableCell className={classes.tHColor} align="center">{t('action')}</TableCell> */}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.no}>
                                        <TableCell component="th" scope="row">
                                            {row.no}
                                        </TableCell>
                                        <TableCell align="center">{row.datetime}</TableCell>
                                        <TableCell align="center">{row.eEomission}</TableCell>
                                        <TableCell align="center">{row.cashComission}</TableCell>
                                        <TableCell align="center">{row.waveComission}</TableCell>
                                        <TableCell align="center">{row.trueComission}</TableCell>
                                        <TableCell align="center">{row.totalComission}</TableCell>
                                        <TableCell align="center">{row.totalExpense}</TableCell>
                                        <TableCell align="center">{row.totalNetProfit}</TableCell>
                                        {/* <TableCell align="center">
                                            <DriveFileRenameOutlineRoundedIcon onClick={handleEdit('paper')} sx={{ color: "#36353d", fontSize: "25px" }} />
                                            <DeleteForeverRoundedIcon onClick={handleDelete} sx={{ color: "red", fontSize: "25px", marginLeft: "10px" }} />
                                        </TableCell> */}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </Box>
            </div>



            {/* <Dialog
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
            </Dialog> */}
        </>
    )
}


export default TransitionRecord