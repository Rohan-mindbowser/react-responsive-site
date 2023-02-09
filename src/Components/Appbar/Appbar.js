import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import AppBarDesktop from "./AppBarDesktop";
import AppBarMobile from "./AppBarMobile";

const Appbar = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return <>{matches ? <AppBarMobile /> : <AppBarDesktop />}</>;
};

export default Appbar;
