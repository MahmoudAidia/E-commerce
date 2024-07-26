import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishes: [],
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const item = state.wishes.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.wishes.push(action.payload);
      }
    },
    removeWish: (state, action) => {
      state.wishes = state.wishes.filter(
        (item) => item?.id !== action?.payload
      );
    },

    resetWishList: (state) => {
      state.wishes = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishList, removeWish, resetWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;
