import Link from "next/link";
import Image from "next/image";
import Rating from "./custom/Rating";
function MovieCard({
  movie: { id, title, poster_path, vote_average, release_date },
}) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <>
      <Link href={`/details/${id}`}>
        <div className="card">
          <div className="image relative">
            <Image
              className="rounded-lg mb-4"
              src={imagePath + poster_path}
              alt={title}
              width={800}
              height={900}
            ></Image>
            <Rating rateNumber={vote_average * 10} />
          </div>
          <h2 className="text-lg font-bold">{title}</h2>
          <p>{release_date}</p>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;
