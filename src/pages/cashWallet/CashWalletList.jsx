import { useCallback, useEffect, useState } from "react";

import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { withStyles } from "@material-ui/core/styles";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import * as CashWalletService from "../../services/cashWalletService";
import { setCashWallets } from "../../store/reducer.cashWallet";
import List from "./List";
import DepositWithdrawDialog from "./DepositWithdrawDialog";

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

const CashWalletList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [editData, setEditData] = useState(false);
  const [amount, setAmount] = useState(0);
  const location = useLocation();
  const dispatch = useDispatch();
  const [type, setType] = useState(null);
  const cashWallets = useSelector((state) => state.cashWallet.cashWallets);
  const [open, setOpen] = useState(false);

  const activeBranch = useSelector((state) => state.auth.activeBranch);

  const loadData = async () => {
    const query = { branch_id: activeBranch.id };
    const response = await CashWalletService.getAll(query);
    dispatch(setCashWallets(response));
  };

  useEffect(() => {
    loadData();
  }, [location.search]);

  const handleClickOpen = async (row, type) => {
    setOpen(true);

    setEditData(row);
    setType(type);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleLink = () => {
    navigate("/admin/create-cash-wallet");
  };

  const handleSubmit = async () => {
    if (type === "deposit") {
      await CashWalletService.deposit(
        {
          branch_id: activeBranch.id,
          amount: amount,
        },
        editData.id
      );
    } else {
      await CashWalletService.withdraw(
        {
          branch_id: activeBranch.id,
          amount: amount,
        },
        editData.id
      );
    }
    const query = { branch_id: activeBranch.id };
    const response = await CashWalletService.getAll(query);
    dispatch(setCashWallets(response));
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
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
              {t("cash_wallet.list")}
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
            {cashWallets.length === 0 && (
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
            )}
          </Box>
          <List data={cashWallets} handleClickOpen={handleClickOpen} />
        </Box>
        <DepositWithdrawDialog
          type={type}
          open={open}
          handleClose={handleClose}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default CashWalletList;
