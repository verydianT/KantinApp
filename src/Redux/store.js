import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    productCart: productSlice,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
