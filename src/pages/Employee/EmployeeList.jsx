import React, { useState } from "react";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { withStyles } from "@material-ui/core/styles";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useTranslation } from "react-i18next";
import List from "./List";
import { useDispatch, useSelector } from "react-redux";
import * as EmployeeService from "./../../services/employeeService";
import * as BranchService from "./../../services/branchService";
import { setEmployees, deleteEmployee } from "../../store/reducer.employee";
import { useEffect } from "react";
import ConfirmDialog from "../../components/Dialogs/ConfirmDialog";
import { setBranches } from "../../store/reducer.branch";
import AssignDialog from "./AssignDialog";
import queryString from "query-string";
import usePermission from "../../hooks/usePermission";

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
  const [selectedBranchIds, setSelectedBranchIds] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();

  const { permitCreate } = usePermission("employee");

  const employees = useSelector((state) => state.employee.employees);
  const branches = useSelector((state) => state.branch.branches);

  const loadData = async () => {
    const response = await EmployeeService.getAll();
    dispatch(setEmployees(response));

    const result = await BranchService.getAll();
    dispatch(setBranches(result));
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

  const handleChange = (event) => {
    let selectedId = parseInt(event.target.value);
    if (selectedBranchIds.find((id) => id === selectedId)) {
      setSelectedBranchIds(selectedBranchIds.filter((id) => id !== selectedId));
    } else {
      setSelectedBranchIds([...selectedBranchIds, selectedId]);
    }
  };

  const handleLink = () => {
    navigate("/admin/create-employee");
  };

  const handleClickOpen = (e) => {
    setOpen(true);
    setEditData(e);
    let employee = employees.find((employee) => employee.id === e.id);
    setSelectedBranchIds(
      employee.branches.map((branch) => {
        return branch.id;
      })
    );
  };

  const handleAssign = async () => {
    await EmployeeService.assignToBranches(editData.id, {
      branches: selectedBranchIds,
    });
    const response = await EmployeeService.getAll();
    dispatch(setEmployees(response));
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSearch = async (e) => {
    if (e.key === "Enter") {
      const query = queryString.parse(location.search);
      query.search = e.target.value;
      const response = await EmployeeService.getAll(
        queryString.stringify(query)
      );
      dispatch(setEmployees(response));
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

            {permitCreate && (
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
        <AssignDialog
          open={open}
          handleClose={handleClose}
          CssTextField={CssTextField}
          data={branches}
          selectedBranchIds={selectedBranchIds}
          handleChange={handleChange}
          handleAssign={handleAssign}
        />
      </div>
    </>
  );
};

export default EmployeeList;
