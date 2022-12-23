import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Navbar from "../navbar/Navbar";
import { useTranslation } from "react-i18next";


const CreateStackSalary
    = () => {
        const { t, i18n } = useTranslation();
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
                            <Typography variant="h6" color="#094708" ml={2} mb={4} mt={0}> {t("staff-salary.create")}

                            </Typography>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}>
                                    {t("staff-salary.staff_name")}
                                </Button>
                                <TextField type="text" required label="" variant="outlined" size="small" sx={{ width: "350px" }} />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}>{t("staff-salary.staff_salary")}</Button>
                                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}>{t("staff-salary.comission")}</Button>
                                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}> {t("staff-salary.opportunity-1")}
                                </Button>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-select-small">အဆောင်ခ
                                    </InputLabel>
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
                                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "210px" }} />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}> {t("staff-salary.opportunity-2")}
                                </Button>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-select-small">ဆီဖိုး
                                    </InputLabel>
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
                                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "210px" }} />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}> {t("staff-salary.opportunity-3")}
                                </Button>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-select-small">မီးဖိုး
                                    </InputLabel>
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
                                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "210px" }} />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}> {t("staff-salary.opportunity-4")}
                                </Button>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-select-small">ရေဖိုး
                                    </InputLabel>
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
                                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "210px" }} />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Button variant="contained" size="small" sx={{
                                    backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#094708',
                                        color: '#fff'
                                    }
                                }}> {t("staff-salary.opportunity-5")}
                                </Button>
                                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                    <InputLabel id="demo-select-small">နေ့လည်စာ
                                    </InputLabel>
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
                                <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "210px" }} />
                            </Stack>
                            <Stack spacing={2} direction="row" m={2} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: '15px' }}>
                                <Button variant="contained" size="small" sx={{
                                    display: "flex", justifyContent: "space-evenly", alignItems: "center",
                                    backgroundColor: "#fff", minWidth: "200px", fontSize: "14px", color: "green", textTransform: "none", ':hover': {
                                        bgcolor: '#fff',
                                        color: '#094708'
                                    }
                                }}>
                                    <ExitToAppIcon />
                                    <Box>{t("go_back")}</Box>
                                </Button>
                                <Button variant="contained" size="small" sx={{
                                    display: "flex", justifyContent: "space-evenly", alignItems: "center",
                                    backgroundColor: "#469152", minWidth: "200px", fontSize: "14px", ':hover': {
                                        bgcolor: '#469152',
                                        color: '#fff'
                                    }
                                }}>
                                    <SaveAsIcon />
                                    <Box>{t("save")}</Box></Button>
                            </Stack>
                        </Box>
                    </Card>
                </div>
            </>

        );
    };

export default CreateStackSalary

    ;
