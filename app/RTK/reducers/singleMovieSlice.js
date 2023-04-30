import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSingleMovies = createAsyncThunk(
  "singleMovieSlice/fetchSingleMovies",
  async (movieID) => {
    const singleMovie = `https://api.themoviedb.org/3/movie/${movieID}?api_key=324e1a1ac641260268bae6b6206eb94a&language=en-US`;
    let data = await (await fetch(singleMovie)).json();
    return data;
  }
);
export const singleMovieSlice = createSlice({
  initialState: [],
  name: "singleMovieSlice",
  reducers: {},
  extraReducers: (bulder) => {
    bulder.addCase(fetchSingleMovies.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default singleMovieSlice.reducer;
