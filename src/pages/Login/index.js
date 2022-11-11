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

  return <div>Login</div>;
}

export default Login;
