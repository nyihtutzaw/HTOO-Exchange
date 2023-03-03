import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
import DriveFileRenameOutlineRoundedIcon from "@mui/icons-material/DriveFileRenameOutlineRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import DisplaySettingsRoundedIcon from "@mui/icons-material/DisplaySettingsRounded";

function List({ data, handleEdit, onDelete }) {
  const { t } = useTranslation();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#094708" }}>
          <TableRow>
            <TableCell sx={{ color: "white", fontSize: "16px" }} align="center">
              {t("no")}
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "16px" }} align="center">
              {t("minimum_amount")}
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "16px" }} align="center">
              {t("maximum_amount")}
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "16px" }} align="center">
              {t("wave_transfer_fee")}
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "16px" }} align="center">
              {t("transfer_fee")}
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "16px" }} align="center">
              {t("deposit_fee")}
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "16px" }} align="center">
              {t("withdraw_fee")}
            </TableCell>

            <TableCell sx={{ color: "white", fontSize: "16px" }} align="center">
              {t("action")}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {index + 1}
              </TableCell>
              <TableCell align="center">{row.minimum_amount}</TableCell>
              <TableCell align="center">{row.maximum_amount}</TableCell>
              <TableCell align="center">{row.wave_transfer_fee}</TableCell>
              <TableCell align="center">{row.transfer_fee}</TableCell>
              <TableCell align="center">{row.deposit_fee}</TableCell>
              <TableCell align="center">{row.withdraw_fee}</TableCell>

              <TableCell align="center">
                <DriveFileRenameOutlineRoundedIcon
                  onClick={() => handleEdit(row)}
                  sx={{ color: "#36353d", fontSize: "25px", marginLeft: "5px" }}
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
  );
}
export default List;
