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
import useUser from "hooks/useUser";
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

  const openPlainModal = useCallback((message) => {
    setModalText(message);
    setShowModal(true);
  }, []);

  const onRegisterSuccess = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    async function register() {
      // form 핸들
      const form = e.currentTarget;
      const formElements = form.elements;

      const emailValue = formElements?.email.value;
      const usernameValue = formElements?.username.value;
      const passwordValue = formElements?.password.value;
      const passwordConfirmValue = formElements?.passwordCheck.value;

      try {
        const body = {
          username: usernameValue,
          email: emailValue,
          password: passwordValue,
        };

        // 입력 각종 예외 처리
        // 이메일 적절 여부 확인
        if (emailValue.length === 0) {
          openPlainModal("이메일을 입력해 주세요!");
          return;
        }
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
          openPlainModal("올바른 형식으로 이메일을 입력해주세요!");
          return;
        }

        // 암호 입력 여부 확인
        if (passwordValue.length === 0) {
          openPlainModal("암호를 입력해주세요!");
          return;
        }
        if (passwordValue.length < 8 || passwordValue.length > 20) {
          openPlainModal("암호는 8자리 이상 20자리 이하로 구성해주세요!");
          return;
        }

        // 암호 일치 여부 확인
        if (passwordValue !== passwordConfirmValue) {
          openPlainModal("비밀번호가 불일치 합니다! 다시한번 확인해주세요!");
          return;
        }

        // 닉네임 입력 여부 확인
        if (usernameValue.length === 0) {
          openPlainModal("닉네임을 입력해 주세요!");
          return;
        }
        if (usernameValue.length > 10) {
          openPlainModal("닉네임(한글 또는 영문 최대 10자)을 다시 입력하세요.");
          return;
        }

        // 모든 입력 테스트를 통과하면
        serverAxios.post("/users", body).then(function (response) {
          // POST 요청 성공 시
          // this.props.history.push("/");
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

  // 로그인 시 redirect 로직
  const { loggedOut } = useUser();

  if (!loggedOut) {
    navigate("/");
  }

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
