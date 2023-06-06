import React, { useState } from 'react';
import {
  ErrorMessageBox,
  InputBox,
  InputContainer,
  LabelBox,
} from 'components/common/Inputs/styles';

function InputUserName({ onChange, onError }) {
  let errorMessage = '';

  const [text, setText] = useState('');
  const handleBlur = (e) => {
    setText(e.target.value);
    let pattern = /^[가-힣|a-z|A-Z]+$/;
    let isValid = pattern.test(e.target.value);

    let errorMessageBox = document.getElementById('userNameErrorMessageBox');

    if (isValid && e.target.value.length <= 10) {
      errorMessage = '';
    } else {
      errorMessage = '닉네임(한글 또는 영문 최대 10자)을 다시 입력하세요.';
      errorMessageBox.innerHTML = errorMessage;
      onError();
    }

    errorMessageBox.innerHTML = errorMessage;
  };

  return (
    <InputContainer>
      <LabelBox htmlFor="username">닉네임</LabelBox>
      <InputBox
        type="text"
        name="username"
        placeholder="닉네임을 입력하세요."
        onBlur={handleBlur}
        onChange={onChange}
      ></InputBox>
      <ErrorMessageBox id="userNameErrorMessageBox"></ErrorMessageBox>
    </InputContainer>
  );
}

export default InputUserName;
