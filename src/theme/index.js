import { createTheme } from "@mui/material/styles";

const colors = {
  primary: "#913175",
  secondary: "#F2921D",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
      grey:"#F2CD5C"
    },
    textColor:{
      main:"#ffffff"
    }
  },
});

export default theme;
