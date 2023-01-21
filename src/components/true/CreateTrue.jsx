
import Navbar from '../navbar/Navbar'
// import { makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Box, Button, Card, Stack, TextareaAutosize, Typography } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import GetAppIcon from '@mui/icons-material/GetApp';
import PrintIcon from '@mui/icons-material/Print';
import { useTranslation } from "react-i18next";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DriveFileRenameOutlineRoundedIcon from '@mui/icons-material/DriveFileRenameOutlineRounded';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import SaveIcon from '@mui/icons-material/Save';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { withStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import Paper from "@material-ui/core/Paper";
import { green } from '@material-ui/core/colors';

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650
//   },
//   thead: {
//     backgroundColor: "#094708",
//   },
//   tHColor: {
//     color: "#fff",
//   }
// });

const CustomTableCell = withStyles(theme => ({
  head: {
    // backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);


function createData(no, datetime, transferPhone, exportPhone, transitionId, commType, transferAmount,
  transferFee, exportAmount, trueAccount, comission, toBank, fromBank, omt, about, trueAccountLeft,
  totalEMoney, totalCashMoney, employeeName) {
  return {
    no, datetime, transferPhone, exportPhone, transitionId, commType, transferAmount,
    transferFee, exportAmount, trueAccount, comission, toBank, fromBank, omt, about, trueAccountLeft,
    totalEMoney, totalCashMoney, employeeName

  };
}

const rows = [
  createData(1, "12-08-2022 12-30PM", "099877788", "092222333322", "hgfggvfgdlkdferoif73", "Local", "120000",
    10000, 10000, "Mg Mg Acc", "12%", "AYA", "KBZ", "Mathi", "Is OK?", "3000000", "450000", "300000", "Thu Ya Win"),
  createData(2, "12-08-2022 12-30PM", "099877788", "092222333322", "hgfggvfgdlkdferoif73", "Local", 120000,
    10000, 10000, "Mg Mg Acc", "12%", "AYA", "KBZ", "Mathi", "Is OK?", 3000000, 450000, 300000, "Thu Ya Win"),
  createData(3, "12-08-2022 12-30PM", "099877788", "092222333322", "hgfggvfgdlkdferoif73", "Local", 120000,
    10000, 10000, "Mg Mg Acc", "12%", "AYA", "KBZ", "Mathi", "Is OK?", 3000000, 450000, 300000, "Thu Ya Win"),
  createData(4, "12-08-2022 12-30PM", "099877788", "092222333322", "hgfggvfgdlkdferoif73", "Local", 120000,
    10000, 10000, "Mg Mg Acc", "12%", "AYA", "KBZ", "Mathi", "Is OK?", 3000000, 450000, 300000, "Thu Ya Win"),
  createData(5, "12-08-2022 12-30PM", "099877788", "092222333322", "hgfggvfgdlkdferoif73", "Local", 120000,
    10000, 10000, "Mg Mg Acc", "12%", "AYA", "KBZ", "Mathi", "Is OK?", 3000000, 450000, 300000, "Thu Ya Win"),
];

function CreateTrue() {
  const { t } = useTranslation();
  const [age, setAge] = useState('');
  const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const descriptionElementRef = React.useRef(null);

  const customColumnStyle = {
    wordWrap: "break-word",
    minWidth: "150px",
    backgroundColor: green[900]
  };

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
              {t('true-list')}
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
      </div>

      <Box display="flex" justifyContent="center" alignItems="center">
        <Paper  >
          <TableContainer style={{ width: 1400, marginTop: "5px" }} >
            <Table >
              <TableHead>
                <TableRow>
                  <CustomTableCell style={customColumnStyle} align="center"
                  >{t('no')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('date-time')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('true-transfer-phone')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('true-export-phone')}</CustomTableCell>

                  <CustomTableCell style={customColumnStyle} align="center">{t('transfer-id')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('comm-type')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('transfer-amount')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('transfer-fee')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('export-amount')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('true-account')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('comission')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('to-bank')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('from-bank')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('omt')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('about')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('true-account-left')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('total-e-money')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('total-cash-money')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('employee.name')}</CustomTableCell>
                  <CustomTableCell style={customColumnStyle} align="center">{t('action')}</CustomTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.no}>
                    <TableCell align='center' component="th" scope="row">
                      {row.no}
                    </TableCell>

                    <CustomTableCell
                      // style={customColumnStyle}
                      component="th"
                      scope="row"
                      align="center"
                    >
                      {row.datetime}
                    </CustomTableCell>
                    <TableCell align="center">{row.transferPhone}</TableCell>
                    <TableCell align="center">{row.exportPhone}</TableCell>
                    <TableCell align="center">{row.transitionId}</TableCell>
                    <TableCell align="center">{row.commType}</TableCell>
                    <TableCell align="center">{row.transferAmount}</TableCell>
                    <TableCell align="center">{row.transferFee}</TableCell>
                    <TableCell align="center">{row.exportAmount}</TableCell>
                    <TableCell align="center">{row.trueAccount}</TableCell>
                    <TableCell align="center">{row.comission}</TableCell>
                    <TableCell align="center">{row.toBank}</TableCell>
                    <TableCell align="center">{row.fromBank}</TableCell>
                    <TableCell align="center">{row.omt}</TableCell>
                    <TableCell align="center">{row.about}</TableCell>
                    <TableCell align="center">{row.trueAccountLeft}</TableCell>
                    <TableCell align="center">{row.totalEMoney}</TableCell>
                    <TableCell align="center">{row.totalCashMoney}</TableCell>
                    <TableCell align="center">{row.employeeName}</TableCell>
                    <TableCell align="center">
                      <DriveFileRenameOutlineRoundedIcon onClick={handleEdit('paper')} sx={{ color: "#36353d", fontSize: "25px" }} />
                      <DeleteForeverRoundedIcon onClick={handleDelete} sx={{ color: "red", fontSize: "25px", marginLeft: "10px" }} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
          </TableContainer>
        </Paper>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{t("create-true-money")}</DialogTitle>
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
                <TextField type="text" required label={t('true-transfer-phone')} variant="outlined" size="small" sx={{ width: "350px" }} />
                <TextField type="text" required label={t('true-export-phone')} variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <TextField type="text" required label={t('transfer-id')} variant="outlined" size="small" sx={{ width: "350px" }} />
                <TextField type="text" required label={t('comm-type')} variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <TextField type="text" required label={t('transfer-amount')} variant="outlined" size="small" sx={{ width: "350px" }} />
                <TextField type="text" required label={t('transfer-fee')} variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <TextField type="text" required label={t('export-amount')} variant="outlined" size="small" sx={{ width: "350px" }} />
                <TextField type="text" required label={t('true-account')} variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <TextField type="text" required label={t('comission')} variant="outlined" size="small" sx={{ width: "350px" }} />
                <TextField type="text" required label={t('from-bank')} variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <TextField type="text" required label={t('to-bank')} variant="outlined" size="small" sx={{ width: "350px" }} />
                <TextField type="text" required label={t('omt')} variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <TextField type="text" required label={t('true-account-left')} variant="outlined" size="small" sx={{ width: "350px" }} />
                <TextField type="text" required label={t('total-e-money')} variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <TextField type="text" required label={t('total-cash-money')} variant="outlined" size="small" sx={{ width: "350px" }} />
                <TextField type="text" required label={t('employee.name')} variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>

              <Stack spacing={2} direction="row" m={2}>
                <TextareaAutosize placeholder="Please Enter About..."
                  minRows={5} required cols={28} type="text" label={t('about')} variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>

            </Box>

          </Card>

        </DialogContent >
        <DialogActions sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: '13px' }} >
          {/* <Button variant="contained" size="small" sx={{
            display: "flex", justifyContent: "space-evenly", alignItems: "center",
            backgroundColor: "#fff", minWidth: "100px", fontSize: "14px", color: "green", textTransform: "none", ':hover': {
              bgcolor: '#fff',
              color: '#094708'
            }
          }}>
            <SaveIcon />
            {t("save_assign")}</Button> */}
          <div></div>
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


  );
}

export default CreateTrue;
