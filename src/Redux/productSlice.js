import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total_item: 0,
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    getAll: (state) => {
      return state;
    },
    addProductCart: (state, action) => {
      const { payload } = action;

      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === payload.id
      );

      if (existingItem) {
        const updateItem = {
          ...existingItem,
          qty: existingItem.qty + 1,
        };

        const itemIndex = state.cart.findIndex(
          (cartItem) => cartItem.id === payload.id
        );

        return {
          ...state,
          cart: [
            ...state.cart.slice(0, itemIndex),
            updateItem,
            ...state.cart.slice(itemIndex + 1),
          ],
        };
      } else {
        const newItem = {
          ...payload,
          qty: 1,
        };

        return {
          ...state,
          cart: [...state.cart, newItem],
          total_item: state.total_item + 1,
        };
      }
    },
    deleteProductCart: (state, action) => {
      const { payload } = action;
    
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === payload.id
      );
        
      const itemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === payload.id
      );
      
      if (existingItem) {
        if(existingItem.qty > 1) {
          const updateItem = {
            ...existingItem,
            qty: existingItem.qty - 1,
          };

          return {
            ...state,
            cart: [
              ...state.cart.slice(0, itemIndex),
              updateItem,
              ...state.cart.slice(itemIndex + 1),
            ],
          };
        } else {

          return {
            ...state,
            cart: [
              ...state.cart.slice(0, itemIndex),
              ...state.cart.slice(itemIndex + 1),
            ], total_item: state.total_item - 1
          };
        }
      }
    }
  },
});

export const { getAll, addProductCart, deleteProductCart } = productSlice.actions;
export default productSlice.reducer;
