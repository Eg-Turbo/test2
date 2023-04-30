"use client";
import WatchLaterCard from "./watchlater/WatchLaterCard";

export default function MovieSlide({ movies, title }) {
  function scrollLeft() {
    const scrollSection = document.querySelector("#scroll");
    scrollSection.scrollLeft -= 200;
  }
  function scrollRight() {
    const scrollSection = document.querySelector("#scroll");
    scrollSection.scrollLeft += 200;
  }
  return (
    <div className="relative">
      <h2 className="text-3xl font-bold mt-32">{title}:</h2>
      <div
        className="snap-x flex snap-mandatory scroll-smooth  w-ful gap-16 h-fit overflow-x-hidden my-12"
        id="scroll"
      >
        {movies ? (
          movies.map((movie) => <WatchLaterCard movie={movie} />)
        ) : (
          <h2>loding....</h2>
        )}
        <button
          className="absolute left-0 top-1/2 translate-x-50 translate-y-50 flex justify-center items-center w-12 h-12 bg-gray-300/75 text-lg rounded-full"
          onClick={() => {
            scrollLeft();
          }}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          className="absolute right-0 top-1/2 translate-y-50 translate-x-1/2 flex justify-center items-center w-12 h-12 bg-gray-300/75 text-lg rounded-full"
          onClick={() => {
            scrollRight();
          }}
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
