import useSWR from "swr";
import { authFetcher } from "utils/fetcher";

function useUser() {
  const { data, mutate, error } = useSWR("/login", authFetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false,
  });

  const loggedOut = error && error.status === 401;

  return {
    loggedOut,
    user: data,
    error,
    mutate,
  };
}

export default useUser;
