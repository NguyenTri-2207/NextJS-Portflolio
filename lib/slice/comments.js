import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Tạo một async thunk action
export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (urlBlog, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/comments/${urlBlog}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Tạo một slice cho comments
const initialState = {
  data: [],
  loading: false,
  error: null,
};
const commentsSlice = createSlice({
  name: "dataComments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
        state.data = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default commentsSlice.reducer;
