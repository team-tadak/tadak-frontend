import useSWR from 'swr';
import { fetcher } from 'utils/fetcher';

// 전체 유저들의 랭킹을 가져옴. (본인 로그인 여부와 무관)
function useRanks(pageNumber, pageSize, languageNo = 1, grammarNo = 1) {
  const { data, mutate, error } = useSWR(
    languageNo
      ? `/ranks?pageNumber=${pageNumber}&pageSize=${pageSize}&languageNo=${languageNo}`
      : `/ranks?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    fetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );
  // console.log(data);

  return {
    ranks: data?.ranks,
    error,
    mutate, // 데이터 변경 시 이 API 를 이용하는 모든 컴포넌트에 UI 업데이트 방송.
  };
}

export default useRanks;
