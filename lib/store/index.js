import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataMenuSlice from "../slice/dataMenu";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  dataMenu: dataMenuSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Tắt kiểm tra tính serializable
      immutableCheck: false, // Tắt kiểm tra tính immutable
    }),
});
export const persistor = persistStore(store);
