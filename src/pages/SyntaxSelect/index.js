import React from "react";

function SyntaxSelect({ language }) {
  return (
    <div>
      <p>{language} 언어를 선택해서 들어온 페이지입니다. </p>
      <p>{language} 에서 어떤 문법으로 연습할지 선택을 할 수 있어야 합니다. </p>
    </div>
  );
}

export default SyntaxSelect;
