import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataMenuSlice from "../slice/dataMenu";
import commentsReducer from "../slice/comments";
const rootReducer = combineReducers({
  dataComments: commentsReducer,
  dataMenu: dataMenuSlice,
});
const store = configureStore({
  reducer: rootReducer,
});

export default store;
