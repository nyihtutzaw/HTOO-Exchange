import { Box, Button, Card, Grid, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Navbar from "../navbar/Navbar";
import { useTranslation } from "react-i18next";

const CreateRoleAccess
    = () => {
        const { t, i18n } = useTranslation();

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
                            <Typography variant="h6" color="#094708" ml={2} mb={4} mt={0}>Role
                            </Typography>
                            <Stack spacing={2} direction="row" m={2} >
                                <Grid container>
                                    <Grid item xs={6} md={9} display="flex" justifyContent="space-between">
                                        <Button variant="contained" size="small" sx={{
                                            textTransform: "none",
                                            backgroundColor: "#094708", minWidth: "100px", fontSize: "14px", ':hover': {
                                                bgcolor: '#094708',
                                                color: '#fff'
                                            }
                                        }}>{t("name")}
                                        </Button>
                                        <TextField type="text" required label="" variant="outlined" size="small" sx={{ width: "250px" }} />
                                    </Grid>

                                </Grid>
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Grid container>
                                    <Grid item xs={6} md={9} display="flex" justifyContent="space-between">
                                        <Button variant="contained" size="small" sx={{
                                            textTransform: "none",
                                            backgroundColor: "#094708", minWidth: "100px", fontSize: "14px", ':hover': {
                                                bgcolor: '#094708',
                                                color: '#fff'
                                            }
                                        }}>{t("position")}
                                        </Button>
                                        <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "250px" }} />
                                    </Grid>
                                </Grid>
                            </Stack>
                            <Stack spacing={2} direction="row" m={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: '15px' }}>
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

export default CreateRoleAccess;
