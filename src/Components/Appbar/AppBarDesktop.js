import { AppBar, Button, Tab, Tabs, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { APP_LOGO } from "../../constant";

const AppBarDesktop = () => {
  const [tabState, setTabState] = useState(0);
  return (
    <AppBar>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <img src={APP_LOGO} alt="logo"></img>
        <Tabs
          value={tabState}
          onChange={(e, value) => setTabState(value)}
          textColor="inherit"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab label="Plan Travel" />
          <Tab label="Travel Information" />
          <Tab label="Club Vistara" />
          <Button
            sx={{ fontWeight: "700", margin: "0px 12px" }}
            variant="contained"
            color="secondary"
          >
            Login
          </Button>
          <Button
            sx={{ fontWeight: "700" }}
            variant="outlined"
            color="secondary"
          >
            Enrol
          </Button>
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarDesktop;
