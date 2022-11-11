import SyntaxSelectComponent from "components/Syntax";
import DropdownComponent from "components/Dropdown";
import React from "react";

function SyntaxSelect() {
  return (
    <div>
      {/* <SyntaxSelectComponent
        example={
          <p>
            def sum(a, b):
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;result = a + b<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return result
          </p>
        }
        title="함수 정의 및 사용"
        level="2"
        summary="파이썬에서 재사용을 위한 함수를 배웁니다! 함수는 프로그래밍 언어에서 핵심적입니다!"
      />
      <DropdownComponent list={["남성", "여성", "선택 안 함"]}></DropdownComponent> */}
      SyntaxSelect
    </div>
  );
}

export default SyntaxSelect;
