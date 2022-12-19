import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const CreateBankName = () => {
  return (
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
          <Typography variant="h6" color="#094708" ml={2} mb={4} mt={0}>ဘဏ်အကောင့်စာရင်းသွင်းရန်စာမျက်နှာ

          </Typography>
          <Stack spacing={2} direction="row" m={2}>
            <Button variant="contained" size="small" sx={{
              backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                bgcolor: '#094708',
                color: '#fff'
              }
            }}>အကောင့်အမည်
            </Button>
            <TextField type="text" required label="" variant="outlined" size="small" sx={{ width: "350px" }} />
          </Stack>
          <Stack spacing={2} direction="row" m={2}>
            <Button variant="contained" size="small" sx={{
              backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                bgcolor: '#094708',
                color: '#fff'
              }
            }}>အကောင့်ပိုင်ရှင်အမည်
            </Button>
            <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
          </Stack>
          <Stack spacing={2} direction="row" m={2}>
            <Button variant="contained" size="small" sx={{
              backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                bgcolor: '#094708',
                color: '#fff'
              }
            }}>အကောင့်နံပါတ်/ဖုန်းနံပါတ်</Button>
            <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
          </Stack>
          <Stack spacing={2} direction="row" m={2}>
            <Button variant="contained" size="small" sx={{
              backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                bgcolor: '#094708',
                color: '#fff'
              }
            }}>ဘဏ်ခွဲအမည်</Button>
            <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
          </Stack>
          <Stack spacing={2} direction="row" m={2}>
            <Button variant="contained" size="small" sx={{
              backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                bgcolor: '#094708',
                color: '#fff'
              }
            }}>စာရင်းဖွင့်
            </Button>
            <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
          </Stack>
          <Stack spacing={2} direction="row" m={2}>
            <Button variant="contained" size="small" sx={{
              backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                bgcolor: '#094708',
                color: '#fff'
              }
            }}>မှတ်ချက်</Button>
            <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
          </Stack>

          <Stack spacing={2} direction="row" m={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: '15px' }}>
            <Button variant="contained" size="small" sx={{
              backgroundColor: "#fff", minWidth: "200px", fontSize: "14px", color: "green", textTransform: "none", ':hover': {
                bgcolor: '#fff',
                color: '#094708'
              }
            }}>
              <ExitToAppIcon/>
              မူလစာမျာက်နှာသို့</Button>
            <Button variant="contained" size="small" sx={{
              backgroundColor: "#469152", minWidth: "200px", fontSize: "14px", ':hover': {
                bgcolor: '#469152',
                color: '#fff'
              }
            }}>
              <SaveAsIcon/>
              သိမ်းမည်</Button>
          </Stack>
        </Box>

      </Card>
    </div>
  );
};

export default CreateBankName;
