import { mutate } from "swr";
import { deleteCookie } from "utils/cookie";

// 로그아웃 처리
// TODO: 이렇게 처리가 맞나? custom hook 이나 cache 에 대한 고민 필요.
export function handleLogout(cache) {
  deleteCookie("tadak_web_token", "*", window.location.hostname);
  mutate("/users/me");

  cache.clear();
}
