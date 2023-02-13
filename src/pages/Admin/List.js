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
              {t("name")}
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "16px" }} align="center">
              {" "}
              {t("email")}
            </TableCell>

            <TableCell sx={{ color: "white", fontSize: "16px" }} align="center">
              {t("role")}
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "16px" }} align="center">
              {t("branch")}
            </TableCell>
            <TableCell sx={{ color: "white", fontSize: "16px" }} align="center">
              {t("action")}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {index + 1}
              </TableCell>
              <TableCell align="center">{row.employee.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.role?.name}</TableCell>
              <TableCell align="center">{row.employee.branches?.map((branch) => (`${branch.name},`))}</TableCell>
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
