import React, { useEffect, useMemo } from "react";
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
import * as RoleService from "./../../services/roleService";
import { setRoles } from "../../store/reducer.role";
import { useDispatch, useSelector } from "react-redux";

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

  const roles = useSelector((state) => state.role.roles);

  const handleDelete = () => {
    console.log("delete");
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
                    {t("name")}
                  </TableCell>
                  <TableCell
                    sx={{ color: "white", fontSize: "16px" }}
                    align="center"
                  >
                    {t("position")}
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
                {roles?.map((row, index) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {index + 1}
                    </TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.position}</TableCell>
                    <TableCell align="center">
                      <DriveFileRenameOutlineRoundedIcon
                        onClick={() => {
                          navigate("/admin/edit-role-access/" + row.id);
                        }}
                        sx={{
                          color: "#36353d",
                          fontSize: "25px",
                          marginLeft: "5px",
                        }}
                      />
                      <DeleteForeverRoundedIcon
                        onClick={handleDelete}
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
      </div>
    </>
  );
};

export default RoleAndAccessList;
