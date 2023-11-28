import ACTIONS from "../actions";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiODRlZjRjNmMtMzFiOS00MyIsInJvbGVfaWQiOiJBRE1JTiIsImV4cCI6MTcwMTc4MDQ1MX0.LxrzNsXCXS0vPa6wR5yWvPIHiuZ7LuMTQW7bcPL0m4s";

const tokenReducer = (state = token, action) => {
  switch (action.type) {
    case ACTIONS.GET_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

export default tokenReducer;
