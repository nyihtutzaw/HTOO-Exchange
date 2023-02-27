import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
// import Paper from "@material-ui/core/Paper";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import PrintIcon from "@mui/icons-material/Print";
import { useTranslation } from "react-i18next";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
// import Modal from '@mui/joy/Modal';
// import { Stack } from '@mui/joy';
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import * as WaveMoneyTransactionService from "../../services/waveMoneyTransactionService";
import {
  deleteWaveMoneyTransaction,
  setWaveMoneyTransactions,
} from "../../store/reducer.waveMoneyTransaction";
import ConfirmDialog from "../../components/Dialogs/ConfirmDialog";
import CreateWave from "./CreateWave";
import usePermission from "../../hooks/usePermission";

const ListWave = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(false);
  const [editData, setEditData] = useState(false);

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const location = useLocation();
  const { permitCreate } = usePermission("wave");

  const handleClose = () => {
    window.location.reload();
  };

  // const activeBranch = useSelector((state) => state.auth.activeBranch);
  const waveMoneyTransactions = useSelector(
    (state) => state.waveMoneyTransaction.waveMoneyTransactions
  );

  const loadData = async () => {
    // const query = { branch_id: activeBranch.id };
    const response = await WaveMoneyTransactionService.getAll();
    dispatch(setWaveMoneyTransactions(response));
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

  //   const handleEdit = (scrollType) => () => {
  //     setOpen(true);
  //     setScroll(scrollType);
  //     console.log("edit");
  //   };

  const handleDelete = async (id) => {
    await WaveMoneyTransactionService.deleteWaveMoneyTransaction(id);
    dispatch(deleteWaveMoneyTransaction(id));
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
              {/* {t('exchange-list')} */}

              {t("wave_money_transcation")}
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
                // value={value}
                // onChange={handleChange}
                renderInput={(params) => (
                  <TextField {...params} sx={{ mr: 2 }} size="small" />
                )}
              />
              <DesktopDatePicker
                label={t("end-date")}
                inputFormat="MM/DD/YYYY"
                // value={value}
                // onChange={handleChange}
                renderInput={(params) => (
                  <TextField {...params} sx={{ mr: 2 }} size="small" />
                )}
              />
            </LocalizationProvider> */}
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
              //onClick={handleLink}
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
              // onClick={handleLink}
            >
              <PrintIcon />
              <Box>Print</Box>
            </Button>
            {permitCreate && (
              <Button
                variant="contained"
                size="small"
                sx={{
                  textTransform: "none",
                  margin: "3px",
                  padding: "7px",
                  minWidth: "100px",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  backgroundColor: "#1dad52",
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
            )}
          </Box>
        </Box>
        <List
          data={waveMoneyTransactions}
          handleDelete={(row) => {
            setEditData(row);
            setShowDelete(true);
          }}
          //   handleEdit={(row) => {
          //     setEditData(row);
          //     setOpen(true);
          //   }}
        />
      </div>
      {showDelete && (
        <ConfirmDialog
          title={`Delete Wave Money Transaction`}
          body={`Are you sure to delete`}
          onToggle={() => setShowDelete(false)}
          onConfirm={() => {
            setShowDelete(false);
            handleDelete(editData?.id);
          }}
        />
      )}

      <CreateWave
        open={open}
        editData={editData}
        handleClose={() => {
          handleClose();
          loadData();
        }}
        scroll={scroll}
        descriptionElementRef={descriptionElementRef}
      />
    </>
  );
};

export default ListWave;
