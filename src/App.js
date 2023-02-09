import "./App.css";
import { Button, Container, ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
        <Button variant="contained">Hello</Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
