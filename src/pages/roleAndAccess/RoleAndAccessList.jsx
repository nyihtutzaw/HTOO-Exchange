import React, { useEffect, useMemo, useState } from "react";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { withStyles } from "@material-ui/core/styles";

import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useTranslation } from "react-i18next";
import * as RoleService from "./../../services/roleService";
import { deleteRole, setRoles } from "../../store/reducer.role";
import { useDispatch, useSelector } from "react-redux";
import List from "./List";
import ConfirmDialog from "../../components/Dialogs/ConfirmDialog";
import queryString from "query-string";

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

const RoleAndAccessList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(false);
  const [editData, setEditData] = useState(false);
  const location = useLocation();
  const roles = useSelector((state) => state.role.roles);

  const handleDelete = async (id) => {
    await RoleService.deleteRole(id);
    dispatch(deleteRole(id));
  };

  const handleLink = () => {
    navigate("/admin/create-role-access");
  };

  const loadData = async () => {
    const response = await RoleService.getAll();
    dispatch(setRoles(response));
  };

  useEffect(() => {
    loadData();
  }, []);

  const onSearch = async (e) => {
    if (e.key === "Enter") {
      const query = queryString.parse(location.search);
      query.search = e.target.value;
      const response = await RoleService.getAll(queryString.stringify(query));
      dispatch(setRoles(response));
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
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
              {" "}
              {t("role-access.table")}
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
            data={roles}
            onDelete={(row) => {
              setEditData(row);
              setShowDelete(true);
            }}
          />
        </Box>
        {showDelete && (
          <ConfirmDialog
            title={`Delete Role`}
            body={`Are you sure to delete ${editData?.name}?`}
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

export default RoleAndAccessList;
