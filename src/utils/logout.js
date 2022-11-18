import { mutate } from "swr";
import { serverAxios } from "utils/commonAxios";
import { deleteCookie } from "utils/cookie";

// 로그아웃 처리
// TODO: 이렇게 처리가 맞나? custom hook 이나 cache 에 대한 고민 필요.
export async function handleLogout(cache) {
  try {
    const body = {};

    serverAxios
      .post("/users/me/logout", body, {
        withCredentials: true,
      })
      .then(function (response) {
        // POST 요청 성공 시
        // this.props.history.push("/");
        console.log("로그아웃 성공");
        mutate("/users/me");
      });
  } catch (e) {
    //전송 실패
    // console.log(e);
    console.log("이미 로그아웃 되었습니다. ");
    mutate("/users/me");
  }

  deleteCookie("tadak_web_token", "*", window.location.hostname);

  cache.clear();
}
