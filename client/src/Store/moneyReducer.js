import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDollar: true,
};

export const moneySlice = createSlice({
  name: "money",
  initialState,
  reducers: {
    toggle: (state, acion) => {
      state.isDollar = acion.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = moneySlice.actions;

export default moneySlice.reducer;
