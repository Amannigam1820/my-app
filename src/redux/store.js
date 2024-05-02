import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducer";

const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
});

export default store;
