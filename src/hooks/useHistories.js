import useSWR from "swr";
import { fetcher } from "utils/fetcher";

// 로그인돼있다면 유저의 게임기록을 반환
function useHistories(pageNumber, pageSize) {
  const { data, mutate, error } = useSWR(
    `/users/me/histories?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );

  return {
    histories: data?.histories,
    error,
    mutate, // 데이터 변경 시 이 API 를 이용하는 모든 컴포넌트에 UI 업데이트 방송.
  };
}

export default useHistories;
