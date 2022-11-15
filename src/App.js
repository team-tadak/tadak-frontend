// index.js 안에 들어가는 <App /> 컴포넌트 입니다.
// 모든 페이지는 기본적으로 <App /> 이 표시됩니다.
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
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
import GlobalStyles from "styles/GlobalStyles";
import NavBar from "components/common/NavBar";
import AppLayout from "components/common/layout/AppLayout";
import Footer from "components/common/Footer";
import styled from "@emotion/styled/macro";
import Breadcrumbs from "components/common/Breadcrumb";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const ContentBox = styled.div``;

// <ThemeProvider />
// -> emotion 에서 styles/theme.js 의 색상 값들을 사용할 수 있게 해주는 context provider
// <GlobalStyles />
// -> 전역 CSS (css 를 설정하지 않았을 때 기본적으로 모든 html element 에 먹히는 css)
// -> 폰트 기본값이 16px, 흰색으로 기본값 세팅
// <Router />
// -> URL 따라서 페이지가 이동하도록 해 줌, 각 <Route /> 에서 url 따라 컴포넌트 렌더링
// -> 각 <Route /> 에는 element 에 페이지 컴포넌트를 넘김
// <Container></Container>
// -> flex 적용이 돼서, 화면에 컨텐츠가 화면을 꽉 채울 정도로 많지 않더라도, Footer 가 딸려 올라오지 않고
// -> 항상 페이지 최하단에 붙어있을 수 있도록 해 줌.
// <ContentBox></ContentBox>
// -> 빈 div. flex 적용을 위해 만들어둔 div 한 개
// <AppLayout></AppLayout>
// -> max-width: 1280 px 를 가지는 상단 내비게이션 바와 하단 footer 를 제외한
// -> 실제 게임 컨텐츠 및 페이지별 본 내용이 들어가는 영역.
// <Breadcrumbs />
// -> ex) TADAK > Python > while 문
// -> 과 같이 현재 디렉토리 표시하는 UI. 컴포넌트 내부에서 현재 URL 따라 선택적으로 보여짐.

function App() {
  return (
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
                {/* :id 라고 적힌 것은 이 자리에 오는 값을 id 로 받겠다는 의미. id 는 숫자 뿐만 아니라 문자도 올 수 있음.  */}
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
  );
}

export default App;
