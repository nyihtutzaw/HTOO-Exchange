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

function createData(Id, data, expense_name, expense_type, remark, bank_acc, total_expense) {
    return { Id, data, expense_name, expense_type, remark, bank_acc, total_expense };
}

const rows = [
    createData(1, '02-09-2022', 'ကားဆီ', 'Diesel', "ပျက်လပ်ခြင်း", "376,647,483,839,837", "30000"),
    createData(2, '02-09-2022', 'ကားဆီ', 'Diesel', "ပျက်လပ်ခြင်း", "376,647,483,839,837", "30000"),
    createData(3, '02-09-2022', 'ကားဆီ', 'Diesel', "ပျက်လပ်ခြင်း", "376,647,483,839,837", "30000"),
    createData(4, '02-09-2022', 'ကားဆီ', 'Diesel', "ပျက်လပ်ခြင်း", "376,647,483,839,837", "30000"),
    createData(5, '02-09-2022', 'ကားဆီ', 'Diesel', "ပျက်လပ်ခြင်း", "376,647,483,839,837", "30000"),
    createData(6, '02-09-2022', 'ကားဆီ', 'Diesel', "ပျက်လပ်ခြင်း", "376,647,483,839,837", "30000"),
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
                        <Typography variant="h6" color="#094708" ml={2} mb={1} mt={0}>ကုန်ကျစရိတ် စာရင်း
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
                            backgroundColor: "#1dad52", minWidth: "200px", fontSize: "14px", ':hover': {
                                bgcolor: '#1dad52',
                                color: '#fff'
                            }
                        }} onClick={handleLink}>
                            <AddCircleRoundedIcon />
                            အသစ်ထည့်မည်</Button>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ backgroundColor: "#094708", }}>
                                <TableRow>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }}>စဉ်</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">ရက်စွဲ</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">ကုန်ကျစရိတ်အမည်</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">ကုန်ကျစရိတ်အမျိူးအစား</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">အကြောင်းအရာ</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">Bank အကောင့်</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">စုစုပေါင်းကုန်ကျစရိတ်</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.Id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.Id}
                                        </TableCell>
                                        <TableCell align="right">{row.date}</TableCell>
                                        <TableCell align="right">{row.expense_name}</TableCell>
                                        <TableCell align="right">{row.expense_type}</TableCell>
                                        <TableCell align="right">{row.remark}</TableCell>
                                        <TableCell align="right">{row.bank_acc}</TableCell>
                                        <TableCell align="right">{row.total_expense}</TableCell>
                                        <TableCell align="right">
                                            <DisplaySettingsRoundedIcon onClick={handleDetail} sx={{ color: "green", fontSize: "25px" }} />
                                            <DriveFileRenameOutlineRoundedIcon onClick={handleEdit} sx={{ color: "#36353d", fontSize: "25px", marginLeft: "5px" }} />
                                            <DeleteForeverRoundedIcon onClick={handleDelete} sx={{ color: "red", fontSize: "25px", marginLeft: "5px" }} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer><Box mt={2}>
                        <Typography variant="h6" color="#094708" ml={2} mb={1} mt={0}>ကုန်ကျစရိတ် စာရင်း
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
                            backgroundColor: "#1dad52", minWidth: "200px", fontSize: "14px", ':hover': {
                                bgcolor: '#1dad52',
                                color: '#fff'
                            }
                        }} onClick={handleLink}>
                            <AddCircleRoundedIcon />
                            အသစ်ထည့်မည်</Button>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ backgroundColor: "#094708", }}>
                                <TableRow>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }}>စဉ်</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">ရက်စွဲ</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">ကုန်ကျစရိတ်အမည်</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">ကုန်ကျစရိတ်အမျိူးအစား</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">အကြောင်းအရာ</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">Bank အကောင့်</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">စုစုပေါင်းကုန်ကျစရိတ်</TableCell>
                                    <TableCell sx={{ color: "white", fontSize: "16px" }} align="right">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.Id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.Id}
                                        </TableCell>
                                        <TableCell align="right">{row.date}</TableCell>
                                        <TableCell align="right">{row.expense_name}</TableCell>
                                        <TableCell align="right">{row.expense_type}</TableCell>
                                        <TableCell align="right">{row.remark}</TableCell>
                                        <TableCell align="right">{row.bank_acc}</TableCell>
                                        <TableCell align="right">{row.total_expense}</TableCell>
                                        <TableCell align="right">
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

