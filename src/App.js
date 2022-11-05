import { ThemeProvider } from "@emotion/react";
import FitContent from "components/common/layout/FitContent";
import TypeInput from "components/TypeInput";
import { theme } from "styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FitContent>
        <TypeInput />
      </FitContent>
    </ThemeProvider>
  );
}

export default App;
