import { createSlice } from "@reduxjs/toolkit";

const userDetails = createSlice({
  name: "userDetails",
  initialState: { state: {} },
  reducers: {
    addDetails: (state, action) => {
      console.log("------into the Reducer----------");
      console.log(action);
      state.state = action.payload;
      console.log("------out of the Reducer----------");
    },
    addUser: (state, action) => {
      console.log("------into the Reducer----------");
      console.log("PAYLOAD SENT TO STORE TO STORE : ", action);
      state = action;
      console.log("STRORED STATE:", state);
      console.log("------out of the Reducer----------");
    },
    removeDetail: (state) => {
      state.state = {};
    },
  },
});
export const addDetails = userDetails.actions.addDetails;
export const removeDetail = userDetails.actions.removeDetail;
export const addUser = userDetails.actions.addUser;
export default userDetails.reducer;
