import React, { useState } from "react";
import { useCallback } from "react";
import { serverAxios } from "utils/commonAxios";
import { mutate } from "swr";
import { ButtonDiv, LoginForm, LoginTitle, ToRegister, ToRegisterParagraph } from "./style";
import InputEmail from "components/common/Inputs/InputEmail";
import InputPassword from "components/common/Inputs/InputPassword";
import Button from "components/common/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import PortalModal from "components/PortalModal";
import { ModalHeader, ModalBody, ModalButton } from "components/PortalModal/style";
import useUser from "hooks/useUser";
import * as bcrypt from "bcryptjs";
import { BCRYPT_SALT } from "constants/hash";

function Login() {
  const [showOnFailModal, setShowOnFailModal] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    async function login() {
      // form 핸들
      const form = e.currentTarget;
      const formElements = form.elements;
      const hashedPassword = bcrypt.hash(formElements?.password.value, BCRYPT_SALT);
      try {
        const body = {
          email: formElements?.email.value,
          password: hashedPassword,
        };

        serverAxios
          .post("/users/me", body, {
            withCredentials: true,
          })
          .then(function (response) {
            // POST 요청 성공 시

            // 쿠키로 보내줄거같아서 localStorage.setItem 을 불필요할 것 같긴 한데 일단 넣어두겠습니다.
            // localStorage.setItem("token", response.data.token);
            // mutate();
            // 로그인 성공 시
            // this.props.history.push("/");
            console.log(response);
            console.log("로그인 성공");
            mutate("/users/me"); // 로그인 함과 동시에 상단바에 NavBar 업데이트 하도록
            navigate("/");
          })
          .catch(() => {
            // 로그인 실패시
            setShowOnFailModal(true);
          });
      } catch (e) {
        // 로그인 실패 시
        // console.log(e);
        // console.log("없는 계정입니다. ");
      }
    }
    login();
  }, []);

  // 로그인 돼 있으면 로그인 페이지 접근 차단

  // 로그인 시 redirect 로직
  const { loggedOut } = useUser();

  if (!loggedOut) {
    navigate("/");
  }

  return (
    <>
      <LoginTitle>로그인하기</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        <InputEmail></InputEmail>
        <InputPassword></InputPassword>
        <ButtonDiv>
          <Button type="submit">로그인</Button>
          <ToRegisterParagraph>
            <ToRegister>
              <Link to="/register">회원가입</Link>
            </ToRegister>
            하러 가기
          </ToRegisterParagraph>
        </ButtonDiv>
      </LoginForm>

      <PortalModal
        open={showOnFailModal}
        onClose={() => {
          setShowOnFailModal(false);
        }}
      >
        <ModalHeader>로그인 실패</ModalHeader>
        <ModalBody>이메일 및 비밀번호를 확인하세요</ModalBody>
        <ModalButton
          onClick={() => {
            setShowOnFailModal(false);
          }}
        >
          확인
        </ModalButton>
      </PortalModal>
    </>
  );
}

export default Login;
