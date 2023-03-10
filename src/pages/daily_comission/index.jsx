import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Box, Button, Paper, Typography } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import GetAppIcon from "@mui/icons-material/GetApp";
import PrintIcon from "@mui/icons-material/Print";
import { useTranslation } from "react-i18next";
import * as DailyCommissionService from "./../../services/dailyCommission";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import LoadingData from "../../components/commons/LoadingData";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../store/reducer.loading";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
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
  },
});

const TransitionRecord = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const componentRef = useRef();
  // const [age, setAge] = useState('');
  const [startDate, setStartDate] = useState(dayjs(new Date()));
  const [endDate, setEndDate] = useState(dayjs(new Date()));
  const [data, setData] = useState([]);
  // const [open, setOpen] = useState(false);
  // const [scroll, setScroll] = useState('paper');
  const loading = useSelector((state) => state.loading.loading);
  const dispatch = useDispatch();
  const handleStartDateChange = (newValue) => {
    setStartDate(newValue);
  };

  const handleEndDateChange = (newValue) => {
    setEndDate(newValue);
  };

  const handleSearch = async () => {
    if (startDate && endDate) {
      const query = {
        start_date: dayjs(startDate).format("YYYY-MM-DD"),
        end_date: dayjs(endDate).format("YYYY-MM-DD"),
      };
      dispatch(setLoading());
      const response = await DailyCommissionService.getAll(query);
      setData(response);
      dispatch(setLoading());
    }
  };

  const loadData = async () => {
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const query = {
      start_date: dayjs(firstDayOfMonth).format("YYYY-MM-DD"),
      end_date: dayjs(lastDayOfMonth).format("YYYY-MM-DD"),
    };
    dispatch(setLoading());
    const response = await DailyCommissionService.getAll(query);
    setData(response);
    dispatch(setLoading());
  };

  useEffect(() => {
    loadData();
  }, []);
  if (loading) {
    return (
      <>
        <Navbar />
        <LoadingData />
      </>
    );
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
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          m={2}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Box mt={2}>
            <Typography variant="h6" color="#094708" ml={2} mb={1} mt={0}>
              {t("transition-record")}
            </Typography>
          </Box>
          <Box
            m={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label={t("start-date")}
                inputFormat="MM/DD/YYYY"
                value={startDate}
                onChange={handleStartDateChange}
                renderInput={(params) => (
                  <TextField {...params} sx={{ mr: 2 }} size="small" />
                )}
              />
              <DesktopDatePicker
                label={t("end-date")}
                inputFormat="MM/DD/YYYY"
                value={endDate}
                onChange={handleEndDateChange}
                renderInput={(params) => (
                  <TextField {...params} sx={{ mr: 2 }} size="small" />
                )}
              />
            </LocalizationProvider>
            <Button
              variant="contained"
              size="small"
              onClick={handleSearch}
              sx={{
                textTransform: "none",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                margin: "3px",
                padding: "7px",
                backgroundColor: "#1dad52",
                minWidth: "100px",
                fontSize: "14px",
                ":hover": {
                  bgcolor: "#1dad52",
                  color: "#fff",
                },
              }}
            >
              <Box>Search</Box>
            </Button>
            <DownloadTableExcel
              filename="wave_lists"
              sheet="users"
              currentTableRef={componentRef.current}
            >
              <Button
                variant="contained"
                size="small"
                sx={{
                  textTransform: "none",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  margin: "3px",
                  padding: "7px",
                  backgroundColor: "#1dad52",
                  minWidth: "100px",
                  fontSize: "14px",
                  ":hover": {
                    bgcolor: "#1dad52",
                    color: "#fff",
                  },
                }}
              >
                <GetAppIcon />
                <Box>Excel Export</Box>
              </Button>
            </DownloadTableExcel>

            <ReactToPrint
              trigger={() => (
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: "none",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    margin: "3px",
                    padding: "7px",
                    backgroundColor: "#1dad52",
                    minWidth: "100px",
                    fontSize: "14px",
                    ":hover": {
                      bgcolor: "#1dad52",
                      color: "#fff",
                    },
                  }}
                >
                  <PrintIcon />
                  <Box>Print</Box>
                </Button>
              )}
              content={() => componentRef.current}
            />
          </Box>
        </Box>
        <Box
          ref={componentRef}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ margin: "10px" }}
        >
          <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple-table">
              <TableHead className={classes.thead}>
                <TableRow>
                  <TableCell className={classes.tHColor}>{t("no")}</TableCell>
                  <TableCell className={classes.tHColor} align="center">
                    {t("date-time")}
                  </TableCell>
                  <TableCell className={classes.tHColor} align="center">
                    {t("e-comission")}
                  </TableCell>
                  <TableCell className={classes.tHColor} align="center">
                    {t("cash-comission")}
                  </TableCell>
                  <TableCell className={classes.tHColor} align="center">
                    {t("wave-comission")}
                  </TableCell>
                  <TableCell className={classes.tHColor} align="center">
                    {t("true-comission")}
                  </TableCell>
                  <TableCell className={classes.tHColor} align="center">
                    {t("total-comission")}
                  </TableCell>
                  <TableCell className={classes.tHColor} align="center">
                    {t("total-expense")}
                  </TableCell>
                  <TableCell className={classes.tHColor} align="center">
                    {t("total-netprofit")}
                  </TableCell>
                  {/* <TableCell className={classes.tHColor} align="center">{t('action')}</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow key={row.no}>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="center">
                      {dayjs(row.date).format("DD/MM/YYYY")}
                    </TableCell>
                    <TableCell align="center">
                      {row.e_money_comission}
                    </TableCell>

                    <TableCell align="center">{row.cash_comission}</TableCell>
                    <TableCell align="center">{row.wave_comission}</TableCell>
                    <TableCell align="center">{row.true_comission}</TableCell>
                    <TableCell align="center">
                      {Number(row.cash_comission) +
                        Number(row.wave_comission) +
                        Number(row.true_comission)}
                    </TableCell>
                    <TableCell align="center">{row.expense}</TableCell>
                    <TableCell align="center">
                      {Number(row.cash_comission) +
                        Number(row.wave_comission) +
                        Number(row.true_comission) -
                        Number(row.expense)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Box>
      </div>
    </>
  );
};

export default TransitionRecord;
