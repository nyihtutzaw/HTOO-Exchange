import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const BankAccountBalance = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(dayjs("2014-08-18T21:11:54"));
  // const [open, setOpen] = useState(false);
  // const [scroll, setScroll] = useState('paper');

  const handleChange = (newValue) => {
    setValue(newValue);
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
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box bgcolor="green" p={2} style={{ width: "100%" }} mb={4}>
          <Typography textAlign={"center"} color="white">
            ဘဏ်အကောင့်လက်ကျန်စာရင်းများ
          </Typography>
        </Box>
        <Box
          style={{
            width: "800px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className="mb-4">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DesktopDatePicker
                label={t("start-date")}
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField {...params} sx={{ mr: 2 }} size="small" />
                )}
              />
              <DesktopDatePicker
                label={t("end-date")}
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField {...params} sx={{ mr: 2 }} size="small" />
                )}
              />
            </LocalizationProvider>
            <Button
              sx={{
                textTransform: "none",
                margin: "5px",
                backgroundColor: "#094708",
                ":hover": {
                  bgcolor: "#094708",
                  color: "#fff",
                },
              }}
              variant="contained"
            >
              <SearchRoundedIcon />
            </Button>
          </div>
          <Card width={800} style={{ marginBottom: "30px" }}>
            <CardContent sx={{ p: 3 }}>
              <Box mb={3}>
                <Typography>ငွေစာရင်းစုစုပေါင်း</Typography>
              </Box>

              <TableContainer style={{ borderRadius: "5px" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead sx={{ backgroundColor: "#094708" }}>
                    <TableRow>
                      <TableCell
                        sx={{ color: "white", fontSize: "16px" }}
                        align="center"
                      >
                        ဘဏ်အမည်
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", fontSize: "16px" }}
                        align="center"
                      >
                        စာရင်းဖွင့်
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", fontSize: "16px" }}
                        align="center"
                      >
                        လက်ကျန်
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:nth-of-type(odd)": { backgroundColor: "white" },
                        "&:nth-of-type(even)": { backgroundColor: "#EFF6ED" },
                      }}
                    >
                      <TableCell align="center">Cash</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:nth-of-type(odd)": { backgroundColor: "white" },
                        "&:nth-of-type(even)": { backgroundColor: "#EFF6ED" },
                      }}
                    >
                      <TableCell align="center">Cash</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:nth-of-type(odd)": { backgroundColor: "white" },
                        "&:nth-of-type(even)": { backgroundColor: "#EFF6ED" },
                      }}
                    >
                      <TableCell align="center">Cash</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:nth-of-type(odd)": { backgroundColor: "white" },
                        "&:nth-of-type(even)": { backgroundColor: "#EFF6ED" },
                      }}
                    >
                      <TableCell align="center">Cash</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                    </TableRow>

                    <TableRow
                      style={{
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                    >
                      <TableCell align="center">စုစုပေါင်း</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
          <Card width={800} mb={4} style={{ marginBottom: "30px" }}>
            <CardContent sx={{ p: 3 }}>
              <Box mb={3}>
                <Typography>True Money လက်ကျန်စာရင်း</Typography>
              </Box>

              <TableContainer style={{ borderRadius: "5px" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead sx={{ backgroundColor: "#094708" }}>
                    <TableRow>
                      <TableCell
                        sx={{ color: "white", fontSize: "16px" }}
                        align="center"
                      >
                        ဘဏ်အမည်
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", fontSize: "16px" }}
                        align="center"
                      >
                        စာရင်းဖွင့်
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", fontSize: "16px" }}
                        align="center"
                      >
                        လက်ကျန်
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:nth-of-type(odd)": { backgroundColor: "white" },
                        "&:nth-of-type(even)": { backgroundColor: "#EFF6ED" },
                      }}
                    >
                      <TableCell align="center">Cash</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:nth-of-type(odd)": { backgroundColor: "white" },
                        "&:nth-of-type(even)": { backgroundColor: "#EFF6ED" },
                      }}
                    >
                      <TableCell align="center">Cash</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:nth-of-type(odd)": { backgroundColor: "white" },
                        "&:nth-of-type(even)": { backgroundColor: "#EFF6ED" },
                      }}
                    >
                      <TableCell align="center">Cash</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:nth-of-type(odd)": { backgroundColor: "white" },
                        "&:nth-of-type(even)": { backgroundColor: "#EFF6ED" },
                      }}
                    >
                      <TableCell align="center">Cash</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                    </TableRow>

                    <TableRow
                      style={{
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                    >
                      <TableCell align="center">စုစုပေါင်း</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
          <Card width={800} mb={4} style={{ marginBottom: "30px" }}>
            <CardContent sx={{ p: 3 }}>
              <Box mb={3}>
                <Typography>Yoma Bank လက်ကျန်စာရင်း</Typography>
              </Box>

              <TableContainer style={{ borderRadius: "5px" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead sx={{ backgroundColor: "#094708" }}>
                    <TableRow>
                      <TableCell
                        sx={{ color: "white", fontSize: "16px" }}
                        align="center"
                      >
                        ဘဏ်အမည်
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", fontSize: "16px" }}
                        align="center"
                      >
                        စာရင်းဖွင့်
                      </TableCell>
                      <TableCell
                        sx={{ color: "white", fontSize: "16px" }}
                        align="center"
                      >
                        လက်ကျန်
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow
                      sx={{
                        "&:nth-of-type(odd)": { backgroundColor: "white" },
                        "&:nth-of-type(even)": { backgroundColor: "#EFF6ED" },
                      }}
                    >
                      <TableCell align="center">Cash</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:nth-of-type(odd)": { backgroundColor: "white" },
                        "&:nth-of-type(even)": { backgroundColor: "#EFF6ED" },
                      }}
                    >
                      <TableCell align="center">Cash</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:nth-of-type(odd)": { backgroundColor: "white" },
                        "&:nth-of-type(even)": { backgroundColor: "#EFF6ED" },
                      }}
                    >
                      <TableCell align="center">Cash</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                    </TableRow>
                    <TableRow
                      sx={{
                        "&:nth-of-type(odd)": { backgroundColor: "white" },
                        "&:nth-of-type(even)": { backgroundColor: "#EFF6ED" },
                      }}
                    >
                      <TableCell align="center">Cash</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                    </TableRow>

                    <TableRow
                      style={{
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                    >
                      <TableCell align="center">စုစုပေါင်း</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                      <TableCell align="center">10,000,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Box>
      </div>
    </>
  );
};
export default BankAccountBalance;
