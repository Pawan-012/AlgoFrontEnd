import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./Slices/card";
import authReducer from "./Slices/authSlice";
import userDetails from "./Slices/UserDetailsSlice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
    auth: authReducer,
    userdetails: userDetails,
  },
});
