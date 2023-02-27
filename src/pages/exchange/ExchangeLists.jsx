import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import ConfirmDialog from "../../components/Dialogs/ConfirmDialog";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { Box, Button, Typography } from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import PrintIcon from "@mui/icons-material/Print";
import { useTranslation } from "react-i18next";

import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as ExchangeService from "./../../services/exchangeService";
import List from "./List";
import Filter from "./Filter";
import { setExchanges, deleteExchange } from "../../store/reducer.exchange";
import AddDialog from "./AddDialog";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";

const ExchangeLists = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(false);
  const [editData, setEditData] = useState(false);
  const componentRef = useRef();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const location = useLocation();

  const handleClose = () => {
    window.location.reload();
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

  const handleDelete = async (id) => {
    await ExchangeService.deleteData(id);
    dispatch(deleteExchange(id));
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
            
            */}

            <DownloadTableExcel
              filename="Exchange Lists"
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
      <Box ref={componentRef}>
        <List
          rows={exchanges}
          handleDelete={(row) => {
            setEditData(row);
            setShowDelete(true);
          }}
          handleEdit={(row) => {
            setEditData(row);
            setOpen(true);
          }}
        />
      </Box>
      <AddDialog
        open={open}
        editData={editData}
        handleClose={() => {
          handleClose();
          loadData();
        }}
        scroll={scroll}
      />
      {showDelete && (
        <ConfirmDialog
          title={`Delete Exchange`}
          body={`Are you sure to delete`}
          onToggle={() => setShowDelete(false)}
          onConfirm={() => {
            setShowDelete(false);
            handleDelete(editData?.id);
          }}
        />
      )}
    </>
  );
};

export default ExchangeLists;
