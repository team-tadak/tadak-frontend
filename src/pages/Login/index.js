import React from "react";
import { useCallback } from "react";
import { serverAxios } from "utils/commonAxios";
import { mutate } from "swr";

function Login() {
  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    async function login() {
      // form 핸들
      const form = e.currentTarget;
      const formElements = form.elements;

      try {
        const body = {
          email: formElements?.email.value,
          password: formElements?.password.value,
        };

        serverAxios.post("/users/me", body).then(function (response) {
          // POST 요청 성공 시

          // 쿠키로 보내줄거같아서 localStorage.setItem 을 불필요할 것 같긴 한데 일단 넣어두겠습니다.
          // localStorage.setItem("token", response.data.token);
          mutate();
          // 로그인 성공 시
          this.props.history.push("/");
        });
      } catch (e) {
        // 로그인 실패 시
        console.log(e);
      }
    }
    login();
  }, []);

  return (
    <div>
      <p> 로그인 페이지입니다! </p>
      <p>이 페이지를 수정하시려면 src/pages/Login/index.js 의 Login( ) 컴포넌트를 수정해주세요!</p>
      <p>이 페이지에서는 사용자의 이메일과 비밀번호를 받아 로그인을 처리하는 페이지입니다.</p>
      <p>사용하실 컴포넌트는 InputEmail, InputPasswordAndCheck 입니다.</p>
      <p>
        컴포넌트가 필요한 prop 을 받지 않고 있거나, 사소한 수정사항이 필요한 경우 직접 수정해주셔도
        되고
      </p>
      <p>컴포넌트 제작자 또는, 저에게 문의하시면 됩니다!</p>
      <p>
        **로그인 페이지는 API 연결을 필요로 하므로, 상단에 미리 API 통신 로직을 입력해두었습니다.
      </p>
      <p>**해당 부분은 컴포넌트 렌더링에는 전혀 영향이 없으므로 무시하시고 진행하시면 됩니다!</p>
      <p>그럼 화이팅입니다!</p>
    </div>
  );
}

export default Login;
