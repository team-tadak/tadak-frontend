import React from "react";

function LanguageSelect() {
  return (
    <div>
      <p> 언어 선택 페이지입니다! </p>
      <p>
        {" "}
        이 페이지에서는 Python, HTML, C 를 선택할 수 있습니다 (반드시 이 순서로 배열해 주세요!){" "}
      </p>
      <p>사용하실 컴포넌트는 Breadcrumbs, UserContainer, ImgButton 입니다.</p>
      <p>
        컴포넌트가 필요한 prop 을 받지 않고 있거나, 사소한 수정사항이 필요한 경우 직접 수정해주셔도
        되고
      </p>
      <p>컴포넌트 제작자 또는, 저에게 문의하시면 됩니다!</p>
      <p>그럼 화이팅입니다!</p>
    </div>
  );
}

export default LanguageSelect;
