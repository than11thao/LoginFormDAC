import ACTIONS from "./index";

export const dispatchLogin = () => {
  return {
    type: ACTIONS.LOGIN,
  };
};

export const authRequest = () => ({
  type: ACTIONS.AUTH_REQUEST,
});

export const authSuccess = (token) => ({
  type: ACTIONS.AUTH_SUCCESS,
  token,
});

export const authFailure = (error) => ({
  type: ACTIONS.AUTH_FAILURE,
  error,
});

export const logout = () => ({
  type: ACTIONS.LOGOUT,
});
