import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ErrorMessageBox, InputBox, InputContainer, LabelBox } from  "components/common/Inputs/styles.js";

function InputEmail() {

    let errorMessage = "";

    const [text, setText] = useState("");
    const handleBlur =  (e)=> {
        setText(e.target.value);
        console.log(e.target.value);
        let errorMessageBox = document.getElementById("emailErrorMessageBox");
        let pattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        let isValid = pattern.test(e.target.value);
        console.log(isValid);
        if(!isValid) {
            errorMessage = "이메일 주소를 다시 입력하세요.";
            console.log(errorMessage);
        }
        else {
            errorMessage ="";
        }
        errorMessageBox.innerHTML = errorMessage;
    }

    return (
        <InputContainer>
            <LabelBox htmlFor="email">이메일</LabelBox>
            <InputBox type="text" name="email" placeholder="이메일 주소를 입력하세요." onBlur={handleBlur}></InputBox>
            <ErrorMessageBox id="emailErrorMessageBox"></ErrorMessageBox>
        </InputContainer>
    );
    
}

    
export default InputEmail;




