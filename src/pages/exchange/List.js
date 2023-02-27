import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import dayjs from "dayjs";
import { Box } from "@mui/material";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import usePermission from "../../hooks/usePermission";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  thead: {
    backgroundColor: "#094708",
  },
  tHColor: {
    color: "#fff",
  },
});

const CustomTableCell = withStyles((theme) => ({
  head: {
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function List({ rows, handleDelete, handleEdit }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const customColumnStyle = {
    wordWrap: "break-word",
    minWidth: "100px",
  };
  const { permitDelete, permitUpdate } = usePermission("customer");

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <TableContainer style={{ marginTop: "5px" }}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.thead}>
            <TableRow>
              <CustomTableCell
                style={{ ...customColumnStyle, minWidth: "40px" }}
                className={classes.tHColor}
                align="center"
              >
                {t("no")}
              </CustomTableCell>
              <CustomTableCell
                style={customColumnStyle}
                className={classes.tHColor}
                align="center"
              >
                {t("date-time")}
              </CustomTableCell>
              <CustomTableCell
                style={customColumnStyle}
                className={classes.tHColor}
                align="center"
              >
                {t("branch-bank-in")}
              </CustomTableCell>
              <CustomTableCell
                style={customColumnStyle}
                className={classes.tHColor}
                align="center"
              >
                {t("branch-bank-out")}
              </CustomTableCell>
              <CustomTableCell
                style={customColumnStyle}
                className={classes.tHColor}
                align="center"
              >
                {t("amount-money-in")}
              </CustomTableCell>
              <CustomTableCell
                style={customColumnStyle}
                className={classes.tHColor}
                align="center"
              >
                {t("amount-money-out")}
              </CustomTableCell>
              <CustomTableCell
                style={customColumnStyle}
                className={classes.tHColor}
                align="center"
              >
                {t("e-comission")}
              </CustomTableCell>
              <CustomTableCell
                style={customColumnStyle}
                className={classes.tHColor}
                align="center"
              >
                {t("cash-comission")}
              </CustomTableCell>
              <CustomTableCell
                style={customColumnStyle}
                className={classes.tHColor}
                align="center"
              >
                {t("about")}
              </CustomTableCell>
              <CustomTableCell
                style={customColumnStyle}
                className={classes.tHColor}
                align="center"
              >
                {t("customer.name")}
              </CustomTableCell>
              <CustomTableCell
                style={customColumnStyle}
                className={classes.tHColor}
                align="center"
              >
                {t("employee.name")}
              </CustomTableCell>
              <CustomTableCell
                style={customColumnStyle}
                className={classes.tHColor}
                align="center"
              >
                {t("action")}
              </CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                onDoubleClick={() => {
                  navigate("/admin/exchange-invoice/" + row.id);
                }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">
                  {dayjs(row.createdAt).format("DD/MM/YYYY HH:mm")}
                </TableCell>
                <TableCell align="center">
                  {row.to_bank_account.name} ({row.to_bank_account.account_name}
                  )
                </TableCell>
                <TableCell align="center">
                  {row.from_bank_account.name} (
                  {row.from_bank_account.account_name})
                </TableCell>
                <TableCell align="center">{row.from_transfer_amount}</TableCell>
                <TableCell align="center">{row.to_transfer_amount}</TableCell>
                <TableCell align="center">{row.e_money_comission}</TableCell>
                <TableCell align="center">{row.cash_comission}</TableCell>
                <TableCell align="center">{row.remark}</TableCell>
                <TableCell align="center">{row.customer?.name}</TableCell>
                <TableCell align="center">{row.user?.name}</TableCell>
                <TableCell align="center">
                  {permitUpdate && (
                    <DriveFileRenameOutlineRoundedIcon
                      onClick={() => handleEdit(row)}
                      sx={{ color: "#36353d", fontSize: "25px" }}
                    />
                  )}
                  {permitDelete && (
                    <DeleteForeverRoundedIcon
                      onClick={() => handleDelete(row)}
                      sx={{
                        color: "red",
                        fontSize: "25px",
                        marginLeft: "10px",
                      }}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default List;
