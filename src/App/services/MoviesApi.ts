import { createSlice } from "@reduxjs/toolkit";

 interface CounterState {
  moviesData: string[];
  moviesGenreData: string[];
  loading: boolean;
  error: null;
}

const initialState: CounterState = {
  moviesData: [],
  moviesGenreData: [],
  loading: false,
  error: null,
};

const counterSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
});

export default counterSlice.reducer;
