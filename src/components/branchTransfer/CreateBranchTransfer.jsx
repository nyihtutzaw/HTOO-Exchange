import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const CreateBranchTransfer

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
                        <Typography variant="h6" color="#094708" ml={2} mb={4} mt={0}>Branch To Branch Transfer စာရင်းသွင်းရန်စာမျက်နှာ

                        </Typography>
                        <Stack spacing={2} direction="row" m={2}>
                            <Button variant="contained" size="small" sx={{
                                backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                    bgcolor: '#094708',
                                    color: '#fff'
                                }
                            }}>E-Money
                            </Button>
                            <Button variant="contained" size="small" sx={{
                                backgroundColor: "#fff", minWidth: "200px", color: 'black', fontSize: "14px", 
                                ':hover': {
                                    bgcolor: '#fff',
                                    color: 'black'
                                }
                            }}>Cash
                            </Button>
                        </Stack>

                        <Stack spacing={2} direction="row" m={2}>
                            <Button variant="contained" size="small" sx={{
                                backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                    bgcolor: '#094708',
                                    color: '#fff'
                                }
                            }}>From Branch
                            </Button>
                            <TextField type="text" required label="" variant="outlined" size="small" sx={{ width: "350px" }} />
                        </Stack>
                        <Stack spacing={2} direction="row" m={2}>
                            <Button variant="contained" size="small" sx={{
                                backgroundColor: "#094708", minWidth: "200px", fontSize: "14px",
                                 ':hover': {
                                    bgcolor: '#094708',
                                    color: '#fff'
                                }
                            }}>To Branch</Button>
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
                                backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                    bgcolor: '#094708',
                                    color: '#fff'
                                }
                            }}>Amount(E-Money/Cash)</Button>
                            <TextField type="text" label="" variant="outlined" size="small" sx={{ width: "350px" }} />
                        </Stack>
                        <Stack spacing={2} direction="row" m={2}>
                            <Button variant="contained" size="small" sx={{
                                backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                    bgcolor: '#094708',
                                    color: '#fff'
                                }
                            }}>From Transfer Type

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
                                backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                    bgcolor: '#094708',
                                    color: '#fff'
                                }
                            }}>To Transfer Type
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
                                backgroundColor: "#094708", minWidth: "200px", fontSize: "14px", ':hover': {
                                    bgcolor: '#094708',
                                    color: '#fff'
                                }
                            }}>Remark
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
                <ExitToAppIcon/>
                                
                                မူလစာမျာက်နှာသို့</Button>
                            <Button variant="contained" size="small" sx={{
                                backgroundColor: "#469152", minWidth: "200px", fontSize: "14px", ':hover': {
                                    bgcolor: '#469152',
                                    color: '#fff'
                                }
                            }}>Transfer</Button>
                        </Stack>
                    </Box>
                </Card>
            </div>
        );
    };

export default CreateBranchTransfer


    ;
