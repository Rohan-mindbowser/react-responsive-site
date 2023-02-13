import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import AppBarDesktop from "./AppBarDesktop";
import AppBarMobile from "./AppBarMobile";

const Appbar = () => {
  const matches = useMediaQuery("(max-width:1080px)");
  return <>{matches ? <AppBarMobile /> : <AppBarDesktop />}</>;
};

export default Appbar;
