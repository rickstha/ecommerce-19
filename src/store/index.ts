import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistStore } from "redux-persist";

import cartReducer from "./reducers/cart";
import userReducer from "./reducers/user";


const reducer = {
  cart: cartReducer,
  user: userReducer,
  update:userReducer,
};


let store = configureStore({
  reducer,
});

const makeStore = ({ isServer }: { isServer: boolean }) => {
  if (isServer) {
 
    return (store = configureStore({
      reducer,
    }));
  } else {
  

    (store as typeof store & { __persistor?: any }).__persistor = persistStore(store); 
    return store;
  }

};

// export an assembled wrapper
// @ts-ignore:next-line
export const wrapper = createWrapper(makeStore, { debug: true });

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
