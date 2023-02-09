import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { APP_LOGO } from "../../constant";
import AppDrawer from "./AppDrawer";

const AppBarMobile = () => {
  return (
    <>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <AppDrawer />
          <img src={APP_LOGO} className="app_logo" alt="logo"></img>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppBarMobile;
