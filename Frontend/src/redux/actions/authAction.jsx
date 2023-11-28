import AccountServices from "../../services/AccountServices";
import ACTIONS from "./index";

export const dispatchLogin = () => {
  return {
    type: ACTIONS.LOGIN,
  };
};

export const fetchUser = async (token) => {
  const res = await AccountServices.searchAccount({
    header: { Authorization: token },
  });
  return res;
};

export const dispatchGetUser = (res) => {
  return {
    type: ACTIONS.GET_USER,
    payload: {
      user: res.data,
      isAdmin: res.data.role_id === 1 ? true : false,
    },
  };
};

export const logout = () => ({
  type: ACTIONS.LOGOUT,
});
