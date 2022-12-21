import { Box, Button, Card, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Navbar from "../navbar/Navbar";

const CreateRoleAccess
    = () => {
        return (
            <>
            <Navbar/>
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
                        <Typography variant="h6" color="#094708" ml={2} mb={4} mt={0}>Role
                        </Typography>
                        <Stack spacing={2} direction="row" m={2} >
                            <Grid container>
                                <Grid item xs={6} md={9} display="flex" justifyContent="space-between">
                                    <Button variant="contained" size="small" sx={{
                                        backgroundColor: "#094708", minWidth: "100px", fontSize: "14px", ':hover': {
                                            bgcolor: '#094708',
                                            color: '#fff'
                                        }
                                    }}>အမည်
                                    </Button>
                                    <TextField type="text" required label="" variant="outlined" size="small" sx={{ width: "250px" }} />
                                </Grid>

                            </Grid>
                        </Stack>
                        <Stack spacing={2} direction="row" m={2}>
                            <Grid container>
                                <Grid item xs={6} md={9} display="flex" justifyContent="space-between">
                                    <Button variant="contained" size="small" sx={{
                                        backgroundColor: "#094708", minWidth: "100px", fontSize: "14px", ':hover': {
                                            bgcolor: '#094708',
                                            color: '#fff'
                                        }
                                    }}>ရာထူး
                                    </Button>
                                    <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "250px" }} />
                                </Grid>
                            </Grid>
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
            </>
            
        );
    };

export default CreateRoleAccess;
