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
  Divider,
} from "@mui/material";
import { removeCache, storeCache } from "../../utils/cache";
import React, { useState, useEffect } from "react";
import DrawerComp from "../drewer/DrawerComp";
import { Link, useNavigate } from "react-router-dom";
import CreateBranchTransfer from "../../pages/branchTransfer/CreateBranchTransfer";
import EmployeeList from "../../pages/Employee/EmployeeList";
import CustomerList from "../../pages/customer/CustomerList";
import BankList from "../../pages/bank/BankList";
import BranchList from "../../pages/branch/BranchList";
import RoleAndAccessList from "../../pages/roleAndAccess/RoleAndAccessList";
import SalaryList from "../../pages/salary/SalaryList";
import ExpenseList from "../../pages/expense/ExpenseList";

// import CreateWave from "../wave/CreateWave";
import CreateTrue from "../true/CreateTrue";

import logo from "../../assets/images/logo.png";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import ExchangeCreate from "../exchange/ExchangeCreate";
// import ListExchange from "../exchange/ListExchange";
import TotalMoney from "../bank_money/TotalMoney";
import TrueMoney from "../bank_money/TrueMoney";
import YomaBank from "../bank_money/YomaBank";
import ListWave from "../wave/ListWave";
import TransitionRecord from "../transition_record/TransitionRecord";
import AdminList from "../../pages/Admin/AdminList";
import { useSelector } from "react-redux";
import AllowanceList from "../../pages/allowance/AllowanceList";

import CreateExchange from "../../pages/exchange/ExchangeLists";

import WaveMoneyTransferList from "../../pages/waveMoneyTransfer/WaveMoneyTransferList";
import TrueMoneyTransferList from "../../pages/trueMoneyTransfer/TrueMoneyTransferList";
import CashWalletList from "../../pages/cashWallet/CashWalletList";
import BranchTransferList from "../../pages/branchTransfer/BranchTransferList";


const settings = ["Account", "Logout"];

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElUsers, setAnchorElUsers] = useState(null);
  const [language, setLanguage] = useState("eng");
  const [value, setValue] = useState("eng");

  const user = useSelector((state) => state.auth.user);
  const activeBranch = useSelector((state) => state.auth.activeBranch);

  const lists = [
    {
      name: `${t("w-agent")}`,
      route: "/admin/list-wave",
      element: <ListWave />,
    },
    {
      name: "True Money",
      route: "/admin/create-true",
      element: <CreateTrue />,
    },

    {
      name: `${t("exchange")}`,
      route: "/admin/list-exchange",
      element: <CreateExchange />,
    },
    {
      name: `${t("employees")}`,
      route: "/admin/list-employee",
      element: <EmployeeList />,
    },
    {
      name: `${t("transition-record")}`,
      route: "/admin/list-transitions",
      element: <TransitionRecord />,
    },
  ];

  const menus = [
    // {
    //   name: `${t("exchange")}`,
    //   route: "/admin/create-exchange",
    //   element: <ExchangeCreate />
    // },
    {
      name: `${t("admin")}`,
      route: "/admin/list-admin",
      element: <AdminList />,
    },
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
      element: <BankList />,
    },
    {
      name: "Customers",
      route: "/admin/list-customer",
      element: <CustomerList />,
    },
    {
      name: `${t("expense")}`,
      route: "/admin/list-expense",
      element: <ExpenseList />,
    },
    {
      name: `${t("branch-transfer")}`,
      route: "/admin/list-branch-transfer",
      element: <BranchTransferList />,
    },
    {
      name: `${t("staff-salary")}`,
      route: "/admin/list-stack-salary",
      element: <SalaryList />,
    },

    {
      name: `Allowance`,
      route: "/admin/list-allowance",
      element: <AllowanceList />,
    },
    {
      name: `${t("wave_money_transfer.list")}`,
      route: "/admin/list-wave-money-transfer",
      element: <WaveMoneyTransferList />,
    },
    {
      name: `${t("true_money_transfer.list")}`,
      route: "/admin/list-true-money-transfer",
      element: <TrueMoneyTransferList />,
    },
    {
      name: `${t("cash_wallet.list")}`,
      route: "/admin/list-cash-wallet",
      element: <CashWalletList />,
    },
  ];

  const handleLanguageChange = (event) => {
    setValue(event.target.value);
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("lng", event.target.value);
  };

  const handleBranchChange = (branch) => {
    storeCache("activeBranch", JSON.stringify(branch));
    window.location.reload();
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

    removeCache("user");
    removeCache("access_token");
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
        backgroundColor: "#fff",
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
              textAlign: "center",
            }}
          >
            <Grid item xs={1}>
              <Card>
                <CardActionArea
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="75"
                    image={logo}
                    alt="green iguana"
                  />
                  <CardContent></CardContent>
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
                  <Button
                    sx={{
                      textTransform: "none",
                      margin: "5px",
                      backgroundColor: "#094708",
                      ":hover": {
                        bgcolor: "#094708",
                        color: "#fff",
                      },
                    }}
                    variant="contained"
                  >
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
                  alignItems: "center",
                }}
              >
                <Tooltip title="Open settings">
                  <>
                    <Button
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        margin: "5px",
                        backgroundColor: "#094708",
                        ":hover": {
                          bgcolor: "#094708",
                        },
                      }}
                      onClick={handleOpenUser}
                    >
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
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUsers)}
                  onClose={handleCloseUser}
                >
                  {menus.map((data) => (
                    <MenuItem
                      key={data.name}
                      onClick={() => {
                        window.location = data.route;
                      }}
                    >
                      <Link
                        style={{ textDecoration: "none" }}
                        onClose={handleCloseUser}
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
                  alignItems: "center",
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
                    flexWrap: "nowrap",
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
                  alignItems: "center",
                }}
              >
                <Tooltip title="Open settings">
                  <Button
                    onClick={handleOpenUserMenu}
                    sx={{
                      textTransform: "none",
                      margin: "5px",
                      backgroundColor: "#094708",
                      ":hover": {
                        bgcolor: "#094708",
                        color: "#fff",
                      },
                    }}
                    variant="contained"
                  >
                    {activeBranch?.name}
                  </Button>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Typography textAlign="center">
                      {user?.employee?.name}
                    </Typography>
                  </MenuItem>
                  <Divider />
                  {user?.employee.branches?.map((branch) => (
                    <MenuItem onClick={() => handleBranchChange(branch)}>
                      <Typography textAlign="center">
                        {branch.name}
                        {activeBranch.id === branch.id && (
                          <span style={{ color: "red" }}>*</span>
                        )}
                      </Typography>
                    </MenuItem>
                  ))}
                  <Divider />
                  <MenuItem onClick={handleCloseToken}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
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
