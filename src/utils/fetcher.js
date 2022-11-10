import axios from "axios";

class CustomError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

export async function fetcher(url) {
  return (await axios.get(url)).data;
}

export async function authFetcher(url) {
  const token = localStorage.getItem("token");
  if (!token || token === "") {
    const error = new CustomError(401, "Not Authorized");
    throw error;
  }

  return (
    await axios.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
  ).data;
}
