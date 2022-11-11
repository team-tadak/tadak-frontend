import React, { useState } from 'react';
import { ErrorMessageBox, InputBox, InputContainer, LabelBox } from  "components/common/Inputs/styles";

function InputPasswordCheck() {

    let errorMessage = "";

    const [text, setText] = useState('');

    const handleChange =  (e)=> {
        setText(e.target.value);
        let password = document.getElementById("password"); 
        let errorMessageBox = document.getElementById("passWordErrorMessageBox");
        console.log(e.target.value);
        console.log(password.value);
        // if(e.target.value ==="") {
        //     errorMessage = "";
        // }
        // else if(password.value && e.target.value === password.value) {
        //     errorMessage = "비밀번호가 일치합니다.";
        // }
        
        // else {
        //     errorMessage ="비밀번호가 일치하지 않습니다.";
        // }

        // errorMessageBox.innerHTML = errorMessage;

    }


    return(
        <InputContainer>
            <LabelBox>비밀번호</LabelBox>
            <InputBox type="text" id= "passwordCheck" name="passwordCheck" placeholder="비밀번호를 다시 입력하세요." onChange={handleChange}></InputBox>
            <ErrorMessageBox id="pwcheckErrorMessageBox"></ErrorMessageBox>
        </InputContainer>
       
   );
}

export default InputPasswordCheck;