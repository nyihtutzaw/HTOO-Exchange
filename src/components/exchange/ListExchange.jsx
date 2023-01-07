import React, { useState } from 'react'
import Navbar from '../navbar/Navbar'
// import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Typography } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import GetAppIcon from '@mui/icons-material/GetApp';
import PrintIcon from '@mui/icons-material/Print';
import { useTranslation } from "react-i18next";
import { DataGrid } from '@mui/x-data-grid';
import {
    randomCreatedDate,
    randomTraderName,
    randomUnitPrice,
} from '@mui/x-data-grid-generator';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


// const useStyles = makeStyles({
//     table: {
//         minWidth: 650
//     },
//     thead: {
//         backgroundColor: "#094708",
//     },
//     tHColor: {
//         color: "#fff",
//     }
// });



// const rows = [
//     {
//         id: 1,
//         no: randomTraderName(),
//         dateTime: randomUpdatedDate(),
//         branchBankIn: randomTraderName(),
//         branchBankOut: randomTraderName(),
//         amountIn: randomUnitPrice(),
//         amountOut: randomUnitPrice(),
//         e_money_comission: randomUnitPrice(),
//         cashComission: randomUnitPrice(),
//         remark: randomTraderName(),
//         customerName: randomTraderName(),
//         employeeName: randomTraderName(),
//         alignItems: 'center',
//     },
//     {
//         id: 2,
//         no: randomTraderName(),
//         dateTime: randomCreatedDate(),
//         branchBankIn: randomTraderName(),
//         branchBankOut: randomTraderName(),
//         amountIn: randomUnitPrice(),
//         amountOut: randomUnitPrice(),
//         e_money_comission: randomUnitPrice(),
//         cashComission: randomUnitPrice(),
//         remark: randomTraderName(),
//         customerName: randomTraderName(),
//         employeeName: randomTraderName(),
//     },
//     {
//         id: 3,
//         no: randomTraderName(),
//         dateTime: randomCreatedDate(),
//         branchBankIn: randomTraderName(),
//         branchBankOut: randomTraderName(),
//         amountIn: randomUnitPrice(),
//         e_money_comission: randomUnitPrice(),
//         amountOut: randomUnitPrice(),
//         cashComission: randomUnitPrice(),
//         remark: randomTraderName(),
//         customerName: randomTraderName(),
//         employeeName: randomTraderName(),
//     },
//     {
//         id: 4,
//         no: randomTraderName(),
//         dateTime: randomCreatedDate(),
//         branchBankIn: randomTraderName(),
//         branchBankOut: randomTraderName(),
//         amountIn: randomUnitPrice(),
//         amountOut: randomUnitPrice(),
//         e_money_comission: randomUnitPrice(),
//         cashComission: randomUnitPrice(),
//         remark: randomTraderName(),
//         customerName: randomTraderName(),
//         employeeName: randomTraderName(),
//     },
//     {
//         id: 5,
//         no: randomTraderName(),
//         dateTime: randomCreatedDate(),
//         branchBankIn: randomTraderName(),
//         branchBankOut: randomTraderName(),
//         amountIn: randomUnitPrice(),
//         amountOut: randomUnitPrice(),
//         e_money_comission: randomUnitPrice(),
//         cashComission: randomUnitPrice(),
//         remark: randomTraderName(),
//         customerName: randomTraderName(),
//         employeeName: randomTraderName(),
//     },
//     {
//         id: 6,
//         no: randomTraderName(),
//         dateTime: randomCreatedDate(),
//         branchBankIn: randomTraderName(),
//         branchBankOut: randomTraderName(),
//         amountIn: randomUnitPrice(),
//         amountOut: randomUnitPrice(),
//         e_money_comission: randomUnitPrice(),
//         cashComission: randomUnitPrice(),
//         remark: randomTraderName(),
//         customerName: randomTraderName(),
//         employeeName: randomTraderName(),
//     },
//     {
//         id: 7,
//         no: randomTraderName(),
//         dateTime: randomCreatedDate(),
//         branchBankIn: randomTraderName(),
//         branchBankOut: randomTraderName(),
//         amountIn: randomUnitPrice(),
//         amountOut: randomUnitPrice(),
//         e_money_comission: randomUnitPrice(),
//         cashComission: randomUnitPrice(),
//         remark: randomTraderName(),
//         customerName: randomTraderName(),
//         employeeName: randomTraderName(),
//         alignItems: 'center',

//     },
//     {
//         id: 8,
//         no: randomTraderName(),
//         dateTime: randomCreatedDate(),
//         branchBankIn: randomTraderName(),
//         branchBankOut: randomTraderName(),
//         amountIn: randomUnitPrice(),
//         amountOut: randomUnitPrice(),
//         e_money_comission: randomUnitPrice(),
//         cashComission: randomUnitPrice(),
//         remark: randomTraderName(),
//         customerName: randomTraderName(),
//         employeeName: randomTraderName(),
//     },
//     {
//         id: 9,
//         no: randomTraderName(),
//         dateTime: randomCreatedDate(),
//         branchBankIn: randomTraderName(),
//         branchBankOut: randomTraderName(),
//         amountIn: randomUnitPrice(),
//         amountOut: randomUnitPrice(),
//         e_money_comission: randomUnitPrice(),
//         cashComission: randomUnitPrice(),
//         remark: randomTraderName(),
//         customerName: randomTraderName(),
//         employeeName: randomTraderName(),
//     },
//     {
//         id: 10,
//         no: randomTraderName(),
//         dateTime: randomCreatedDate(),
//         branchBankIn: randomTraderName(),
//         branchBankOut: randomTraderName(),
//         amountIn: randomUnitPrice(),
//         amountOut: randomUnitPrice(),
//         e_money_comission: randomUnitPrice(),
//         cashComission: randomUnitPrice(),
//         remark: randomTraderName(),
//         customerName: randomTraderName(),
//         employeeName: randomTraderName(),
//     },
//     {
//         id: 11,
//         no: randomTraderName(),
//         dateTime: randomCreatedDate(),
//         branchBankIn: randomTraderName(),
//         branchBankOut: randomTraderName(),
//         amountIn: randomUnitPrice(),
//         amountOut: randomUnitPrice(),
//         e_money_comission: randomUnitPrice(),
//         cashComission: randomUnitPrice(),
//         remark: randomTraderName(),
//         customerName: randomTraderName(),
//         employeeName: randomTraderName(),
//     },
//     {
//         id: 12,
//         no: randomTraderName(),
//         dateTime: randomCreatedDate(),
//         branchBankIn: randomTraderName(),
//         branchBankOut: randomTraderName(),
//         amountIn: randomUnitPrice(),
//         amountOut: randomUnitPrice(),
//         e_money_comission: randomUnitPrice(),
//         cashComission: randomUnitPrice(),
//         remark: randomTraderName(),
//         customerName: randomTraderName(),
//         employeeName: randomTraderName(),
//     }, {
//         id: 13,
//         no: randomTraderName(),
//         dateTime: randomCreatedDate(),
//         branchBankIn: randomTraderName(),
//         branchBankOut: randomTraderName(),
//         amountIn: randomUnitPrice(),
//         amountOut: randomUnitPrice(),
//         e_money_comission: randomUnitPrice(),
//         cashComission: randomUnitPrice(),
//         remark: randomTraderName(),
//         customerName: randomTraderName(),
//         employeeName: randomTraderName(),
//     },
//     {
//         id: 14,
//         no: randomTraderName(),
//         dateTime: randomCreatedDate(),
//         branchBankIn: randomTraderName(),
//         branchBankOut: randomTraderName(),
//         amountIn: randomUnitPrice(),
//         amountOut: randomUnitPrice(),
//         e_money_comission: randomUnitPrice(),
//         cashComission: randomUnitPrice(),
//         remark: randomTraderName(),
//         customerName: randomTraderName(),
//         employeeName: randomTraderName(),
//     },
// ];

let idCounter = 0;
const createRandomRow = () => {
    idCounter += 1;
    return {
        id: idCounter,
        no: '',
        dateTime: '',
        branchBankIn: '',
        branchBankOut: '',
        amountIn: '',
        amountOut: '',
        e_money_comission: '',
        cashComission: '',
        remark: '',
        customerName: '',
        employeeName: '',
    }
};


const createRandomRows = () => {
    idCounter += 1;
    return {
        id: idCounter,
        no: randomTraderName(),
        // no: '',
        // valueGetter: (params) => console.log("p", params.row.no),
        dateTime: randomCreatedDate(),
        branchBankIn: randomTraderName(),
        branchBankOut: randomTraderName(),
        amountIn: randomUnitPrice(),
        // amountIn: '',
        amountOut: randomUnitPrice(),
        e_money_comission: randomUnitPrice(),
        cashComission: randomUnitPrice(),
        remark: randomTraderName(),
        customerName: randomTraderName(),
        employeeName: randomTraderName(),
    }
};


const ListExchange = () => {
    const { t } = useTranslation();
    // const classes = useStyles();
    const [rows, setRows] = useState(() => [
        createRandomRows(),
    ]);

    const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleLink = () => {
        // navigate("/admin/create-employee")
    }
    const handleAddRow = () => {
        setRows((prevRows) => [...prevRows, createRandomRow()]);
    };

    const processRowUpdate = (newRow) => {
        const updatedRow = { ...newRow, isNew: false };
        console.log(updatedRow);
        //handle send data to api
        return updatedRow;
    };

    const columns = [
        {
            field: 'no', headerName: `${t('no')}`, width: 150, editable: true,
            headerAlign: 'center', headerClassName: 'super-app-theme--header',
        },
        {
            field: 'dateTime', headerName: `${t('date-time')}`, type: 'dateTime',
            width: 200, editable: true, headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
        },
        {
            field: 'branchBankIn', headerName: `${t('branch-bank-in')}`,
            width: 160, editable: true, headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
        },
        {
            field: 'branchBankOut', headerName: `${t(' branch-bank-out')}`,
            width: 160, editable: true, headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
        },
        {
            field: 'amountIn', headerName: `${t('amount-money-in')}`,
            width: 160, editable: true, headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
        },
        {
            field: 'amountOut', headerName: `${t('amount-money-out')}`,
            width: 160, editable: true, headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
        },
        {
            field: 'e_money_comission', headerName: `${t('e-comission')}`,
            width: 160, editable: true, headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
        },
        {
            field: 'cashComission', headerName: `${t('cash-comission')}`,
            width: 160, editable: true, headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
        },
        {
            field: 'remark', headerName: `${t('cash-comission')}`,
            width: 160, editable: true, headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
        },
        {
            field: 'customerName', headerName: `${t('customer.name')}`,
            width: 160, editable: true, headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
        },
        {
            field: 'employeeName', headerName: `${t('employee.name')}`,
            width: 160, editable: true, headerAlign: 'center',
            headerClassName: 'super-app-theme--header',
        },

    ];


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

                        </Button >
                        <Button size="small"
                            sx={{
                                textTransform: "none",
                                display: "flex", justifyContent: "space-evenly", alignItems: "center",
                                margin: "3px", padding: "7px", color: "#fff",
                                backgroundColor: "#1dad52", minWidth: "100px", fontSize: "14px", ':hover': {
                                    bgcolor: '#1dad52',
                                    color: '#fff'
                                }
                            }}
                            onClick={handleAddRow}>
                            {/* onClick={handleRowEdit}> */}
                            <AddCircleOutlineOutlinedIcon />
                            Add a row
                        </Button>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Box sx={{
                        height: 500, width: '100%', margin: "5px", '& .super-app-theme--header': {
                            backgroundColor: '#094708',
                            color: '#fff'
                        },
                    }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            experimentalFeatures={{ newEditingApi: true }}
                            processRowUpdate={processRowUpdate}
                        />
                    </Box>
                </Box>

            </div>
        </>
    )
}

export default ListExchange