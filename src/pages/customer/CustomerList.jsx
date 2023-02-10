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
import * as CustomerService from "./../../services/customerService";
import { deleteCustomer, setCustomers } from "../../store/reducer.customer";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

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

const CustomerList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(false);
  const [editData, setEditData] = useState(false);
  const location = useLocation();
  const customers = useSelector((state) => state.customer.customers);

  const handleDelete = async (id) => {
    await CustomerService.deleteCustomer(id);
    dispatch(deleteCustomer(id));
  };

  const handleLink = () => {
    navigate("/admin/create-customer");
  };

  const loadData = async () => {
    const query = queryString.parse(location.search);
    const response = await CustomerService.getAll(query);
    dispatch(setCustomers(response));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleEdit = (e) => {
    navigate("/admin/edit-customer/" + e.id);
  };

  const onSearch = async (e) => {
    if (e.key === "Enter") {
      const query = queryString.parse(location.search);
      query.search = e.target.value;
      const response = await CustomerService.getAll(
        queryString.stringify(query)
      );
      dispatch(setCustomers(response));
    }
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
          flexDirection: "column",
        }}
      >
        <Box m={2}>
          <Box mt={2}>
            <Typography variant="h6" color="#094708" ml={2} mb={1} mt={0}>
              {t("customer.list")}
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
            data={customers}
            onDelete={(row) => {
              setEditData(row);
              setShowDelete(true);
            }}
            handleEdit={handleEdit}
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

export default CustomerList;
