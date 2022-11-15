// 최상단 JS 파일입니다.
// index.html 에 아래 'root.render()' 의 괄호 속에 있는 내용들이 들어갑니다 (브라우저에 그려집니다)
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 아래는 App.js 의 App 컴포넌트가 들어갑니다 */}
    <App />
  </React.StrictMode>
);
