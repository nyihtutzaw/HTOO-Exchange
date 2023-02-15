import React, { useEffect, useState } from "react";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { withStyles } from "@material-ui/core/styles";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import * as ExpenseService from "../../services/expenseService";
import { setExpenses, deleteExpense } from "../../store/reducer.expense";
import List from "./List";
import ConfirmDialog from "../../components/Dialogs/ConfirmDialog";

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

const ExpenseList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showDelete, setShowDelete] = useState(false);
  const [editData, setEditData] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();

  const expenses = useSelector((state) => state.expense.expenses);

  const activeBranch = useSelector((state) => state.auth.activeBranch);

  const loadData = async () => {
    const query = { branch_id: activeBranch.id };
    const response = await ExpenseService.getAll(query);
    dispatch(setExpenses(response));
  };

  useEffect(() => {
    loadData();
  }, [location.search]);

  const handleEdit = (e) => {
    navigate("/admin/edit-expense/" + e.id);
  };

  const handleDelete = async (id) => {
    await ExpenseService.deleteExpense(id);
    dispatch(deleteExpense(id));
  };

  const handleLink = () => {
    navigate("/admin/create-expense");
  };

  const onSearch = async (e) => {
    if (e.key === "Enter") {
      navigate("/admin/list-expense?search=" + e.target.value);
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
              {" "}
              {t("expense.list")}
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
              // onChange={this.onChange}
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
          {showDelete && (
            <ConfirmDialog
              title={`Delete Expense`}
              body={`Are you sure to delete ${editData?.name}?`}
              onToggle={() => setShowDelete(false)}
              onConfirm={() => {
                setShowDelete(false);
                handleDelete(editData?.id);
              }}
            />
          )}
          <List
            data={expenses}
            handleEdit={handleEdit}
            onDelete={(row) => {
              setEditData(row);
              setShowDelete(true);
            }}
          />
        </Box>
      </div>
    </>
  );
};

export default ExpenseList;
