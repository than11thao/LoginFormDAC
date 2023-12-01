import axios from "axios";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import AccountServices from "../services/AccountServices";
// import {
//   dispatchLogin,
//   fetchUser,
//   dispatchGetUser,
// } from "../redux/actions/authAction";

const buildApi = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // // Add an interceptor for Authorization header
  // instance.interceptors.request.use(
  //   (config) => {
  //     // Add the Authorization header if the token exists
  //     if (token) {
  //       config.headers.Authorization = `Bearer ${token}`;
  //     }

  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  return instance;
};

// const Axios = () => {
//   const dispatch = useDispatch();
//   const auth = useSelector((state) => state.auth);
//   const token = useSelector((state) => state.token);

//   const { isLogged } = auth;

//   useEffect(() => {
//     const firstLogin = localStorage.getItem("firstLogin");
//     if (firstLogin) {
//       const getToken = async () => {
//         try {
//           const res = await AccountServices.getAccessToken(null);
//           dispatch({ type: "GET_TOKEN", payload: res.data });
//         } catch (error) {
//           console.error("Error getting token:", error);
//         }
//       };
//       getToken();
//     }
//   }, [isLogged, dispatch]);

//   const api = useApi(token);

//   return api;
// };
const api = buildApi();
export default api;
