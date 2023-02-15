import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
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
  Typography,
} from "@mui/material";

import { useTranslation } from "react-i18next";

import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as ExchangeService from "./../../services/exchangeService";
import List from "./List";
import Filter from "./Filter";
import { setExchanges } from "../../store/reducer.exchange";
import AddDialog from "./AddDialog";

const ExchangeLists = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [age, setAge] = useState("");

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const location = useLocation();

  const handleClose = () => {
    setOpen(false);
  };

  const activeBranch = useSelector((state) => state.auth.activeBranch);
  const exchanges = useSelector((state) => state.exchange.exchanges);

  const loadData = async () => {
    const query = { branch_id: activeBranch.id };
    const response = await ExchangeService.getAll(query);
    dispatch(setExchanges(response));
  };

  useEffect(() => {
    loadData();
  }, [location.search]);

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
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
    console.log("edit");
  };

  const handleDelete = () => {
    console.log("delete");
  };

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
              {t("exchange-list")}
            </Typography>
          </Box>
          <Box
            m={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    label={t("start-date")}
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => (
                        <TextField {...params} sx={{ mr: 2 }} size="small" />
                    )}
                />
                <DesktopDatePicker
                    label={t("end-date")}
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => (
                        <TextField {...params} sx={{ mr: 2 }} size="small" />
                    )}
                />
            </LocalizationProvider>
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
                onClick={handleLink}
            >
                <GetAppIcon />
                <Box>Excel Export</Box>
            </Button>
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
                onClick={handleLink}
            >
                <PrintIcon />
                <Box>Print</Box>
            </Button> */}
            <Button
              variant="contained"
              size="small"
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                backgroundColor: "#1dad52",
                minWidth: "200px",
                fontSize: "14px",
                ":hover": {
                  bgcolor: "#1dad52",
                  color: "#fff",
                },
              }}
              onClick={handleClickOpen("paper")}
            >
              <AddCircleRoundedIcon />
              <Box>{t("new")}</Box>
            </Button>
          </Box>
        </Box>
      </div>
      <List rows={exchanges} />
      <AddDialog open={open} handleClose={handleClose} scroll={scroll} />
    </>
  );
};

export default ExchangeLists;
