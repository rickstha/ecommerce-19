import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./reducers/cart";
import userReducer from "./reducers/user";


const reducer = {
  cart: cartReducer,
  user: userReducer,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

let store = configureStore({
  reducer,
});

const makeStore = ({ isServer }: { isServer: boolean }) => {
  if (isServer) {
 
    return (store = configureStore({
      reducer,
    }));
  } else {
    const persistConfig = {
      key: "shoppingcart",
      whitelist: ["cart", "user"], 
      storage, 
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer); // Create a new reducer with our existing reducer

    store = configureStore({
      reducer: persistedReducer,
    }); 

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
