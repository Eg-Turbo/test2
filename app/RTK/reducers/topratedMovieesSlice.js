import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URLForAllMovies =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=324e1a1ac641260268bae6b6206eb94a&page=1";
export const fetchTopratedMovies = createAsyncThunk(
  "topratedSlice/fetchTopratedMovies",
  async () => {
    let data = await (await fetch(API_URLForAllMovies)).json();
    return data;
  }
);
export const topratedSlice = createSlice({
  initialState: [],
  name: "topratedSlice",
  reducers: {},
  extraReducers: (bulder) => {
    bulder.addCase(fetchTopratedMovies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default topratedSlice.reducer;
