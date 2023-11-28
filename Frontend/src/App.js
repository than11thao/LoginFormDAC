import React, { lazy, Suspense, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  dispatchLogin,
  fetchUser,
  dispatchGetUser,
} from "./redux/actions/authAction";

import NotFound from "./utils/NotFound/NotFound";
import AccountServices from "./services/AccountServices";

const LazyLoginPage = lazy(() => import("./views/LoginPage/LoginPage"));
const LazyHomePage = lazy(() => import("./views/HomePage/HomePage"));
// const LazyAccountPage = lazy(() => import("./components/"));

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      const getToken = async () => {
        const res = AccountServices.getAccessToken();
        console.log(res);
        dispatch({ type: "GET_TOKEN", payload: res.data });
      };
      getToken();
    }
  }, [auth.isLogged, dispatch]);

  useEffect(() => {
    if (token) {
      const getUser = () => {
        dispatch(dispatchLogin());

        return fetchUser(token).then((res) => {
          dispatch(dispatchGetUser(res));
        });
      };
      getUser();
    }
  }, [token, dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {
          <Route
            path="/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyHomePage />
              </Suspense>
            }
          />
        }
        {
          <Route
            path="/login"
            element={
              auth.isLogged ? (
                NotFound
              ) : (
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyLoginPage />
                </Suspense>
              )
            }
          />
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
