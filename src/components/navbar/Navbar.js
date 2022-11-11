import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = ({ lists }) => {
  const [tabValue, setTabValue] = useState(0);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ position: "relative" }}>
      <Toolbar>
        <Grid container sx={{ display: "flex", alignItems: "center" }}>
          <Grid item xs={1}>
            <Typography>
              <AddShoppingCartIcon />
            </Typography>
          </Grid>
          <Grid item xs={10}>
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
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
