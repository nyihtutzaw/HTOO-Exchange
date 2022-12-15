import {
  AppBar,
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
  useMediaQuery,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  InputLabel,
  Fade
} from "@mui/material";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DrawerComp from "../drewer/DrawerComp";
import Customer from "../customer/CreateCustomer";
import { Link } from "react-router-dom";
import CreateEmployee from "../Employee/CreateEmployee";
import CreateCustomer from "../customer/CreateCustomer";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const lists = [
  {
    name: "W-Agent",
    route: "employee",
    element: <CreateEmployee />
  },
  {
    name: "True Money",
    route: "customer",
    element: <Customer />
  },
  {
    name: "Exchange",
    route: "employee",
    element: <CreateEmployee />
  },
  {
    name: "Employees",
    route: "create-employee",
    element: <CreateEmployee />
  }
];

const menus = [
  {
    name: "W-Agent",
    route: "employee",
    element: <CreateEmployee />
  },
  {
    name: "True Money",
    route: "customer",
    element: <CreateEmployee />
  },
  {
    name: "Exchange",
    route: "employee",
    element: <CreateEmployee />
  },
  {
    name: "Customers",
    route: "create-customer",
    element: <CreateCustomer />
  },
  {
    name: "Employees",
    route: "create-employee",
    element: <CreateEmployee />
  }
];

const Navbar = () => {
  const theme = useTheme();
  // console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  // console.log(isMatch);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElUsers, setAnchorElUsers] = useState(null);
  const [buttonLabel, setButtonLabel] = useState("Set Up");
  const [age, setAge] = React.useState('');

  // console.log(age);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUser = (event) => {
    setAnchorElUsers(event.currentTarget);
  };

  const handleCloseUser = () => {
    setAnchorElUsers(null);
  };

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  // console.log(age);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      style={{
        backgroundColor: "#e6e6e6"
      }}
      sx={{ minHeight: "75px !important" }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <DrawerComp />
          </>
        ) : (
          <Grid
            container
            sx={{
              placeItems: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            <Grid item xs={1}>
              <Typography variant="h5" color="black">
                <AddShoppingCartIcon />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              {lists.map((lab, index) => (
                <Link
                  key={lab.name}
                  to={lab.route}
                  style={{ textDecoration: "none" }}
                >
                  <Button sx={{ margin: "5px", backgroundColor: "#094708" }} variant="contained" >
                    {lab.name}
                  </Button>
                </Link>
              ))}
            </Grid>
            <Grid item xs={2}>
              <Box
                sx={{
                  flexGrow: 0,
                  mr: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Tooltip title="Open settings">
                  <Button variant="contained" sx={{
                    margin: "5px", backgroundColor: "#094708", ':hover': {
                      bgcolor: '#094708'
                    }
                  }} onClick={handleOpenUser}>
                    {buttonLabel}
                  </Button>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUsers}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={Boolean(anchorElUsers)}
                  onClose={handleCloseUser}
                >
                  {menus.map((data) => (
                    <MenuItem key={data.name} onClick={handleCloseUser}>
                      <Link
                        to={data.route}
                        style={{ textDecoration: "none" }}
                        onClick={() => setButtonLabel(data.name)}
                      >
                        <Typography textAlign="center" color="black">
                          {data.name}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Grid>
            <Grid item xs={1}>
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="mm"
                  name="radio-buttons-group"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    color: "black",
                    flexWrap: "nowrap"
                  }}
                >
                  <FormControlLabel
                    value="mm"
                    control={<Radio />}
                    label="MM"
                  />
                  <FormControlLabel
                    value="eng"
                    control={<Radio />}
                    label="Eng"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={1}>
              <Box
                sx={{
                  flexGrow: 0,
                  mr: 3,
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center"
                }}
              >
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
