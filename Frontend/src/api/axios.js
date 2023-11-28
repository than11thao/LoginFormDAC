import axios from "axios";

function buildApi(url) {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  // instance.interceptors.request.use((config) => ({
  //     ...config,
  //     headers: {
  //         ...config.headers,
  //         Authorization: `${getAccessToken()}`,
  //     },
  //     withCredentials: false,
  // }));

  // instance.interceptors.response.use(
  //     (response) => {
  //         return response;
  //     },
  //     (error) => {
  //         if (error.response && 401 === error.response.status) {
  //             let savedToken = getAccessToken();
  //             if (savedToken !== null) {
  //                 localStorage.removeItem("accessToken");
  //             }
  //         }
  //         return Promise.reject(error);
  //     }
  // );

  return instance;
}

const api = buildApi();
export default api;
