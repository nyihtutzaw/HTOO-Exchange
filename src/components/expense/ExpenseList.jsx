import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, InputAdornment, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { withStyles } from '@material-ui/core/styles';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import DisplaySettingsRoundedIcon from '@mui/icons-material/DisplaySettingsRounded';
import { useNavigate } from "react-router-dom";
import Navbar from '../navbar/Navbar';
import { useTranslation } from "react-i18next";

function createData(Id, date, expense_name, expense_type, remark, bank_acc, total_expense) {
    return { Id, date, expense_name, expense_type, remark, bank_acc, total_expense };
}

const rows = [
    createData(1, '02-09-2022', 'ကားဆီ', 'Diesel', "ကုန်ခြင်း", "376,647,483,839,837", "30000"),
    createData(2, '02-09-2022', 'ကားဆီ', 'Diesel', "ကုန်ခြင်း", "376,647,483,839,837", "30000"),
    createData(3, '02-09-2022', 'ကားဆီ', 'Diesel', "ကုန်ခြင်း", "376,647,483,839,837", "30000"),
    createData(4, '02-09-2022', 'ကားဆီ', 'Diesel', "ကုန်ခြင်း", "376,647,483,839,837", "30000"),
    createData(5, '02-09-2022', 'ကားဆီ', 'Diesel', "ကုန်ခြင်း", "376,647,483,839,837", "30000"),
    createData(6, '02-09-2022', 'ကားဆီ', 'Diesel', "ကုန်ခြင်း", "376,647,483,839,837", "30000"),
];

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'green',
            },
            '&:hover fieldset': {
                borderColor: 'green',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);


const ExpenseList = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    const handleEdit = (e) => {
        console.log("edit")
    }

    const handleDelete = () => {
        console.log("delete");
    }

    const handleDetail = () => {
        console.log("detail")
    }

    const handleLink = () => {
        navigate("/admin/create-expense")
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
                    display: "flex", flexDirection: "column"
                }}
            >
                <Box m={2}>
                    <Box mt={2}>
                        <Typography variant="h6" color="#094708" ml={2} mb={1} mt={0}> {t("expense.list")}
                        </Typography>
                    </Box>
                    <Box m={1} display="flex" justifyContent="space-between" alignItems="center">
                        <CssTextField
                            size='small'
                            label="Search"
                            className="search"
                            name="search"
                            // onChange={this.onChange}
                            type="text"
                            autoComplete=""
                            margin="normal"
                            inputProps={{
                                style: { fontFamily: 'nunito', color: 'black' },
                            }}

                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchRoundedIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button variant="contained" size="small" sx={{
                            display: "flex", justifyContent: "space-evenly", alignItems: "center",
                            backgroundColor: "#1dad52", minWidth: "200px", fontSize: "14px", ':hover': {
                                bgcolor: '#1dad52',
                                color: '#fff'
                            }
                        }} onClick={handleLink}>
                            <AddCircleRoundedIcon />
                            <Box>
                            {t("new")}
                            </Box>
                            </Button>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ backgroundColor: "#094708", }}>
                                <TableRow>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="center">{t("no")}</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="center">{t("date")}</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="center"> {t("expense.name")}</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="center"> {t("expense.category")}</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="center"> {t("about")}</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="center"> {t("bank.account")}</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="center"> {t("expense.total")}</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="center">{t("action")}</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.Id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row" align="center">
                                            {row.Id}
                                        </TableCell>
                                        <TableCell align="center">{row.date}</TableCell>
                                        <TableCell align="center">{row.expense_name}</TableCell>
                                        <TableCell align="center">{row.expense_type}</TableCell>
                                        <TableCell align="center">{row.remark}</TableCell>
                                        <TableCell align="center">{row.bank_acc}</TableCell>
                                        <TableCell align="center">{row.total_expense}</TableCell>
                                        <TableCell align="center">
                                            <DisplaySettingsRoundedIcon onClick={handleDetail} sx={{ color: "green", fontSize: "25px" }} />
                                            <DriveFileRenameOutlineRoundedIcon onClick={handleEdit} sx={{ color: "#36353d", fontSize: "25px", marginLeft: "5px" }} />
                                            <DeleteForeverRoundedIcon onClick={handleDelete} sx={{ color: "red", fontSize: "25px", marginLeft: "5px" }} />
                                        </TableCell>
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

export default ExpenseList

