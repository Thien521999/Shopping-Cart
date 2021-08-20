import counterReducer from "../features/Counter/counterSlice";
import userReducer from "../features/Auth/userSlice";
import cartReducer from "../features/Cart/cartSlice";
import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = {
  counter: counterReducer,
  user: userReducer,
  cart: cartReducer,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//setup redux store
const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
