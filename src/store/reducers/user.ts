//done
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { remove } from "lodash";

type ProductType = {
  id: string;
  name: string;
  thumb: string;
  price: string;
  count: number;
  color: string;
  images: string[];
  discount?: string;
  currentPrice?: number;

};

type ToggleFavType = {
  id: string;
};

interface UserSliceTypes {
  
  user: any;
  favProducts: string[];
  products?:ProductType[];
   isSingIn?:boolean;
  isSignOut?:boolean;
  forgotPassword?: any[];
  
}

const initialState = {
  user: {
    name: "",
  },
  favProducts: [],

} as UserSliceTypes;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavProduct(state, action: PayloadAction<ToggleFavType>) {
      const index = state.favProducts.includes(action.payload.id);
     

      if (!index) {
        state.favProducts.push(action.payload.id);

        return;
      }
    
    },
    setUserLogged(state, action: PayloadAction<ProductType>) {
      const index = state.favProducts.includes(action.payload.id);

      if (!index) {
        state.favProducts.push(action.payload.id);

        return {
          ...state,
          favProducts: state.favProducts,
        };
      }

      remove(state.favProducts, (id) => id === action.payload.id);

      return {
        ...state,
        favProducts: state.favProducts,
      };
    },
  },
});

export const { toggleFavProduct, setUserLogged } = userSlice.actions;
export default userSlice.reducer;
