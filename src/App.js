import "./App.css";
import { Container, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Appbar from "./Components/Appbar/Appbar";
import Homeslider from "./Components/Home slider/Homeslider";
import Extras from "./Components/Extras/Extras";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Appbar />
          <Homeslider />
          <Extras />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
