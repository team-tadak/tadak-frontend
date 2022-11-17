import Button from "components/common/Button";
import InputEmail from "components/common/Inputs/InputEmail";
import InputPasswordAndCheck from "components/common/Inputs/InputPasswordAndCheck";
import InputUserName from "components/common/Inputs/InputUserName";
import SlimButton from "components/common/SlimButton";
import PortalModal from "components/PortalModal";
import React from "react";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { serverAxios } from "utils/commonAxios";
import {
  ButtonDiv,
  RegisterForm,
  RegisterInformation,
  RegisterTitle,
  ToLogin,
  ToLoginParagraph,
} from "./style";

function Register() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState(null);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);

  const onRegisterSuccess = useCallback(() => {
    navigate("/");
  }, [navigate]);

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
          // this.props.history.push("/");
          console.log("회원가입 성공");
          setModalText("회원가입 성공!");
          setShowModal(true);
          setIsRegisterSuccess(true);
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
      <PortalModal open={showModal}>
        <p>{modalText}</p>

        {isRegisterSuccess ? (
          <SlimButton onClick={onRegisterSuccess}>로그인하러 가기!</SlimButton>
        ) : (
          <SlimButton
            onClick={() => {
              setShowModal(false);
            }}
          >
            확인
          </SlimButton>
        )}
      </PortalModal>
      <RegisterTitle>계정 생성하기</RegisterTitle>
      <RegisterInformation>
        회원으로 플레이해서 다른 사용자들과 누가 더 빠른지 겨뤄보세요! <br></br>
        나의 기록도 저장할 수 있답니다!
      </RegisterInformation>
      <RegisterForm onSubmit={handleSubmit}>
        <InputEmail></InputEmail>
        <InputPasswordAndCheck></InputPasswordAndCheck>
        <InputUserName></InputUserName>
        <ButtonDiv>
          <Button type="submit">시작하기!</Button>
          <ToLoginParagraph>
            계정이 이미 있으세요?{" "}
            <ToLogin>
              <Link to="/login">로그인</Link>
            </ToLogin>
            하러 가기
          </ToLoginParagraph>
        </ButtonDiv>
      </RegisterForm>
    </>
  );
}

export default Register;
