import React from "react";

function SyntaxSelect({ language }) {
  return (
    <div>
      <p>{language} 언어를 선택해서 들어온 페이지입니다! </p>
      <p>{language} 에서 어떤 문법으로 연습할지 선택을 할 수 있어야 합니다. </p>
      <p>
        이 페이지를 수정하시려면 src/pages/SyntaxSelect/index.js 의 SyntaxSelect( ) 컴포넌트를
        수정해주세요!
      </p>
      <p>
        이 페이지에서는 사용자가 앞 페이지에서 선택한 언어인 {language} 언어에서 선택할 수 있는
        문법들을 선택할 수 있는 페이지입니다.
      </p>
      <p>
        이 페이지에서는 특이하게도 페이지 자체에 language 라는 prop 을 받습니다! 이를 활용하시면
        좋을 것 같습니다!
      </p>
      <p>사용하실 컴포넌트는 Breadcrumbs, UserContainer, SyntaxSelectComponent 입니다.</p>
      <p>
        컴포넌트가 필요한 prop 을 받지 않고 있거나, 사소한 수정사항이 필요한 경우 직접 수정해주셔도
        되고
      </p>
      <p>컴포넌트 제작자 또는, 저에게 문의하시면 됩니다!</p>

      <p>그럼 화이팅입니다!</p>
    </div>
  );
}

export default SyntaxSelect;
