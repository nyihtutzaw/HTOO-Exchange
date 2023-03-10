import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { withStyles } from "@material-ui/core/styles";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useTranslation } from "react-i18next";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import ConfirmDialog from "../../components/Dialogs/ConfirmDialog";
import { useDispatch, useSelector } from "react-redux";
import * as SalaryService from "../../services/salaryService";
import { deleteSalary, setSalarys } from "../../store/reducer.salary";
import LoadingData from "../../components/commons/LoadingData";
import { setLoading } from "../../store/reducer.loading";
function createData(
  Id,
  name,
  salary,
  comession,
  opportunity,
  total,
  monthYear
) {
  return { Id, name, salary, comession, opportunity, total, monthYear };
}

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

const SalaryList = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(false);
  const [editData, setEditData] = useState(false);
  const location = useLocation();
  const salarys = useSelector((state) => state.salary.salarys);
  const loading = useSelector((state) => state.loading.loading);

  const handleDelete = async (id) => {
    await SalaryService.deleteSalary(id);
    dispatch(deleteSalary(id));
  };

  const handleLink = () => {
    navigate("/admin/create-stack-salary");
  };

  const loadData = async () => {
    const query = queryString.parse(location.search);
    dispatch(setLoading());

    const response = await SalaryService.getAll(query);
    dispatch(setSalarys(response));
    dispatch(setLoading());
  };

  useEffect(() => {
    loadData();
  }, [location.search]);

  const handleEdit = (e) => {
    navigate("/admin/edit-stack-salary/" + e.id);
  };

  const getTotalAllowrence = (allowrences) => {
    let total = 0;
    allowrences.forEach((allowrence) => {
      total += allowrence.salary_allowance.amount;
    });

    return total;
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
              {t("staff-salary.list")}
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
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ backgroundColor: "#094708" }}>
                <TableRow>
                  <TableCell
                    sx={{ color: "white", fontSize: "16px" }}
                    align="center"
                  >
                    {t("no")}
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", fontSize: "16px" }}
                    align="center"
                  >
                    {" "}
                    {t("staff-salary.staff_name")}
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", fontSize: "16px" }}
                    align="center"
                  >
                    {" "}
                    {t("staff-salary.staff_salary")}
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", fontSize: "16px" }}
                    align="center"
                  >
                    {" "}
                    {t("staff-salary.comission")}
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", fontSize: "16px" }}
                    align="center"
                  >
                    {" "}
                    {t("staff-salary.opportunity")}
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", fontSize: "16px" }}
                    align="center"
                  >
                    {" "}
                    {t("staff-salary.total")}
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", fontSize: "16px" }}
                    align="center"
                  >
                    {" "}
                    {t("staff-salary.month-year")}
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", fontSize: "16px" }}
                    align="center"
                  >
                    {t("action")}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {salarys.map((row, index) => (
                  <TableRow
                    key={row.Id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {index + 1}
                    </TableCell>
                    <TableCell align="center">{row.employee?.name}</TableCell>
                    <TableCell align="center">{row.salary}</TableCell>
                    <TableCell align="center">{row.commission}</TableCell>
                    <TableCell align="center">
                      {getTotalAllowrence(row.allowances)}
                    </TableCell>
                    <TableCell align="center">
                      {row.salary +
                        row.commission +
                        getTotalAllowrence(row.allowances)}
                    </TableCell>
                    <TableCell align="center">
                      {row.month}/{row.year}
                    </TableCell>
                    <TableCell align="center">
                      <DriveFileRenameOutlineRoundedIcon
                        onClick={() => handleEdit(row)}
                        sx={{
                          color: "#36353d",
                          fontSize: "25px",
                          marginLeft: "5px",
                        }}
                      />
                      <DeleteForeverRoundedIcon
                        onClick={() => {
                          setEditData(row);
                          setShowDelete(true);
                        }}
                        sx={{
                          color: "red",
                          fontSize: "25px",
                          marginLeft: "5px",
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {showDelete && (
          <ConfirmDialog
            title={`Delete Staff Salary`}
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

export default SalaryList;
