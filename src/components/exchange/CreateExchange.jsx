import React from 'react'
import Navbar from '../navbar/Navbar'
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
import { Box, Button, Typography } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import GetAppIcon from '@mui/icons-material/GetApp';
import PrintIcon from '@mui/icons-material/Print';
import { useTranslation } from "react-i18next";



const useStyles = makeStyles({
    table: {
        minWidth: 650
    },
    thead: {
        backgroundColor: "#094708",
    },
    tHColor: {
        color: "#fff",
    }
});


function createData(no, datetime, branchBankIn, branchBankOut, amountIn, amountOut, eMoneyComession,
    cashComession, remark, customerName, employeename) {
    return {
        no, datetime, branchBankIn, branchBankOut, amountIn, amountOut, eMoneyComession,
        cashComession, remark, customerName, employeename
    };
}

const rows = [
    createData(1, "12-08-2022 12-30PM", "KBZ(MDY)", "Yoma", 20000, 1000, 4000, 3500, "Hello How", "Mg Kyaw", "U Maung Maung"),
    createData(2, "12-08-2022 12-30PM", "KBZ(MDY)", "Yoma", 20000, 1000, 4000, 3500, "Hello How", "Mg Kyaw", "U Maung Maung"),
    createData(3, "12-08-2022 12-30PM", "KBZ(MDY)", "Yoma", 20000, 1000, 4000, 3500, "Hello How", "Mg Kyaw", "U Maung Maung"),
    createData(4, "12-08-2022 12-30PM", "KBZ(MDY)", "Yoma", 20000, 1000, 4000, 3500, "Hello How", "Mg Kyaw", "U Maung Maung"),
    createData(5, "12-08-2022 12-30PM", "KBZ(MDY)", "Yoma", 20000, 1000, 4000, 3500, "Hello How", "Mg Kyaw", "U Maung Maung"),
    createData(6, "12-08-2022 12-30PM", "KBZ(MDY)", "Yoma", 20000, 1000, 4000, 3500, "Hello How", "Mg Kyaw", "U Maung Maung"),
];


const CreateExchange = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleLink = () => {
        // navigate("/admin/create-employee")
    }

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
                        <Typography variant="h6" color="#094708" ml={2} mb={1} mt={0}> Exchange
                        </Typography>
                    </Box>
                    <Box m={1} display="flex" justifyContent="space-between" alignItems="center">
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DesktopDatePicker
                                label="Start Date"
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField {...params} sx={{ mr: 2 }} size="small" />}
                            />
                            <DesktopDatePicker
                                label="End Date"
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

                    </Box>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <TableContainer style={{ width: 1400, marginTop: "5px" }}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead className={classes.thead}>
                                <TableRow>
                                    <TableCell className={classes.tHColor}>{t('no')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('date-time')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('branch-bank-in')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('branch-bank-out')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('amount-money-in')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('amount-money-out')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('e-comission')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('cash-comission')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('about')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('customer.name')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('employee.name')}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.no}>
                                        <TableCell component="th" scope="row">
                                            {row.no}
                                        </TableCell>
                                        <TableCell align="center">{row.datetime}</TableCell>
                                        <TableCell align="center">{row.branchBankIn}</TableCell>
                                        <TableCell align="center">{row.branchBankOut}</TableCell>
                                        <TableCell align="center">{row.amountIn}</TableCell>
                                        <TableCell align="center">{row.amountOut}</TableCell>
                                        <TableCell align="center">{row.eMoneyComession}</TableCell>
                                        <TableCell align="center">{row.cashComession}</TableCell>
                                        <TableCell align="center">{row.remark}</TableCell>
                                        <TableCell align="center">{row.customerName}</TableCell>
                                        <TableCell align="center">{row.employeename}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>

            </div>
        </>
    )
}

export default CreateExchange