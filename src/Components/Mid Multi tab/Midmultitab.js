import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Mediacenter from "./Mediacenter";

const Midmultitab = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: "#ffffff",
          width: "100%",
        }}
      >
        <Tabs
          sx={{ width: "100%" }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          aria-label="scrollable force tabs example"
        >
          <Tab
            sx={{ fontWeight: "700" }}
            label="Deals & Offers"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ fontWeight: "700" }}
            label="Club Vistara"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ fontWeight: "700" }}
            label="Media Center"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ fontWeight: "700" }}
            label="Vistara Experience"
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Mediacenter />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>
  );
};

export default Midmultitab;
