import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import counterSlice from "./services/MoviesApi";
export const store = configureStore({
  reducer: {
    movie: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
