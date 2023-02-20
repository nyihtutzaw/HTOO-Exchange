import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Box } from "@mui/system";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import dayjs from "dayjs";

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

const List = ({ data, handleEdit, onDelete }) => {
  const { t } = useTranslation();
  
  
  const classes = useStyles();

  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <TableContainer style={{ width: 1400, marginTop: "5px" }}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead className={classes.thead}>
            <TableRow>
              <TableCell className={classes.tHColor}>{t("no")} </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("date-time")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("branch-transfer.from-branch")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("branch-transfer.to-branch")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("type")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("amount")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("branch-transfer.from-transfer-type")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("branch-transfer.to-transfer-type")}
              </TableCell>
              <TableCell className={classes.tHColor} align="center">
                {t("remark")}
              </TableCell>

              <TableCell className={classes.tHColor} align="center">
                {t("action")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">
                  {dayjs(row.created_at).format("DD/MM/YYYY")}
                </TableCell>
                <TableCell align="center">{row.from_branch.name}</TableCell>
                <TableCell align="center">{row.to_branch.name}</TableCell>
                <TableCell align="center">{
                  row.type === 1 ? 'e money' : 'cash buy'
                }</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">
                  {row.from_bank_account?.name}
                </TableCell>
                <TableCell align="center">{row.to_bank_account?.name}</TableCell>
                <TableCell align="center">{row.remark}</TableCell>

                <TableCell align="center">
                  {/* <DisplaySettingsRoundedIcon onClick={handleClickOpen} sx={{ color: "green", fontSize: "25px" }} /> */}
                  <DriveFileRenameOutlineRoundedIcon
                    onClick={() => handleEdit(row)}
                    sx={{
                      color: "#36353d",
                      fontSize: "25px",
                      marginLeft: "5px",
                    }}
                  />
                  <DeleteForeverRoundedIcon
                    onClick={() => onDelete(row)}
                    sx={{ color: "red", fontSize: "25px", marginLeft: "5px" }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
export default List;
