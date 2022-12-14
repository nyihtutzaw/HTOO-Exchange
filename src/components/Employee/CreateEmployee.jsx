import { Box, Button, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const CreateEmployee
  = () => {
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
        <Box sx={{ margin: "30px", }}>
          <Typography variant="h5" color="#094708" ml={2} mb={4}>ဝန်ထမ်းစာရင်းသွင်းရန်စာမျက်နှာ
          </Typography>
          <Stack spacing={2} direction="row" m={2}>
            <Button variant="contained" size="small" sx={{ backgroundColor: "#094708", minWidth: "200px", fontSize: "18px" }}>ရာထူး</Button>
            <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
          </Stack>
          <Stack spacing={2} direction="row" m={2}>
            <Button variant="contained" size="small" sx={{ backgroundColor: "#094708", minWidth: "200px", fontSize: "18px" }}>အမည်</Button>
            <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
          </Stack>
          <Stack spacing={2} direction="row" m={2}>
            <Button variant="contained" size="small" sx={{ backgroundColor: "#094708", minWidth: "200px", fontSize: "18px" }}>မွေးနေ့</Button>
            <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
          </Stack>
          <Stack spacing={2} direction="row" m={2}>
            <Button variant="contained" size="small" sx={{ backgroundColor: "#094708", minWidth: "200px", fontSize: "18px" }}>မှတ်ပုံတင်</Button>
            <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
          </Stack>
          <Stack spacing={2} direction="row" m={2}>
            <Button variant="contained" size="small" sx={{ backgroundColor: "#094708", minWidth: "200px", fontSize: "18px" }}>နေရပ်လိပ်စာ</Button>
            <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
          </Stack>
          <Stack spacing={2} direction="row" m={2}>
            <Button variant="contained" size="small" sx={{ backgroundColor: "#094708", minWidth: "200px", fontSize: "18px" }}>အလုပ်ဝင်သည့်နေ့</Button>
            <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
          </Stack>
          <Stack spacing={2} direction="row" m={2}>
            <Button variant="contained" size="small" sx={{ backgroundColor: "#094708", minWidth: "200px", fontSize: "18px" }}>အလုပ်ထွက်သည့်နေ့</Button>
            <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
          </Stack>
          <Stack spacing={2} direction="row" m={2}>
            <Button variant="contained" size="small" sx={{ backgroundColor: "#094708", minWidth: "200px", fontSize: "18px" }}>မှတ်ချက်</Button>
            <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
          </Stack>
          <Stack spacing={2} direction="row" m={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <Button variant="contained" size="small" sx={{ backgroundColor: "#fff", minWidth: "200px", fontSize: "18px", color: "green", textTransform: "none" }}>Save & Asign</Button>
            <Button variant="contained" size="small" sx={{ backgroundColor: "#469152", minWidth: "200px", fontSize: "18px" }}>မှတ်ချက်</Button>
          </Stack>
        </Box>

      </div>
    );
  };

export default CreateEmployee
  ;
