import { Box, Button, Card, TextareaAutosize, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import SaveIcon from '@mui/icons-material/Save';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import Navbar from "../navbar/Navbar";
import { useTranslation } from "react-i18next";

const ExchangeEdit = () => {
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
                {t("edit-exchange")}

              </Typography>
              <Stack spacing={2} direction="row" m={2}>
                <TextField type="text" required label={t('branch-bank-in')} variant="outlined" size="small" sx={{ width: "350px" }}  />
                <TextField type="text" required label={t('branch-bank-out')} variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <TextField type="text" required label={t('amount-money-in')} variant="outlined" size="small" sx={{ width: "350px" }} />
                <TextField type="text" required label={t('amount-money-out')} variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <TextField type="text" required label={t('e-comission')} variant="outlined" size="small" sx={{ width: "350px" }} />
                <TextField type="text" required label={t('cash-comission')} variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <TextField type="text" required label={t('employee.name')} variant="outlined" size="small" sx={{ width: "350px" }}  />
                <TextField type="text" required label={t('customer.name')} variant="outlined" size="small" sx={{ width: "350px" }} />
              </Stack>
              <Stack spacing={2} direction="row" m={2}>
                <TextareaAutosize minRows={5} required cols={41} type="text" label={t('about')} variant="outlined" size="small" sx={{ width: "350px" }}  />
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

export default ExchangeEdit
  ;
