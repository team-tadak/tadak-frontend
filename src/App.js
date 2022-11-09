import { ThemeProvider } from "@emotion/react";
import { theme } from "styles/theme";
import GlobalStyles from "styles/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
