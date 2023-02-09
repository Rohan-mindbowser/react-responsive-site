import { createTheme } from "@mui/material/styles";

const colors = {
  primary: "#913175",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
  },
});

export default theme;
