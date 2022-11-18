import React, { useState } from "react";
import { ErrorMessageBox,
InputBox,
  InputContainer,
  LabelBox,
} from "components/common/Inputs/styles";

function InputPassword(props) {

    let errorMessage = "";

    const [text, setText] = useState("");

    const handleBlur = (e) => {
        setText(e.target.value);
        let errorMessageBox = document.getElementById("passWordErrorMessageBox");
        if (e.target.value.length > 20 || e.target.value.length < 8) {
          errorMessage = "비밀번호(8자리 이상 20자리 이하)를 다시 입력하세요.";
          props.setIsValid(false)
        } else {
          errorMessage = "";
          props.setIsValid(true)
        }
        errorMessageBox.innerHTML = errorMessage;
      };



    return (
        <InputContainer>
        <LabelBox htmlFor="password">비밀번호</LabelBox>
        <InputBox
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호를 입력하세요."
          onBlur={handleBlur}
        ></InputBox>
        <ErrorMessageBox id="passWordErrorMessageBox"></ErrorMessageBox>
      </InputContainer>
    );
}



export default InputPassword;