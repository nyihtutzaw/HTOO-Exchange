import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Navbar from "../navbar/Navbar";
import { useTranslation } from "react-i18next";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';


const CreateBranchTransfer
    = () => {
        const { t } = useTranslation();
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
                            <Typography variant="h6" color="#094708" ml={2} mb={4} mt={0}>
                                {t("branch-transfer.create")}
                            </Typography>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    textTransform: "none",
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}>{t("e-money")}
                                </Button>
                                <Button variant="contained" size="small" sx={{
                                    textTransform: "none",
                                    backgroundColor: "#fff", minWidth: "200px", color: 'black', fontSize: "14px",
                                    ':hover': {
                                        bgcolor: '#fff',
                                        color: 'black'
                                    }
                                }}>{t("cash-buy")}
                                </Button>
                            </Stack>

                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    textTransform: "none",
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}>
                                    {t("branch-transfer.from-branch")}
                                </Button>
                                <TextField type="text" required label="" variant="outlined" size="small" sx={{ width: "350px" }} />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    textTransform: "none",
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px",
                                    ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}>
                                    {t("branch-transfer.to-branch")}
                                </Button>
                                <FormControl sx={{ m: 1, minWidth: 350 }} size="small">
                                    <InputLabel id="demo-select-small">Age</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    textTransform: "none",
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}>
                                    {t("branch-transfer.account-cash")}
                                </Button>
                                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    textTransform: "none",
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}>
                                    {t("branch-transfer.from-transfer-type")}
                                </Button>
                                <FormControl sx={{ m: 1, minWidth: 350 }} size="small">
                                    <InputLabel id="demo-select-small">Age</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    textTransform: "none",
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}>
                                    {t("branch-transfer.to-transfer-type")}
                                </Button>
                                <FormControl sx={{ m: 1, minWidth: 350 }} size="small">
                                    <InputLabel id="demo-select-small">Age</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>

                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    textTransform: "none",
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}> {t("remark")}
                                </Button>
                                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />

                            </Stack>
                            <Stack spacing={2} direction="row" m={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: '15px' }}>
                                <Button variant="contained" size="small" sx={{
                                    textTransform: "none",
                                    display: "flex", justifyContent: "space-evenly", alignItems: "center",
                                    backgroundColor: "#fff", minWidth: "200px", fontSize: "14px", color: "green", ':hover': {
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
                                    <SwapHorizIcon />
                                    <Box>
                                        {t("transfer")}
                                    </Box>
                                </Button>
                            </Stack>
                        </Box>
                    </Card>
                </div>
            </>

        );
    };

export default CreateBranchTransfer


    ;
