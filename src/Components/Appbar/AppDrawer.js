import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

const AppDrawer = () => {
  const Links = ["Plan Travel", "Travel Information", "Club Vistara"];
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(!openDrawer)}>
        <List>
          {Links.map((link, index) => {
            return (
              <ListItemButton
                onClick={() => setOpenDrawer(!openDrawer)}
                key={index}
              >
                <ListItemIcon>
                  <ListItemText>{link}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <IconButton color="white" onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{color:"white"}} />
      </IconButton>
    </>
  );
};

export default AppDrawer;
