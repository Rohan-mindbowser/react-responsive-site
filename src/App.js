import "./App.css";
import { Box, Container, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Appbar from "./Components/Appbar/Appbar";
import Homeslider from "./Components/Home slider/Homeslider";
import Extras from "./Components/Extras/Extras";
import Addons from "./Components/Addons/Addons";
import Planyourtravel from "./Components/Planyourtravel/Planyourtravel";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Appbar />
          <Homeslider />
          <Extras />
        </Container>
        <Box sx={{ backgroundColor: "#F0EEED", padding: "20px 0px" }}>
          <Container maxWidth="xl">
            <Addons />
          </Container>
        </Box>
        <Container maxWidth="xl">
          <Planyourtravel />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
