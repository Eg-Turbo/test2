"use client";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
function Header() {
  function handelClick() {
    const menuLinks = document.querySelector("#toggle");
    menuLinks.classList.toggle("hidden");
  }
  return (
    <nav className="md:shadow-md shadow-slate-200 sticky z-10">
      <div className="container flex justify-between items-center py-4 md:py-0">
        <div className="image">
          <Image
            src={logo}
            alt="popcorn cartoon logo"
            className="w-16 md:w-24"
            priority
          ></Image>
        </div>
        <button onClick={handelClick} className="text-3xl md:hidden">
          <i className="fa-solid fa-bars"></i>
        </button>
        <div
          className="links absolute top-20 right-0 w-screen shadow-md md:shadow-transparent shadow-slate-200 hidden md:block md:static bg-white"
          id="toggle"
        >
          <ul className="flex flex-col justify-center items-center gap-1 md:flex-row md:justify-end">
            <li className="px-8 py-2 rounded hover:bg-red-500 md:px-4 md:text-lg font-bold">
              <Link href="/">Home</Link>
            </li>
            <li className="px-8 py-2 rounded hover:bg-red-500 md:px-4 md:text-lg font-bold">
              <Link href="/">Series</Link>
            </li>
            <li className="px-8 py-2 rounded hover:bg-red-500 md:px-4 md:text-lg font-bold">
              Movies
            </li>
            <li className="px-8 py-2 rounded hover:bg-red-500 md:px-4 md:text-lg font-bold">
              <Link href="/watchlater">Watch Later</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
