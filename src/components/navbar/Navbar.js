import {
  AppBar,
  Avatar,
  Box,
  Button,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
  useMediaQuery 
} from "@mui/material";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DrawerComp from "../drewer/DrawerComp";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = ({ lists }) => {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMatch);
  const [tabValue, setTabValue] = useState(0);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(50,9,121,1) 35%, rgba(0,212,255,1) 100%)"
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <DrawerComp />
          </>
        ) : (
          <Grid container sx={{ placeItems: "center" }}>
            <Grid item xs={1}>
              <Typography>
                <AddShoppingCartIcon />
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Tabs
                textColor="secondary"
                indicatorColor="secondary"
                value={tabValue}
                onChange={(e, value) => setTabValue(value)}
              >
                {lists.map((lab, index) => (
                  <Tab
                    style={{
                      textTransform: "none",
                      color: "white",
                      overflow: "hidden"
                    }}
                    key={index}
                    label={lab}
                  />
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={3}>
              <Box display="flex">
                <Button
                  sx={{ marginLeft: "auto", background: "rgba(2,0,36,1)" }}
                  variant="contained"
                >
                  Login
                </Button>
                <Button
                  sx={{ marginLeft: 1, background: "rgba(2,0,36,1)" }}
                  variant="contained"
                >
                  SingUp
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
