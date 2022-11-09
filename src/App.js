import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import styled from "@emotion/styled";

import LanguageSelect from "pages/LanguageSelect";
import Leaderboard from "pages/Leaderboard";
import Login from "pages/Login";
import Main from "pages/Main";
import MyPage from "pages/MyPage";
import Register from "pages/Register";
import SyntaxSelect from "pages/SyntaxSelect";
import TypePage from "pages/TypePage";

import { ThemeProvider } from "@emotion/react";
//import FitContent
import { theme } from "styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/languageselect" exact={true} element={<LanguageSelect />} />
          <Route path="/leaderboard" exact={true} element={<Leaderboard />} />
          <Route path="/login" exact={true} element={<Login />} />
          <Route path="/" exact={true} element={<Main />} />
          <Route path="/mypage" exact={true} element={<MyPage />} />
          <Route path="/register" exact={true} element={<Register />} />
          <Route path="/syntaxselect" exact={true} element={<SyntaxSelect />} />
          <Route path="/" exact={true} element={<TypePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
