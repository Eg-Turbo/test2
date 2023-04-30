"use client";
import { useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieSection({ movies, title }) {
  const [movieNumber, setMovieNumber] = useState(5);
  let filteredDate = [];
  if (movies) filteredDate = movies.slice(0, movieNumber);
  const movieNumverHandler = (e) => {
    if (e.target.innerHTML == "See More") {
      setMovieNumber(20);
      e.target.innerHTML = "See Less";
    } else {
      setMovieNumber(5);
      e.target.innerHTML = "See More";
    }
  };
  return (
    <>
      <h2 className="text-3xl font-bold mt-32">{title}:</h2>
      <div className="my-12">
        <div className="grid gap-16 grid-cols-fluid">
          {filteredDate ? (
            filteredDate.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
        <button
          className="block w-full text-center text-lg font-bold my-2 border border-2"
          onClick={(e) => {
            movieNumverHandler(e);
          }}
        >
          See More
        </button>
      </div>
    </>
  );
}
