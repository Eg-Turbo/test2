import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URLForAllMovies =
  "https://api.themoviedb.org/3/movie/popular?api_key=324e1a1ac641260268bae6b6206eb94a&page=1";
export const fetchMovies = createAsyncThunk(
  "popularSlice/fetchMovies",
  async () => {
    let data = await (await fetch(API_URLForAllMovies)).json();
    return data;
  }
);
export const popularSlice = createSlice({
  initialState: [],
  name: "popularslice",
  reducers: {},
  extraReducers: (bulder) => {
    bulder.addCase(fetchMovies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default popularSlice.reducer;
