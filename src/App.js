import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import getTheme from "./styles/themes/defaultTheme";

function App() {
  const theme = getTheme('light');
  return (
    <ThemeProvider theme={theme}>
      <Header/>
    </ThemeProvider>
  );
}

export default App;