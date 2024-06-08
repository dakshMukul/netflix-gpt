import { createSlice } from "@reduxjs/toolkit";

const appConfigSlice = createSlice({
  name: "aapconfig",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export default appConfigSlice.reducer;
export const { changeLanguage } = appConfigSlice.actions;
