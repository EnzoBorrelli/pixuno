import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  example: "Hello, its me Endy!",
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    setExample: (state, action) => {
      state.example = action.payload;
    },
  },
});

export const exampleActions = exampleSlice.actions;
export const exampleReducer = exampleSlice.reducer;
