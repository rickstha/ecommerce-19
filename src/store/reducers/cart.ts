import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { ProductStoreType } from "@/types";


interface CartTypes {
  cartItems: ProductStoreType[];
  removeProduct: any
  
}

const initialState = {
  cartItems: [],
} as unknown as CartTypes;


type AddProductType = {
  id: any;
  product: ProductStoreType;
  count: number;
 
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<AddProductType>) => {
      
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.product],

      };
    },

   
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
