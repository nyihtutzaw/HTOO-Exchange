import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
import { Box, Button } from "@mui/material";

function List({ data, handleClickOpen }) {
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
              {t("amount")}
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
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {index + 1}
              </TableCell>
              <TableCell align="center">{row.amount}</TableCell>
              <TableCell align="center">{row.branch.name}</TableCell>

              <TableCell
                align="center"
                sx={{ display: "flex", justifyContent: "center", gap: "2rem" }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: "none",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    backgroundColor: "#469152",
                    fontSize: "14px",
                    ":hover": {
                      bgcolor: "#469152",
                      color: "#fff",
                    },
                  }}
                  onClick={() => {

                    handleClickOpen(row,"deposit");
                  }}
                >
                  <Box>{t("deposit")}</Box>
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    textTransform: "none",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    backgroundColor: "#469152",
                    fontSize: "14px",
                    ":hover": {
                      bgcolor: "#469152",
                      color: "#fff",
                    },
                  }}
                  onClick={() => {

                    handleClickOpen(row, "withdraw");
                  }}
                >
                  <Box>{t("withdraw")}</Box>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
