import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { withStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useTranslation } from "react-i18next";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import * as EmployeeService from "./../../services/employeeService";
import { setEmployees , deleteEmployee} from "../../store/reducer.employee";
import { useEffect } from "react";
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

const EmployeeList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [editData, setEditData] = useState(false);

  const dispatch = useDispatch();

  const employees = useSelector((state) => state.employee.employees);

  const loadData = async () => {
    const response = await EmployeeService.getAll();
    dispatch(setEmployees(response));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleEdit = (e) => {
    navigate("/admin/edit-employee/" + e.id);
  };

  const handleDelete = async (id) => {
    await EmployeeService.deleteEmployee(id);
    dispatch(deleteEmployee(id));
  };

  // const handleDetail = () => {
  //     console.log("detail")
  // }

  const handleLink = () => {
    navigate("/admin/create-employee");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            {"Brand Assign ဇယား"}
          </DialogTitle>
          <DialogContent>
            <CssTextField
              size="small"
              label="Search"
              fullWidth
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
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Main Branch"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Yangon Branch"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Mandalay Branch"
              />
            </FormGroup>
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
              onClick={handleClose}
              autoFocus
            >
              Assign Branch
            </Button>
          </DialogActions>
        </Dialog>

        <Box m={2}>
          <Box mt={2}>
            <Typography variant="h6" color="#094708" ml={2} mb={1} mt={0}>
              {" "}
              {t("employee.title")}
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
          <List
            data={employees}
            handleClickOpen={handleClickOpen}
            handleEdit={handleEdit}
            onDelete={(row) => {
              setEditData(row);
              setShowDelete(true);
            }}
          />
        </Box>
        {showDelete && (
          <ConfirmDialog
            title={`Delete Employee`}
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

export default EmployeeList;
