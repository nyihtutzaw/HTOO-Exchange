import { Box, Button, Card, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Select, Stack, Switch, TextField, Typography } from "@mui/material";
import React from "react";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Navbar from "../navbar/Navbar";
import { useTranslation } from "react-i18next";
import { styled } from '@mui/material/styles';


const CreateRoleAccess
    = () => {
        const { t, i18n } = useTranslation();
        const [age, setAge] = React.useState('');

        const handleChange = (event) => {
            setAge(event.target.value);
        };

        const IOSSwitch = styled((props) => (
            <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
        ))(({ theme }) => ({
            width: 42,
            height: 26,
            padding: 0,
            '& .MuiSwitch-switchBase': {
                padding: 0,
                margin: 2,
                transitionDuration: '300ms',
                '&.Mui-checked': {
                    transform: 'translateX(16px)',
                    color: '#fff',
                    '& + .MuiSwitch-track': {
                        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
                        opacity: 1,
                        border: 0,
                    },
                    '&.Mui-disabled + .MuiSwitch-track': {
                        opacity: 0.5,
                    },
                },
                '&.Mui-focusVisible .MuiSwitch-thumb': {
                    color: '#33cf4d',
                    border: '6px solid #fff',
                },
                '&.Mui-disabled .MuiSwitch-thumb': {
                    color:
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[600],
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                    opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
                },
            },
            '& .MuiSwitch-thumb': {
                boxSizing: 'border-box',
                width: 22,
                height: 22,
            },
            '& .MuiSwitch-track': {
                borderRadius: 26 / 2,
                backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
                opacity: 1,
                transition: theme.transitions.create(['background-color'], {
                    duration: 500,
                }),
            },
        }));


        return (
            <>
                <Navbar />
                <div
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        marginTop: "75px",
                        display: "flex", justifyContent: "center", alignItems: "center"
                    }}
                >
                    <Card sx={{ marginTop: "65px", bgcolor: '#edeff2' }} >
                        <Box sx={{ margin: "30px", }}>
                            <Typography variant="h6" color="#094708" ml={2} mb={2}>Role
                            </Typography>
                            <Stack spacing={2} direction="row" m={2} >
                                <Grid container>
                                    <Grid item xs={6} md={9} display="flex" justifyContent="space-between">
                                        <Button variant="contained" size="small" sx={{
                                            textTransform: "none", margin: "8px",
                                            backgroundColor: "#094708", minWidth: "100px", fontSize: "14px", ':hover': {
                                                bgcolor: '#094708',
                                                color: '#fff'
                                            }
                                        }}>{t("name")}

                                        </Button>
                                        <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                                            <InputLabel id="demo-select-small">Name
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
                                    </Grid>

                                </Grid>
                            </Stack>
                            <Stack spacing={2} direction="row" m={2}>
                                <Grid container>
                                    <Grid item xs={6} md={9} display="flex" justifyContent="space-between">
                                        <Button variant="contained" size="small" sx={{
                                            textTransform: "none", margin: "8px",
                                            backgroundColor: "#094708", minWidth: "100px", fontSize: "14px", ':hover': {
                                                bgcolor: '#094708',
                                                color: '#fff'
                                            }
                                        }}>{t("position")}
                                        </Button>
                                        <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
                                            <InputLabel id="demo-select-small">Position
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
                                    </Grid>
                                </Grid>
                            </Stack>

                            <Box>
                                <Typography variant="h6" m={1} color="#094708" >
                                    Access
                                </Typography>
                                <Stack spacing={2} direction="row" m={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", marginTop: '15px' }}>
                                    <Typography variant="h7" color="#094708" width={115} textAlign="left" >
                                        Employee
                                    </Typography>
                                    <FormControlLabel
                                        sx={{ fontSize: '10px !important' }}
                                        control={<IOSSwitch sx={{ m: 1, fontSize: '10px !important' }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            ပြင်ခြင်း
                                        </Typography>}
                                    />
                                    <FormControlLabel
                                        sx={{ color: "red" }}
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            ဖျက်ခြင်း
                                        </Typography>}
                                    />
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            အသစ်ထည့်ခြင်း
                                        </Typography>}
                                    />
                                </Stack>
                                <Stack spacing={2} direction="row" m={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", marginTop: '15px' }}>
                                    <Typography variant="h7" color="#094708" width={115} textAlign="left">
                                        Bank Name
                                    </Typography>
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            ပြင်ခြင်း
                                        </Typography>}
                                    />
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            ဖျက်ခြင်း
                                        </Typography>}
                                        sx={{ color: "red" }}
                                    />
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            အသစ်ထည့်ခြင်း
                                        </Typography>}
                                    />
                                </Stack>
                                <Stack spacing={2} direction="row" m={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", marginTop: '15px' }}>
                                    <Typography variant="h7" color="#094708" width={115} textAlign="left">
                                        Customer
                                    </Typography>
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            ပြင်ခြင်း
                                        </Typography>}
                                    />
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            ဖျက်ခြင်း
                                        </Typography>}
                                        sx={{ color: "red" }}
                                    />
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            အသစ်ထည့်ခြင်း
                                        </Typography>}
                                    />
                                </Stack>
                                <Stack spacing={2} direction="row" m={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", marginTop: '15px' }}>
                                    <Typography variant="h7" color="#094708" width={115} textAlign="left">
                                        Common-Table
                                    </Typography>
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            ပြင်ခြင်း
                                        </Typography>}
                                    />
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            ဖျက်ခြင်း
                                        </Typography>}
                                        sx={{ color: "red" }}
                                    />
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            အသစ်ထည့်ခြင်း
                                        </Typography>}
                                    />
                                </Stack>
                                <Stack spacing={2} direction="row" m={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", marginTop: '15px' }}>
                                    <Typography variant="h7" color="#094708" width={115} textAlign="left">
                                        Wave-Agent
                                    </Typography>
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            ပြင်ခြင်း
                                        </Typography>}
                                    />
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            ဖျက်ခြင်း
                                        </Typography>}
                                        sx={{ color: "red" }}
                                    />
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            အသစ်ထည့်ခြင်း
                                        </Typography>}
                                    />
                                </Stack>
                                <Stack spacing={2} direction="row" m={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", marginTop: '15px' }}>
                                    <Typography variant="h7" color="#094708" width={115} textAlign="left">
                                        True Money
                                    </Typography>
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            ပြင်ခြင်း
                                        </Typography>}
                                    />
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            ဖျက်ခြင်း
                                        </Typography>}
                                        sx={{ color: "red" }}
                                    />
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            အသစ်ထည့်ခြင်း
                                        </Typography>}
                                    />
                                </Stack>
                                <Stack spacing={2} direction="row" m={1} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", marginTop: '15px' }}>
                                    <Typography variant="h7" color="#094708" width={115} textAlign="left">
                                        Exchange
                                    </Typography>
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            ပြင်ခြင်း
                                        </Typography>}
                                    />
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            ဖျက်ခြင်း
                                        </Typography>}
                                        sx={{ color: "red" }}
                                    />
                                    <FormControlLabel
                                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                        label={<Typography sx={{ fontSize: 15 }}>
                                            အသစ်ထည့်ခြင်း
                                        </Typography>}
                                    />
                                </Stack>

                                <Stack spacing={2} direction="row" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: '30px' }}>
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
                        </Box>

                    </Card>
                </div>
            </>

        );
    };

export default CreateRoleAccess;
