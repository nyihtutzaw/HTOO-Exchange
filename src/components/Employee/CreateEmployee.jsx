import { Box, Button, Card, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import SaveIcon from '@mui/icons-material/Save';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import Navbar from "../navbar/Navbar";
import { useTranslation } from "react-i18next";

const CreateEmployee
  = () => {
    const { t } = useTranslation();
    // console.log("t", t("employee.create_title"))

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
              <Typography variant="h6" color="#094708" ml={2} mb={4} mt={0}>
                {t("employee.create_title")}
              </Typography>
              <Stack spacing={2} direction="row" m={2}>
                <Button variant="contained" size="small" 
                  sx={{
                    textTransform: "none",
                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                      bgcolor: '#094708',
                      color: '#fff'
                    }
                  }}>{t("position")}</Button>
                <TextField type="text" required label="" variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <Button variant="contained" size="small" sx={{
                  textTransform: "none",
                  backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                    bgcolor: '#094708',
                    color: '#fff'
                  }
                }}>{t("name")}</Button>
                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <Button variant="contained" size="small" sx={{
                  textTransform: "none",
                  backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                    bgcolor: '#094708',
                    color: '#fff'
                  }
                }}>{t("birthday")}</Button>
                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <Button variant="contained" size="small" sx={{
                  textTransform: "none",
                  backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                    bgcolor: '#094708',
                    color: '#fff'
                  }
                }}>{t("nrc")}</Button>
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
                }}> {t("start_work")}</Button>
                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <Button variant="contained" size="small" sx={{
                  textTransform: "none",
                  backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                    bgcolor: '#094708',
                    color: '#fff'
                  }
                }}> {t("end_work")}</Button>
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
              <Stack spacing={2} direction="row" m={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: '15px' }}>
                <Button variant="contained" size="small" sx={{
                  display: "flex", justifyContent: "space-evenly", alignItems: "center",
                  backgroundColor: "#fff", minWidth: "200px", fontSize: "14px", color: "green", textTransform: "none", ':hover': {
                    bgcolor: '#fff',
                    color: '#094708'
                  }
                }}>
                  <SaveIcon />
                  {t("save_assign")}</Button>
                <Button variant="contained" size="small" sx={{
                  textTransform: "none",
                  display: "flex", justifyContent: "space-evenly", alignItems: "center",
                  backgroundColor: "#469152", minWidth: "200px", fontSize: "14px", ':hover': {
                    bgcolor: '#469152',
                    color: '#fff'
                  }
                }}>
                  <SaveAsIcon />
                  {t("save")}</Button>
              </Stack>
            </Box>

          </Card>


        </div>
      </>

    );
  };

export default CreateEmployee
  ;
