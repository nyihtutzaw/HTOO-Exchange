import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const CreateStackSalary
    = () => {
        const [age, setAge] = React.useState('');

        const handleChange = (event) => {
            setAge(event.target.value);
        };
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
                        <Typography variant="h6" color="#094708" ml={2} mb={4} mt={0}>ဝန်ထမ်းလစာ စာရင်းသွင်းရန်စာမျက်နှာ

                        </Typography>
                        <Stack spacing={2} direction="row" m={2}>
                            <Button variant="contained" size="small" sx={{
                                backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                    bgcolor: '#094708',
                                    color: '#fff'
                                }
                            }}>ဝန်ထမ်းအမည်
                            </Button>
                            <TextField type="text" required label="" variant="outlined" size="small" sx={{ width: "350px" }} />
                        </Stack>
                        <Stack spacing={2} direction="row" m={2}>
                            <Button variant="contained" size="small" sx={{
                                backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                    bgcolor: '#094708',
                                    color: '#fff'
                                }
                            }}>လစာ</Button>
                            <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
                        </Stack>
                        <Stack spacing={2} direction="row" m={2}>
                            <Button variant="contained" size="small" sx={{
                                backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                    bgcolor: '#094708',
                                    color: '#fff'
                                }
                            }}>ကော်မရှင်</Button>
                            <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
                        </Stack>
                        <Stack spacing={2} direction="row" m={2}>
                            <Button variant="contained" size="small" sx={{
                                backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                    bgcolor: '#094708',
                                    color: '#fff'
                                }
                            }}>ခံစားခွင့်၁
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
                            }}>ခံစားခွင့်၂
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
                            }}>ခံစားခွင့်၃
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
                            }}>ခံစားခွင့်၄
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
                            }}>ခံစားခွင့်၅
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
                                backgroundColor: "#fff", minWidth: "200px", fontSize: "14px", color: "green", textTransform: "none", ':hover': {
                                    bgcolor: '#fff',
                                    color: '#094708'
                                }
                            }}>မူလစာမျာက်နှာသို့</Button>
                            <Button variant="contained" size="small" sx={{
                                backgroundColor: "#469152", minWidth: "200px", fontSize: "14px", ':hover': {
                                    bgcolor: '#469152',
                                    color: '#fff'
                                }
                            }}>သိမ်းမည်</Button>
                        </Stack>
                    </Box>
                </Card>
            </div>
        );
    };

export default CreateStackSalary

    ;
