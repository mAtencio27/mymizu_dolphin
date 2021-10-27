import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: false,
  reducers: {
    setPage: (_, action) => {
      return action.payload;
    },
  },
});
export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
