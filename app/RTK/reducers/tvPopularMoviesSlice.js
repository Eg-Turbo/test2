import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URLForAllMovies =
  "https://api.themoviedb.org/3/tv/popular?api_key=324e1a1ac641260268bae6b6206eb94a&language=en-US&page=1";
export const fetchTvPopularMovies = createAsyncThunk(
  "tvPopularSlice/fetchTvPopularMovies",
  async () => {
    let data = await (await fetch(API_URLForAllMovies)).json();
    return data;
  }
);
export const tvPopularSlice = createSlice({
  initialState: [],
  name: "tvPopularSlice",
  reducers: {},
  extraReducers: (bulder) => {
    bulder.addCase(fetchTvPopularMovies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default tvPopularSlice.reducer;
