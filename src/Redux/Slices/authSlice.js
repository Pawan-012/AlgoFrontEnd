import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLogin: false, usrDetails: {} },
  reducers: {
    logged_in_success_update: (state, payload) => {
      console.log("------into auth Slice ---- changing login status------");
      state.isLogin = true;
      state.usrDetails = payload;
      console.log("------into auth Slice ---- changing login status------");
    },
    logged_out_success_update: (state) => {
      state.isLogin = false;
      state.usrDetails = {};
    },
  },
});
export const did_login = authSlice.actions.logged_in_success_update;
export const did_logout = authSlice.actions.logged_out_success_update;

export default authSlice.reducer;
