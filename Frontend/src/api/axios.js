import axios from "axios";

function buildApi() {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
}

const api = buildApi();
export default api;
