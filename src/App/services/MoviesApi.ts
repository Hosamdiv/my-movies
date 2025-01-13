import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosApi } from "../../config/axios.config";
import { RootState } from "../store";

interface ICounterState {
  actorsData: string[];
  loading: boolean;
  error: string | null;
}

const initialState: ICounterState = {
  actorsData: [],
  loading: false,
  error: null,
};

export const movieActors = createAsyncThunk(
  "movieDetailsSlice/movieActors",
  async ({ id }: { id: number }) => {
    const { data } = await axiosApi.get(`/person/${id}`);
    return data.cast;
  }
);

const counterSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(movieActors.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(movieActors.fulfilled, (state, action) => {
      state.loading = false;
      state.actorsData = action.payload;
    });
    builder.addCase(movieActors.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An error occurred";
    });
  },
});
export const movies = (state: RootState) => state.movie;

export default counterSlice.reducer;
