//done but no idea about the error fix

import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistStore } from "redux-persist";

import cartReducer from "./reducers/cart";
import userReducer from "./reducers/user";


const reducer = {
  cart: cartReducer,
  user: userReducer,
  delete: userReducer,

  update:userReducer,
};


let store = configureStore({
  reducer,
});



const makeStore = () => {
  // Detect if running on the server // these coments arent needed so dont write these kind of coment in the middle of code
  const isServer = typeof window === "undefined";
  if (isServer) {
    return configureStore({
      reducer,
    });
  } else {
    (store as typeof store & { __persistor?: any }).__persistor = persistStore(store);
    return store;
  }
};

export const wrapper = createWrapper(makeStore, { debug: true });


export type RootState = ReturnType<typeof store.getState>;


export type AppDispatch = typeof store.dispatch;
