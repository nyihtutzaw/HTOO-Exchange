import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from "@mui/material";
import * as yup from "yup";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useCallback } from "react";
import * as CashWalletService from "../../services/cashWalletService";
import { useSelector } from "react-redux";

function DepositWithdrawDialog({ open, handleClose, type, handleChange, handleSubmit }) {
  const { t } = useTranslation();

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      PaperProps={{
        style: { borderRadius: 18 },
      }}
    >
      <DialogTitle
        id="alert-dialog-title"
        bgcolor="#07824f"
        color="white"
        textAlign="center"
      >
        {type}
      </DialogTitle>
      {/* <form onSubmit={formHandleSubmit(handleSubmit)}> */}
      <DialogContent>
        <Stack spacing={2} direction="row" m={2}>
          <Button
            variant="contained"
            size="small"
            sx={{
              textTransform: "none",
              backgroundColor: "#094708",
              minWidth: "200px",
              fontSize: "14px",
              ":hover": {
                bgcolor: "#094708",
                color: "#fff",
              },
            }}
          >
            {t("amount")}
          </Button>
          <TextField
            type="text"
            required
            label=""
            variant="outlined"
            size="small"
            sx={{ width: "350px" }}
            onChange={handleChange}
            // {...register("amount")}
            // error={errors.amount?.message}
            // helperText={errors.amount?.message}
          />
        </Stack>
      </DialogContent>
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "15px",
        }}
      >
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#fff",
            color: "black",
            minWidth: "200px",
            fontSize: "14px",
            ":hover": {
              bgcolor: "#fff",
              color: "black",
            },
          }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#07824f",
            minWidth: "200px",
            fontSize: "14px",
            ":hover": {
              bgcolor: "#07824f",
              color: "#fff",
            },
          }}
          autoFocus
          onClick={handleSubmit}
        >
          {type}
        </Button>
      </DialogActions>
      {/* </form> */}
    </Dialog>
  );
}

export default DepositWithdrawDialog;
