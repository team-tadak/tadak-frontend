import useSWR from "swr";
import { authFetcher } from "utils/fetcher";

// 유저의 로그인 여부를 검증하고, 로그인이 돼 있으면, 유저 데이터를, 돼 있지 않으면 loggedOut 에 true 를 반환.
function useHistories() {
  const { data, mutate, error } = useSWR("/users/me/histories", authFetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  // 로그아웃 여부를 알려주는 flag
  // true: 로그아웃 된 상태
  // false: 로그인 된 상태
  const loggedOut = error && error.status === 401;

  return {
    loggedOut,
    user: data,
    histories: data.histories,
    error,
    mutate, // 데이터 변경 시 이 API 를 이용하는 모든 컴포넌트에 UI 업데이트 방송.
  };
}

export default useHistories;
