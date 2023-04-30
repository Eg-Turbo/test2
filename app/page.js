"use client";
import { fetchMovies } from "./RTK/reducers/popularMoviesSlice";
import { fetchTopratedMovies } from "./RTK/reducers/topratedMovieesSlice";
import { fetchtrendingMovies } from "./RTK/reducers/trendingMoviesSlice";
import { fetchTvPopularMovies } from "./RTK/reducers/tvPopularMoviesSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Landing from "./RTK/Landing";
import MovieSection from "./MovieSection";
import MovieSlide from "./MovieSlide";
export default function Home() {
  const popular = useSelector((state) => state.popular);
  const trending = useSelector((state) => state.trending);
  const tvPopular = useSelector((state) => state.tvPopular);
  const toprated = useSelector((state) => state.toprated);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchTopratedMovies());
    dispatch(fetchtrendingMovies());
    dispatch(fetchTvPopularMovies());
    console.log(trending);
    console.log(tvPopular);
    console.log(toprated);
  }, []);
  return (
    <>
      <Landing />
      <div className="container">
        <MovieSlide movies={popular.results} title="Popular" />
        <MovieSection movies={toprated.results} title="Top Rated" />
        <MovieSection movies={trending.results} title="Trending" />
        <MovieSection movies={tvPopular.results} title="Tv Popular" />
      </div>
    </>
  );
}
