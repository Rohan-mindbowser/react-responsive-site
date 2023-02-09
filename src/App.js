import "./App.css";
import {  Container, ThemeProvider } from "@mui/material";
import theme from "./theme";
import Appbar from "./Components/Appbar/Appbar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        {/* App bar  */}
        <Appbar />
      </Container>
    </ThemeProvider>
  );
}

export default App;
