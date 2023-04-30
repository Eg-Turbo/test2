import Link from "next/link";

function CustomBtn({ title, link }) {
  return (
    <Link href={link ? link : ""} target="_blanck">
      {" "}
      <button className="custom-btn inline-block">{title}</button>
    </Link>
  );
}
export default CustomBtn;
