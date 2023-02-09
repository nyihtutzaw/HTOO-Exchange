import { useEffect, useState } from "react";

import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { withStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import * as BranchService from "./../../services/branchService";
import { setBranches, deleteBranch } from "../../store/reducer.branch";
import ConfirmDialog from "../../components/Dialogs/ConfirmDialog";
import List from "./List";
import * as EmployeeService from "./../../services/employeeService";
import { setEmployees } from "../../store/reducer.employee";
import AssignDialog from "./AssignDialog";

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

const BranchList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [editData, setEditData] = useState(false);
  const [selectedEmployeeIds, setSelectedEmployeeIds] = useState([]);

  const dispatch = useDispatch();

  const branches = useSelector((state) => state.branch.branches);
  const employees = useSelector((state) => state.employee.employees);

  const loadData = async () => {
    const response = await BranchService.getAll();
    dispatch(setBranches(response));

    const result = await EmployeeService.getAll();
    dispatch(setEmployees(result));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleEdit = (e) => {
    navigate("/admin/edit-branch/" + e.id);
  };

  const handleDelete = async (id) => {
    await BranchService.deleteBranch(id);
    dispatch(deleteBranch(id));
  };

  const handleChange = (event) => {
    let selectedId = parseInt(event.target.value);
    if (selectedEmployeeIds.find((id) => id === selectedId)) {
      setSelectedEmployeeIds(
        selectedEmployeeIds.filter((id) => id !== selectedId)
      );
    } else {
      setSelectedEmployeeIds([...selectedEmployeeIds, selectedId]);
    }
  };

  const handleLink = () => {
    navigate("/admin/create-branch");
  };

  const handleClickOpen = (e) => {
    setOpen(true);
    setEditData(e);
    let branch = branches.find((branch) => branch.id === e.id);
    setSelectedEmployeeIds(
      branch.employees.map((employee) => {
        return employee.id;
      })
    );
  };

  const handleAssign = async () => {
    await BranchService.assignEmployees(editData.id, {
      employees: selectedEmployeeIds,
    });
    const response = await BranchService.getAll();
    dispatch(setBranches(response));
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
        <Box m={2}>
          <Box mt={2}>
            <Typography variant="h6" color="#094708" ml={2} mb={1} mt={0}>
              {" "}
              {t("branch.list")}
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
            data={branches}
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
            title={`Delete Branch`}
            body={`Are you sure to delete ${editData?.name}?`}
            onToggle={() => setShowDelete(false)}
            onConfirm={() => {
              setShowDelete(false);
              handleDelete(editData?.id);
            }}
          />
        )}
        <AssignDialog
          open={open}
          handleClose={handleClose}
          CssTextField={CssTextField}
          data={employees}
          selectedEmployeeIds={selectedEmployeeIds}
          handleChange={handleChange}
          handleAssign={handleAssign}
        />
      </div>
    </>
  );
};

export default BranchList;
