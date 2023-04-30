"use client";
import { fetchSingleMovies } from "@/app/RTK/reducers/singleMovieSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import DetailsCard from "./DetailsCard";

function Details({ params: { movieid } }) {
  let data = useSelector((state) => state.singleMovie);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleMovies(movieid));
  }, []);
  return data.title ? <DetailsCard movie={data} /> : <h2>Loading...</h2>;
}
export default Details;
