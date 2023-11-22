import myReducer from "./reducers/authReducer";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: myReducer,
  middleware: [thunk],
});

export default store;
