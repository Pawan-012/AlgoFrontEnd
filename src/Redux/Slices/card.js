import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "Card",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      console.log("--------into card slise----------------");
      console.log(action.payload);
      state.push(action.payload);
      console.log("--------out of  card slise----------------");
    },
  },
});
export const { addItem } = cardSlice.actions;
export default cardSlice.reducer;
