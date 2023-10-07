import { ThemeProvider } from "styled-components";

import getTheme from "./styles/themes/defaultTheme";
import Home from "./screen/Home";

function App() {
  const theme = getTheme('light');

  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;