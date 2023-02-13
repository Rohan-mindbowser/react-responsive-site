import "./App.css";
import { Container, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Appbar from "./Components/Appbar/Appbar";
import Homeslider from "./Components/Home slider/Homeslider";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xl">
          <Appbar />
          <Homeslider />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
