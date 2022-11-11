import Button from "components/common/Button";
import InputEmail from "components/common/Inputs/InputEmail";
import InputPasswordAndCheck from "components/common/Inputs/InputPasswordAndCheck";
import InputUserName from "components/common/Inputs/InputUserName";
import React from "react";
import { useCallback } from "react";
import { serverAxios } from "utils/commonAxios";
import { ButtonDiv, RegisterInformation, RegisterTitle, ToLogin, ToLoginParagraph } from "./style";

function Register() {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    async function register() {
      // form 핸들
      const form = e.currentTarget;
      const formElements = form.elements;

      try {
        const body = {
          username: formElements?.username.value,
          email: formElements?.email.value,
          password: formElements?.password.value,
        };

        serverAxios.post("/users", body).then(function (response) {
          // POST 요청 성공 시
          this.props.history.push("/");
        });
      } catch (e) {
        // POST 요청 실패 시
        console.log(e);
      }
    }
    register();
  }, []);

  return (
    <>
      <RegisterTitle>계정 생성하기</RegisterTitle>
      <RegisterInformation>회원으로 플레이해서 다른 사용자들과 누가 더 빠른지 겨뤄보세요! <br></br>
        나의 기록도 저장할 수 있답니다!
      </RegisterInformation>
      <InputEmail></InputEmail>
      <InputPasswordAndCheck></InputPasswordAndCheck>
      <InputUserName></InputUserName>
      <ButtonDiv>
          <Button>시작하기!</Button>
        <ToLoginParagraph>
          계정이 이미 있으세요? <ToLogin><a href="./login">로그인</a></ToLogin>하러 가기
        </ToLoginParagraph>
      </ButtonDiv>
      
    </>
  );
}

export default Register;
