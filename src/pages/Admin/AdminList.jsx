import React, { useEffect, useState } from "react";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "../../components/navbar/Navbar";
import { useTranslation } from "react-i18next";
import List from "./List";
import ConfirmDialog from "../../components/Dialogs/ConfirmDialog";
import { useDispatch, useSelector } from "react-redux";
import * as AdminService from "../../services/adminService";
import { deleteAdmin, setAdmins } from "../../store/reducer.admin";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { setLoading } from "../../store/reducer.loading";
import LoadingData from "../../components/commons/LoadingData";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "green",
      },
      "&:hover fieldset": {
        borderColor: "green",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  },
})(TextField);

const AdminList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(false);
  const [editData, setEditData] = useState(false);
  const location = useLocation();
  const admins = useSelector((state) => state.admin.admins);
  const loading = useSelector((state) => state.loading.loading);
  
  const handleDelete = async (id) => {
    await AdminService.deleteAdmin(id);
    dispatch(deleteAdmin(id));
  };

  const handleLink = () => {
    navigate("/admin/create-admin");
  };

  const loadData = async () => {
    const query = queryString.parse(location.search);
    dispatch(setLoading());
    const response = await AdminService.getAll(query);
    dispatch(setAdmins(response));
    dispatch(setLoading());
  };

  useEffect(() => {
    loadData();
  }, [location.search]);

  const handleEdit = (e) => {
    navigate("/admin/edit-admin/" + e.id);
  };

  const onSearch = async (e) => {
    if (e.key === "Enter") {
      navigate("/admin/list-admin?search=" + e.target.value);
    }
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
          flexDirection: "column",
        }}
      >
        <Box m={2}>
          <Box mt={2}>
            <Typography variant="h6" color="#094708" ml={2} mb={1} mt={0}>
              {t("admin.list")}
            </Typography>
          </Box>
          <Box
            m={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <CssTextField
              size="small"
              label="Search"
              className="search"
              name="search"
              onKeyDown={onSearch}
              type="text"
              autoComplete=""
              margin="normal"
              inputProps={{
                style: { fontFamily: "nunito", color: "black" },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon />
                  </InputAdornment>
                ),
              }}
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

          <List
            data={admins?.accounts}
            onDelete={(row) => {
              setEditData(row);
              setShowDelete(true);
            }}
            handleEdit={handleEdit}
          />
        </Box>
        {showDelete && (
          <ConfirmDialog
            title={`Delete Admin`}
            body={`Are you sure to delete ${editData?.email}?`}
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

export default AdminList;
