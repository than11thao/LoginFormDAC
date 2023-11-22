import { AUTH_REQUEST , AUTH_SUCCESS , AUTH_FAILURE , LOGOUT } from "../containers/authContainer";
export const authRequest = () => ({ type: AUTH_REQUEST });
export const authSuccess = (token) => ({ type: AUTH_SUCCESS, token});
export const authFailure = (error) => ({ type: AUTH_FAILURE, error});
export const logout = () => ({ type: LOGOUT });

