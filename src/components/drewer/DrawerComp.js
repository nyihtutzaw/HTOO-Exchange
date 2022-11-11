import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import React, { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const DrawerComp = () => {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <Drawer open={drawer} onClose={() => setDrawer(false)}>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </ListItemButton>
        </List>
      </Drawer>
      <IconButton onClick={() => setDrawer(!drawer)}>
        <MenuOutlinedIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
