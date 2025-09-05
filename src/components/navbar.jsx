"use client";

import Link from "next/link";
import logo from "../../public/logo.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Navbar = () => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const router = useRouter();

  function searchHandler() {
    if (query.trim() !== "") router.push(`/search?query=${query}`);
  }

  useEffect(() => {
    const currentQuery = searchParams.get("query") || "";
    setQuery(currentQuery);
  }, [searchParams]);

  return (
    <nav className="shadow-lg fixed top-0 right-0 left-0 bg-white/80 py-4 flex justify-between items-center px-20">
      <h1 className="text-4xl font-bold cursor-pointer ">
        <Image src={logo} alt="logo" width={120} height={30} />
      </h1>
      <div className="flex bg-white focus-within:shadow-lg focus-within:scale-101 focus-within:shadow-sky-400 focus-within:border-sky-400 justify-between items-center border rounded-md border-gray-300 p-3 transition duration-300">
        <input
          type="text"
          placeholder="search..."
          className="w-[500px] outline-none "
          value={query}
          onKeyDown={(e) => e.key === "Enter" && searchHandler()}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="cursor-pointer outline-none" onClick={searchHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 30 30"
          >
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
          </svg>
        </button>
      </div>
      <ul className="flex gap-10 text-2xl">
        <li>
          <Link
            onClick={() => setQuery("")}
            className="hover:text-sky-400 transition ease-in duration-250"
            href={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setQuery("")}
            className="hover:text-sky-400 transition ease-in duration-250"
            href={"/blog"}
          >
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
