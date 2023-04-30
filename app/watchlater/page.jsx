"use client";
import { useSelector } from "react-redux";
import WatchLaterCard from "./WatchLaterCard";
function WatchLater() {
  const data = useSelector((state) => state.watchLater);
  console.log(data);
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mx-auto text-center">Watch Later</h1>
      {data.map((branchData) => {
        return (
          <>
            {branchData.content.length ? (
              <>
                <h2 className="mt-24 mb-8 text-4xl font-bold">
                  {branchData.branchName}
                </h2>
                <div className="relative snap-x flex snap-mandatory  w-ful gap-16 h-fit overflow-x-auto">
                  {branchData.content.map((movie) => (
                    <WatchLaterCard movie={movie} />
                  ))}
                </div>
              </>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
}

export default WatchLater;
