import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/searchSlice";

export const store = configureStore({
  reducer: {
    [searchSlice.name]: searchSlice.reducer,
  },
});
