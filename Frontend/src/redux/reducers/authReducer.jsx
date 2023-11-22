import ACTIONS from "../actions";

const initialState = {
  user: [],
  isLogged: false,
  isAdmin: false,
  isAuthenticated: false,
  token: null,
  error: null,
};

var myReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        isLogged: true,
      };

    case ACTIONS.AUTH_REQUEST:
      return {
        ...state,
      };

    case ACTIONS.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        isAuthenticated: true,
        error: null,
      };

    case ACTIONS.AUTH_FAILURE:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        error: action.error,
      };

    case ACTIONS.LOGOUT:
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
