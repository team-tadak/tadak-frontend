import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
//import styled from "@emotion/styled";

import LanguageSelect from "pages/languageselect";
import Leaderboard from "pages/leaderboard";
import Login from "pages/login";
import Main from "pages";
import MyPage from "pages/mypage";
import Register from "pages/register";
import SyntaxSelect from "pages/syntaxselect";
import TypePage from "pages/typepage";

import { ThemeProvider } from "@emotion/react";
//import FitContent
import { theme } from "styles/theme";
import GlobalStyles from "styles/GlobalStyles";
import NavBar from "components/common/NavBar";
import AppLayout from "components/common/layout/AppLayout";
import Footer from "components/common/Footer";
import styled from "@emotion/styled";
import Breadcrumbs from "components/common/Breadcrumb";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const ContentBox = styled.div``;

const darkThme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <MuiThemeProvider theme={darkThme}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Container>
            <NavBar />
            <ContentBox>
              <AppLayout>
                <Breadcrumbs />
                <Routes>
                  {/* 언어 선택 페이지 */}
                  <Route path="/languageselect" exact={true} element={<LanguageSelect />} />

                  {/* 랭킹 체이지 */}
                  <Route path="/leaderboard" exact={true} element={<Leaderboard />} />

                  {/* 로그인 페이지 */}
                  <Route path="/login" exact={true} element={<Login />} />

                  {/* 대문 페이지 */}
                  <Route path="/" exact={true} element={<Main />} />

                  {/* 마이 페이지 */}
                  <Route path="/mypage" exact={true} element={<MyPage />} />

                  {/* 회원가입 페이지 */}
                  <Route path="/register" exact={true} element={<Register />} />

                  {/* 문법 선택 페이지 */}
                  <Route path="/python" exact={true} element={<SyntaxSelect language="python" />} />
                  <Route path="/html" exact={true} element={<SyntaxSelect language="html" />} />
                  <Route path="/c" exact={true} element={<SyntaxSelect language="c" />} />

                  {/* 인게임 (타자 연습) 페이지 */}
                  <Route
                    path="/python/:id"
                    exact={true}
                    element={<TypePage language="python" languageCode={1} />}
                  />
                  <Route
                    path="/html/:id"
                    exact={true}
                    element={<TypePage language="html" languageCode={2} />}
                  />
                  <Route
                    path="/c/:id"
                    exact={true}
                    element={<TypePage language="c" languageCode={3} />}
                  />
                </Routes>
              </AppLayout>
            </ContentBox>
            <Footer />
          </Container>
        </Router>
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
