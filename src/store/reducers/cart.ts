//done
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { ProductStoreType } from "@/types";

interface CartTypes {
  cartItems: ProductStoreType[];
  addProduct:any
  updateProduct?:any

  
}

const initialState = {
  removeProduct: [],
} as unknown as CartTypes;




type AddProductType = {
  id: any;
  product: ProductStoreType;
  count: number;
  productDetails?: string;
  productNumber?:string;
  number?: number;
  

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
