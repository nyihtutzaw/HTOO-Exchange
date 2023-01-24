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
import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import GetAppIcon from '@mui/icons-material/GetApp';
// import PrintIcon from '@mui/icons-material/Print';
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


function createData(no, bank_name, start_money, left_money,
) {
    return {
        no, bank_name, start_money, left_money,

    };
}

const rows = [
    createData(1, "KBZ(MDY)", 20000, 1000),
    createData(1, "KBZ(MDY)", 20000, 1000),
    createData(1, "KBZ(MDY)", 20000, 1000),
    createData(1, "KBZ(MDY)", 20000, 1000),
    createData(1, "KBZ(MDY)", 20000, 1000),
];


const TotalMoney = () => {

    const { t } = useTranslation();
    const classes = useStyles();
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const [age, setAge] = React.useState('');

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    // const handleLink = () => {
    //     // navigate("/admin/create-employee")
    // }

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
                            {t('total-money')}
                        </Typography>
                    </Box>
                    <Box m={1} display="flex" justifyContent="space-between" alignItems="center">
                        <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                            <InputLabel id="demo-select-small">{t('branch')}
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
                                <MenuItem value={10}>Branch 1</MenuItem>
                                <MenuItem value={20}>Branch 2</MenuItem>
                                <MenuItem value={30}>Branch 3</MenuItem>
                            </Select>
                        </FormControl>
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
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <TableContainer style={{ width: 1400, marginTop: "5px" }}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead className={classes.thead}>
                                <TableRow>
                                    <TableCell className={classes.tHColor} align="center">{t('bank.name')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('open-list-money')}</TableCell>
                                    <TableCell className={classes.tHColor} align="center">{t('leave-list-money')}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.no}>
                                        {/* <TableCell component="th" scope="row">
                                            {row.no}
                                        </TableCell> */}
                                        <TableCell align="center">{row.bank_name}</TableCell>
                                        <TableCell align="center">{row.start_money}</TableCell>
                                        <TableCell align="center">{row.left_money}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <Box display="flex" justifyContent="space-evenly" alignItems="center" sx={{ marginTop: "20px" }}>
                    <Typography variant="h6" color="#094708" mr={15} mb={1} mt={0}> {t('total')}
                    </Typography>
                    <Typography variant="h6" color="#094708" mr={15} mb={1} mt={0}> 1000000
                    </Typography>
                    <Typography variant="h6" color="#094708" mr={0} mb={1} mt={0}> 2300000
                    </Typography>
                </Box>
            </div>
        </>
    )
}

export default TotalMoney