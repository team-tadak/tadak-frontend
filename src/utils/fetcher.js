import axios from "axios";

// custom 한 error
class CustomError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

// 인증이 필요없는 (로그인이 필요없는) 데이터를 가져올 경우
export async function fetcher(url) {
  return (
    await axios.get("http://localhost:8000" + url, {
      withCredentials: true,
    })
  ).data;
}

// 인증이 필요한 (로그인이 필요한) 데이터를 가져올 경우
export async function authFetcher(url) {
  // localStorage 에 저장된 JWT token 획득
  const token = localStorage.getItem("token");

  // JWT token 이 없거나 비어 있으면 Error
  if (!token || token === "") {
    const error = new CustomError(401, "Not Authorized");
    throw error;
  }

  return (
    // header. 에 Bearer 정보 실어 보내서 정보 획득
    (
      await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
    ).data
  );
}
