import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser: (state, value) => {
      state.token = value.payload;
    },
  },
});

export const { setUser } = profileSlice.actions;

export default profileSlice.reducer;
