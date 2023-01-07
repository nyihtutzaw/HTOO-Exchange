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
  CardContent,
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const settings = ["Account", "Logout"];

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElUsers, setAnchorElUsers] = useState(null);
  // const [buttonLabel, setButtonLabel] = useState("SetUp");
  // const [buttonLabel, setButtonLabel] = useState(`${t("set-up")}`);
  // const [age, setAge] = React.useState('');
  const [language, setLanguage] = useState("eng");
  const [value, setValue] = useState("eng");


  const lists = [
    {
      name: `${t("w-agent")}`,
      route: "/admin/create-wave",
      element: <CreateWave />
    },
    {
      name: "True Money",
      route: "/admin/create-true",
      element: <CreateTrue />
    },
    {
      name: `${t("exchange")}`,
      route: "/admin/list-exchange",
      element: <CreateExchange />
    },
    {
      name: `${t("employees")}`,
      route: "/admin/list-employee",
      element: <EmployeeList />
    }
  ];

  const menus = [
    // {
    //   name: `${t("exchange")}`,
    //   route: "/admin/create-exchange",
    //   element: <CreateExchange />
    // },
    {
      name: `${t("branches")}`,
      route: "/admin/list-branch",
      element: <BranchList />,
    },
    {
      name: `${t("role-access")}`,
      route: "/admin/list-role-access",
      element: <RoleAndAccessList />,
    },
    {
      name: `${t("banks")}`,
      route: "/admin/list-bank",
      element: <BankNameList />,
    },
    {
      name: "Customers",
      route: "/admin/list-customer",
      element: <CustomerList />
    },
    {
      name: `${t("expense")}`,
      route: "/admin/list-expense",
      element: <ExpenseList />
    },
    {
      name: `${t("branch-transfer")}`,
      route: "/admin/list-branch-transfer",
      element: <CreateBranchTransfer />
    },
    {
      name: `${t("staff-salary")}`,
      route: "/admin/list-stack-salary",
      element: <StackSalaryList />
    }
  ];

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

  // const handleSetButton = (data) => {
  //   setButtonLabel(data)
  //   handleCloseUser()
  // }

  return (
    <AppBar
      style={{
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
                    textTransform: "none",
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
                  <>
                    <Button variant="contained" sx={{
                      textTransform: 'none',
                      margin: "5px", backgroundColor: "#094708", ':hover': {
                        bgcolor: '#094708'
                      }
                    }} onClick={handleOpenUser} >
                      {/* {buttonLabel} */}
                      SetUp
                    </Button>
                  </>
                </Tooltip>
                <KeyboardArrowDownIcon />
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
                    <MenuItem key={data.name} >
                      <Link
                        to={data.route}
                        style={{ textDecoration: "none" }}
                        onClose={handleCloseUser}
                        // onClick={() => setButtonLabel(data?.name)}
                        // onClick={() => handleSetButton(data?.name)}
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
