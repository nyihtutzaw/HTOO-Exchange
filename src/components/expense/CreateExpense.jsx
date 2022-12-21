import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Navbar from "../navbar/Navbar";

const CreateExpense

    = () => {
        const [age, setAge] = React.useState('');

        const handleChange = (event) => {
            setAge(event.target.value);
        };
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
                            <Typography variant="h6" color="#094708" ml={2} mb={4} mt={0}>ကုန်ကျစရိတ်စာရင်းသွင်းရန်စာမျက်နှာ
                            </Typography>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}>Office Use
                                </Button>
                                <Button variant="contained" size="small" sx={{
                                    backgroundColor: "#fff", minWidth: "200px", color: 'black', fontSize: "14px", ':hover': {
                                        bgcolor: '#fff',
                                        color: 'black'
                                    }
                                }}>Cash Buy
                                </Button>
                            </Stack>

                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}>ကုန်ကျစရိတ်အမည်
                                </Button>
                                <TextField type="text" required label="" variant="outlined" size="small" sx={{ width: "350px" }} />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}>Bank အကောင့်</Button>
                                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}>Branch</Button>
                                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}>စုစုပေါင်းကုန်ကျစရိတ်

                                </Button>
                                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />

                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}>အကြောင်းအရာ
                                </Button>
                                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />

                            </Stack>
                            <Stack spacing={2} direction="row" m={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: '15px' }}>
                                <Button variant="contained" size="small" sx={{
                                    backgroundColor: "#fff", minWidth: "200px", fontSize: "14px", color: "green", textTransform: "none", ':hover': {
                                        bgcolor: '#fff',
                                        color: '#094708'
                                    }
                                }}>
                                    <ExitToAppIcon />
                                    မူလစာမျာက်နှာသို့</Button>
                                <Button variant="contained" size="small" sx={{
                                    backgroundColor: "#469152", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#469152',
                                        color: '#fff'
                                    }
                                }}>
                                    <SaveAsIcon />
                                    သိမ်းမည်</Button>
                            </Stack>
                        </Box>
                    </Card>
                </div>
            </>

        );
    };

export default CreateExpense


    ;
