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
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from "@mui/material";
import React, { useState, useEffect } from "react";
import DrawerComp from "../drewer/DrawerComp";
import { Link, useNavigate } from "react-router-dom";
import CreateBranchTransfer from "../branchTransfer/CreateBranchTransfer";
import EmployeeList from "../Employee/EmployeeList";
import CustomerList from "../customer/CustomerList";
import BankNameList from "../bank_name/BankNameList";
import BranchList from "../branch/BranchList";
import RoleAndAccessList from "../roleAndAccess/RoleAndAccessList";
import StackSalaryList from "../stackSalary/StackSalaryList";
import ExpenseList from "../expense/ExpenseList";
import { removeToken } from "../../utils/token";
import CreateWave from "../wave/CreateWave";
import CreateTrue from "../true/CreateTrue";
import CreateExchange from "../exchange/CreateExchange";
import logo from "../../assets/images/logo.png"
import { useTranslation } from "react-i18next";

const settings = ["", "Logout"];

const lists = [
  {
    name: "W-Agent",
    route: "/admin/create-wave",
    element: <CreateWave />
  },
  {
    name: "True Money",
    route: "/admin/create-true",
    element: <CreateTrue />
  },
  {
    name: "Exchange",
    route: "/admin/create-exchange",
    element: <CreateExchange />
  },
  {
    name: "Employees",
    route: "/admin/list-employee",
    element: <EmployeeList />
  }
];

const menus = [
  {
    name: "Branches",
    route: "/admin/list-branch",
    element: <BranchList />
  },
  {
    name: "Role&Access",
    route: "/admin/list-role-access",
    element: <RoleAndAccessList />
  },
  {
    name: "Bank",
    route: "/admin/list-bank",
    element: <BankNameList />
  },
  {
    name: "Customers",
    route: "/admin/list-customer",
    element: <CustomerList />
  },
  {
    name: "Expense",
    route: "/admin/list-expense",
    element: <ExpenseList />
  },
  {
    name: "BranchTransfer",
    route: "/admin/create-branch-transfer",
    element: <CreateBranchTransfer />
  },
  {
    name: "StackSalary",
    route: "/admin/list-stack-salary",
    element: <StackSalaryList />
  }
];

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElUsers, setAnchorElUsers] = useState(null);
  const [buttonLabel, setButtonLabel] = useState("Set Up");
  // const [age, setAge] = React.useState('');
  const [language, setLanguage] = useState("eng");
  const [value, setValue] = useState("eng");

  const handleLanguageChange = (event) => {
    setValue(event.target.value);
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("lng", event.target.value);
  };

  useEffect(() => {
    const lng = localStorage.getItem("lng");
    if (lng) {
      setLanguage(lng);
      setValue(lng);
    } else {
      setLanguage("en");
    }
  }, [value, language]);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseToken = () => {
    setAnchorElUser(null);
    removeToken();
    navigate("/auth/login", { replace: true });
  };

  const handleOpenUser = (event) => {
    setAnchorElUsers(event.currentTarget);
  };

  const handleCloseUser = () => {
    setAnchorElUsers(null);
  };

  // const handleChange = (e) => {
  //   setAge(e.target.value);
  // };

  const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <AppBar
      style={{
        // backgroundColor: "#e6e6e6"
        backgroundColor: "#fff"
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

              <Card >
                <CardActionArea sx={{
                  display: "flex",
                  justifyContent: "center", alignItems: "center"
                }}>
                  <CardMedia
                    component="img"
                    height="75"
                    image={logo}
                    alt="green iguana"
                  />
                  <CardContent>

                  </CardContent>
                </CardActionArea>

              </Card>
            </Grid>
            <Grid item xs={6}>
              {lists.map((lab, index) => (
                <Link
                  key={lab.name}
                  to={lab.route}
                  style={{ textDecoration: "none" }}
                >
                  <Button sx={{
                    margin: "5px", backgroundColor: "#094708", ':hover': {
                      bgcolor: '#094708',
                      color: '#fff'
                    }
                  }} variant="contained" >
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
                  value={value}
                  onChange={handleLanguageChange}
                >
                  <FormControlLabel
                    checked={language === "mm" ?? localStorage.getItem("lng")}
                    value="mm"
                    control={<Radio />}
                    label="MM"
                  />
                  <FormControlLabel
                    checked={language === "eng" ?? localStorage.getItem("lng")}
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
                    <MenuItem key={setting} onClick={handleCloseToken}>
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
