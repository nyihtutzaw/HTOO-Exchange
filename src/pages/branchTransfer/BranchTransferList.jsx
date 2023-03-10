import React, { useEffect, useState } from "react";

// import Paper from "@material-ui/core/Paper";
import { Box, Button, Typography } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import GetAppIcon from "@mui/icons-material/GetApp";
import PrintIcon from "@mui/icons-material/Print";
import { useTranslation } from "react-i18next";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import GroupsIcon from "@mui/icons-material/Groups";
import DvrIcon from "@mui/icons-material/Dvr";
import { useLocation, useNavigate } from "react-router-dom";
// import DisplaySettingsRoundedIcon from '@mui/icons-material/DisplaySettingsRounded';
import Navbar from "../../components/navbar/Navbar";
import ConfirmDialog from "../../components/Dialogs/ConfirmDialog";
import { useDispatch, useSelector } from "react-redux";
import * as BranchTransferService from "../../services/branchTransferService";
import {
  deleteBranchTransfer,
  setBranchTransfers,
} from "../../store/reducer.branchTransfer";
import List from "./List";
import { makeStyles } from "@material-ui/core/styles";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { setLoading } from "../../store/reducer.loading";
import LoadingData from "../../components/commons/LoadingData";

const BranchTransferList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(false);
  const [editData, setEditData] = useState(false);
  const location = useLocation();
  const componentRef = useRef();
  const branchTransfers = useSelector(
    (state) => state.branchTransfer.branchTransfers
  );
  const loading = useSelector((state) => state.loading.loading);
  
  const handleDelete = async (id) => {
    await BranchTransferService.deleteBranchTransfer(id);
    dispatch(deleteBranchTransfer(id));
  };

  const handleLink = () => {
    navigate("/admin/create-branch-transfer");
  };

  const loadData = async () => {
    dispatch(setLoading());
    const response = await BranchTransferService.getAll();
    dispatch(setBranchTransfers(response));
    dispatch(setLoading());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleEdit = (e) => {
    navigate("/admin/edit-branch-transfer/" + e.id);
  };
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
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6" color="#094708" ml={2} mb={1} mt={0}>
            {" "}
            {t("branch-transfer.list")}
          </Typography>
          <DownloadTableExcel
            filename="Branch To Branch Lists"
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
            onClick={handleLink}
          >
            <AddCircleRoundedIcon />
            <Box>{t("new")}</Box>
          </Button>
        </Box>
        <Box ref={componentRef}>
          <List
            data={branchTransfers}
            onDelete={(row) => {
              setEditData(row);
              setShowDelete(true);
            }}
            handleEdit={handleEdit}
          />
        </Box>

        {showDelete && (
          <ConfirmDialog
            title={`Delete Branch to Branch Transfer`}
            body={`Are you sure to delete?`}
            onToggle={() => setShowDelete(false)}
            onConfirm={() => {
              setShowDelete(false);
              handleDelete(editData?.id);
            }}
          />
        )}
      </div>
    </>
  );
};

export default BranchTransferList;
