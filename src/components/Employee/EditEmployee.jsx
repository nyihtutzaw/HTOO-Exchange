import { Box, Button, TextField, Typography, withStyles } from "@mui/material";
import { Stack } from "@mui/system";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import React from "react";
import { makeStyles } from "@mui/styles";
import SaveIcon from '@mui/icons-material/Save';
import SaveAsIcon from '@mui/icons-material/SaveAs';

const useStyles = makeStyles({
    button: {
        backgroundColor: '#3c52b2',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
        }
    }})

const EditEmployee
    = () => {
        
            const classes = useStyles()
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
                    <Typography variant="h5" color="#094708" ml={2} mb={4} mt={5}>ဝန်ထမ်းစာရင်းပြင်ဆင်ရန်စာမျက်နှာ
                    </Typography>
                    <Stack spacing={2} direction="row" m={2}>
                            <Button variant="contained" size="small" sx={{ backgroundColor: "#094708", minWidth: "200px", fontSize: "18px" }} className={classes.button}>ရာထူး</Button>
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
                        <Button variant="contained" size="small" sx={{
                            backgroundColor: "#094708", minWidth: "200px", fontSize: "18px", ':hover': {
                                bgcolor: 'error', // theme.palette.primary.main
                                color: 'white',
                            },
                        }}>မှတ်ချက်</Button>
                        <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
                    </Stack>
                    <Stack spacing={2} direction="row" m={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Button variant="contained" size="small" sx={{ backgroundColor: "#fff", minWidth: "200px", fontSize: "18px", color: "green", textTransform: "none" }}> <ExitToAppOutlinedIcon />မူလစာမျက်နှာသို့ </Button>
                        <Button variant="contained" size="small" sx={{ backgroundColor: "#469152", minWidth: "200px", fontSize: "18px" }}><SaveAsIcon/> သိမ်းမည်</Button>
                    </Stack>
                </Box>

            </div >
        );
    };

export default EditEmployee
    ;
