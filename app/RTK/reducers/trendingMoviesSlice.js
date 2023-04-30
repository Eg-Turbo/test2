import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_URLForAllMovies =
  "https://api.themoviedb.org/3/trending/all/day?api_key=324e1a1ac641260268bae6b6206eb94a";
export const fetchtrendingMovies = createAsyncThunk(
  "trendingSlice/fetchtrendingMovies",
  async () => {
    let data = await (await fetch(API_URLForAllMovies)).json();
    return data;
  }
);
export const trendingSlice = createSlice({
  initialState: [],
  name: "trendingSlice",
  reducers: {},
  extraReducers: (bulder) => {
    bulder.addCase(fetchtrendingMovies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default trendingSlice.reducer;
