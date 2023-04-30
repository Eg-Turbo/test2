function Rating({ rateNumber }) {
  const ratingContent = rateNumber;
  const ratingScore = parseInt(ratingContent, 10);

  const scoreClass =
    ratingScore < 40 ? "bad" : ratingScore < 60 ? "meh" : "good";
  const ratingColor =
    ratingScore < 40 ? "#e74c3c" : ratingScore < 60 ? "#f1c40f" : "#27ae60";
  let gradient = `background: conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`;
  gradient = "background:red";

  const rating = (
    <div
      className={`rating ${scoreClass}`}
      style={{
        background: `conic-gradient(${ratingColor} ${ratingScore}%, transparent 0 100%)`,
      }}
    >
      <span className="">{ratingScore}</span>
    </div>
  );
  return <div className="absolute left-1 bottom-rate w-12 h-12">{rating}</div>;
}
export default Rating;
