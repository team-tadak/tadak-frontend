import React from "react";
import { useCallback } from "react";
import { serverAxios } from "utils/commonAxios";

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

  return <div>Register</div>;
}

export default Register;
