import { configureStore } from "@reduxjs/toolkit";
import PopularSlice from "./reducers/popularMoviesSlice";
import singleMovieSlice from "./reducers/singleMovieSlice";
import watchLaterSlice from "./reducers/watchLaterSlice";
import topratedSlice from "./reducers/topratedMovieesSlice";
import trendingSlice from "./reducers/trendingMoviesSlice";
import tvPopularSlice from "./reducers/tvPopularMoviesSlice";
export const store = configureStore({
  reducer: {
    popular: PopularSlice,
    toprated: topratedSlice,
    trending: trendingSlice,
    tvPopular: tvPopularSlice,
    singleMovie: singleMovieSlice,
    watchLater: watchLaterSlice,
  },
});
