import ACTIONS from "../actions/index";

const initialState = {
  isLoading: false,
};

let loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TURN_ON_LOADING:
      return {
        isLoading: true,
      };
    case ACTIONS.TURN_OFF_LOADING:
      return {
        isLoading: false,
      };
  }
};

export default loadingReducer;
