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
    <>
      <nav className="shadow-lg fixed top-0 right-0 left-0 z-10 bg-white/80 py-4 flex justify-between items-center max-lg:px-2 px-20">
        <Image
          className="max-md:hidden"
          src={logo}
          alt="logo"
          width={120}
          height={30}
        />
        <div className="flex bg-white focus-within:shadow-lg max-md:w-full focus-within:scale-101 focus-within:shadow-sky-400 focus-within:border-sky-400 justify-between items-center border rounded-md border-gray-300 p-3 transition duration-300">
          <input
            type="text"
            placeholder="search..."
            className="w-[500px] max-md:w-full max-lg:w-[300px] outline-none "
            value={query}
            onKeyDown={(e) => e.key === "Enter" && searchHandler()}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="cursor-pointer outline-none"
            onClick={searchHandler}
          >
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
        <ul className="flex max-md:hidden gap-10 text-2xl">
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
      <ul className="fixed md:hidden z-10 bottom-0 left-0 right-0 bg-white/80 flex justify-around items-center py-4">
        <li>
          <Link className="flex flex-col items-center" href={"/blog"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              width="30px"
              height="30px"
              viewBox="0 0 32 32"
              fill="#000000"
              enableBackground="new 0 0 32 32"
            >
              <g>
                <path
                  fill="#000000"
                  d="M30.5,0h-29C0.673,0,0,0.673,0,1.5v8C0,10.327,0.673,11,1.5,11h29c0.827,0,1.5-0.673,1.5-1.5v-8   C32,0.673,31.327,0,30.5,0z M31,9.5c0,0.275-0.225,0.5-0.5,0.5h-29C1.225,10,1,9.775,1,9.5v-8C1,1.225,1.225,1,1.5,1h29   C30.775,1,31,1.225,31,1.5V9.5z"
                />
                <path
                  fill="#000000"
                  d="M31.5,12.5c-0.276,0-0.5,0.224-0.5,0.5v17.5c0,0.275-0.225,0.5-0.5,0.5h-29C1.225,31,1,30.775,1,30.5V13   c0-0.276-0.224-0.5-0.5-0.5S0,12.724,0,13v17.5C0,31.327,0.673,32,1.5,32h29c0.827,0,1.5-0.673,1.5-1.5V13   C32,12.724,31.776,12.5,31.5,12.5z"
                />
                <path
                  fill="#000000"
                  d="M13.5,27c0.827,0,1.5-0.673,1.5-1.5v-8c0-0.827-0.673-1.5-1.5-1.5h-8C4.673,16,4,16.673,4,17.5v8   C4,26.327,4.673,27,5.5,27H13.5z M5,25.5v-8C5,17.225,5.225,17,5.5,17h8c0.275,0,0.5,0.225,0.5,0.5v8c0,0.275-0.225,0.5-0.5,0.5h-8   C5.225,26,5,25.775,5,25.5z"
                />
                <path
                  fill="#000000"
                  d="M18,18h9c0.276,0,0.5-0.224,0.5-0.5S27.276,17,27,17h-9c-0.276,0-0.5,0.224-0.5,0.5S17.724,18,18,18z"
                />
                <path
                  fill="#000000"
                  d="M18,22h9c0.276,0,0.5-0.224,0.5-0.5S27.276,21,27,21h-9c-0.276,0-0.5,0.224-0.5,0.5S17.724,22,18,22z"
                />
                <path
                  fill="#000000"
                  d="M18,26h9c0.276,0,0.5-0.224,0.5-0.5S27.276,25,27,25h-9c-0.276,0-0.5,0.224-0.5,0.5S17.724,26,18,26z"
                />
              </g>
            </svg>
            <span>blog</span>
          </Link>
        </li>
        <li>
          <Link className="flex flex-col items-center" href={"/"}>
            <svg
              viewBox="-1.6 -1.6 19.20 19.20"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000"
              strokeWidth="0.5"
              width="40px"
              hanging="40px"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0.7"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"></path>{" "}
              </g>
            </svg>
            <span>home</span>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
