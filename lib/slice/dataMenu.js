import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const dataMenuSlice = createSlice({
  name: "dataMenu",
  initialState,
  reducers: {
    getdata: (state, action) => {
      return (state = action.payload);
    },
  },
});
const { actions, reducer } = dataMenuSlice;
export const { getdata } = actions;
export default reducer;
