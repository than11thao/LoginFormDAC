import {
  LOGIN,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  LOGOUT,
  AUTH_FAILURE,
} from "../containers/authContainer";

const initialState = {
  isAuthenticated: false,
  token: null,
  error: null,
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }

    case AUTH_REQUEST:
      return {
        ...state,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        isAuthenticated: true,
        error: null,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        error: action.error,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default myReducer;
