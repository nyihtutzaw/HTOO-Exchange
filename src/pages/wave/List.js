import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { Box, Paper } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    width: "200%",
    // minWidth: 700
  },
  thead: {
    backgroundColor: "#094708",
  },
  tHColor: {
    color: "#fff",
  },
});

const List = ({ data, handleEdit, handleDelete }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ margin: "10px" }}
    >
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple-table">
          <TableHead className={classes.thead}>
            <TableRow>
              <TableCell width="20px" className={classes.tHColor}>
                {t("no")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("date-time")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("type")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("phone-out")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("phone-in")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("transition-id")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("transfer-amount")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("transfer-fee")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("export-amount")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                ငွေသွင်းရန်ပမာဏ
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("wave-acc")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("comission")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("from-bank")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("to-bank")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("otm")}
              </TableCell>

              <TableCell className={classes.tHColor} align="center">
                {t("wave-acc-left-money")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("total-e-money")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("total-cash-money")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("customer.name")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("action")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row, index) => (
              <TableRow key={index}>
                <TableCell width="20px" component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">
                  {dayjs(row.createdAt).format("DD/MM/YYYY HH:mm")}
                </TableCell>
                <TableCell align="center">{row.type && row.type[0].toUpperCase() + row.type.slice(1)}</TableCell>
                <TableCell align="center">{row.sender_phone}</TableCell>
                <TableCell align="center">{row.receiver_phone}</TableCell>
                <TableCell align="center">{row.transaction_id}</TableCell>
                <TableCell align="center">{row.type === "transfer" && row.amount}</TableCell>
                <TableCell align="center">{row.transfer_fee}</TableCell>
                <TableCell align="center">{row.type === "withdraw" && row.amount}</TableCell>
                <TableCell align="center">{row.type === "deposit" && row.amount}</TableCell>
                <TableCell align="center">{row?.bank_account?.name}-{row?.bank_account?.account_name}</TableCell>
                <TableCell align="center">{row.commission}</TableCell>

                <TableCell align="center">{row.type === "from bank" && row.amount}</TableCell>

                <TableCell align="center">{row.type === "to bank" && row.amount}</TableCell>
                <TableCell align="center">{row.otm}</TableCell>
                <TableCell align="center">{}</TableCell>
                <TableCell align="center">{row.last_bank_amount}</TableCell>
                <TableCell align="center">{row.last_cash_amount}</TableCell>
                <TableCell align="center">{row.customer?.name}</TableCell>
                <TableCell align="center">
                  {/* <DriveFileRenameOutlineRoundedIcon
                    onClick={() => handleEdit(row)}
                    sx={{ color: "#36353d", fontSize: "25px" }}
                  /> */}
                  <DeleteForeverRoundedIcon
                    onClick={() => handleDelete(row)}
                    sx={{ color: "red", fontSize: "25px", marginLeft: "10px" }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};
export default List;
