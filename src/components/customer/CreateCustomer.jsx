import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Navbar from "../navbar/Navbar";
import { useTranslation } from "react-i18next";

const CreateCustomer
  = () => {
    const { t, i18n } = useTranslation();
    // console.log("first", t("new_customer"))

    return (
      <>
        <Navbar />
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "80%",
            marginTop: "75px",
            display: "flex", justifyContent: "center", alignItems: "center"
          }}
        >
          <Card sx={{ marginTop: "65px", bgcolor: '#edeff2' }} >
            <Box sx={{ margin: "30px", }}>
              <Typography variant="h6" color="#094708" ml={2} mb={4} mt={0}> {t("new_customer")}
              </Typography>
              <Stack spacing={2} direction="row" m={2}>
                <Button variant="contained" size="small" sx={{
                  textTransform: "none",
                  backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                    bgcolor: '#094708',
                    color: '#fff'
                  }
                }}>{t("name")}</Button>
                <TextField type="text" required label="" variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <Button variant="contained" size="small" sx={{
                  textTransform: "none",
                  backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                    bgcolor: '#094708',
                    color: '#fff'
                  }
                }}> {t("f_name")}</Button>
                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <Button variant="contained" size="small" sx={{
                  textTransform: "none",
                  backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                    bgcolor: '#094708',
                    color: '#fff'
                  }
                }}> {t("f_id")}</Button>
                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <Button variant="contained" size="small" sx={{
                  textTransform: "none",
                  backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                    bgcolor: '#094708',
                    color: '#fff'
                  }
                }}>{t("phone")}</Button>
                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <Button variant="contained" size="small" sx={{
                  textTransform: "none",
                  backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                    bgcolor: '#094708',
                    color: '#fff'
                  }
                }}>{t("address")}</Button>
                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <Button variant="contained" size="small" sx={{
                  textTransform: "none",
                  backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                    bgcolor: '#094708',
                    color: '#fff'
                  }
                }}>{t("remark")}</Button>
                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>

              <Stack spacing={2} direction="row" m={2} sx={{
                display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: '15px'
              }}>
                <Button variant="contained" size="small" sx={{
                  textTransform: "none",
                  display: "flex", justifyContent: "space-evenly", alignItems: "center",
                  backgroundColor: "#fff", minWidth: "200px", fontSize: "14px", color: "green", textTransform: "none", ':hover': {
                    bgcolor: '#fff',
                    color: '#094708'
                  }
                }}>
                  <ExitToAppIcon />
                  <Box>
                    {t("go_back")}
                  </Box>

                </Button>
                <Button variant="contained" size="small" sx={{
                  textTransform: "none",
                  display: "flex", justifyContent: "space-evenly", alignItems: "center",
                  backgroundColor: "#469152", minWidth: "200px", fontSize: "14px", ':hover': {
                    bgcolor: '#469152',
                    color: '#fff'
                  }
                }}>
                  <SaveAsIcon />
                  <Box>
                    {t("save")}
                  </Box>
                </Button>
              </Stack>
            </Box>

          </Card>
        </div>
      </>

    );
  };

export default CreateCustomer
  ;
