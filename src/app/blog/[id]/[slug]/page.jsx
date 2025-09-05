"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { use, useEffect, useState } from "react";

const Detail = ({ params }) => {
  const [detail, setDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { id } = use(params);

  const getData = async () => {
    try {
      const res = await axios.get(`https://dev.to/api/articles/${id}`);
      setDetail(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (isLoading)
    return (
      <p className=" text-4xl text-center my-10 text-blue-500">loading...</p>
    );

  return (
    <div className="container">
      <Link href={"/blog"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="30px"
          viewBox="0 0 36 36"
          role="img"
          className="mt-5 mb-10"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#2c70dd"
              d="M21.533 18.002L33.768 5.768a2.5 2.5 0 0 0-3.535-3.535L17.998 14.467L5.764 2.233a2.498 2.498 0 0 0-3.535 0a2.498 2.498 0 0 0 0 3.535l12.234 12.234L2.201 30.265a2.498 2.498 0 0 0 1.768 4.267c.64 0 1.28-.244 1.768-.732l12.262-12.263l12.234 12.234a2.493 2.493 0 0 0 1.768.732a2.5 2.5 0 0 0 1.768-4.267L21.533 18.002z"
            />
          </g>
        </svg>
      </Link>
      {detail.cover_image ? (
        <Image
          className="mx-auto w-1/2 max-md:w-full mb-10"
          src={detail.cover_image}
          alt={detail.title}
          width={1000}
          height={100}
        />
      ) : (
        <Image
          className="mx-auto w-1/2 max-md:w-full mb-10"
          src={detail.social_image}
          alt={detail.title}
          width={1000}
          height={100}
        />
      )}
      <h1 className="text-center text-3xl my-5 font-semibold">
        {detail.title}
      </h1>
      <h2>{detail.description}</h2>
      <div className="flex justify-between px-20 max-md:px-2 max-sm:flex-col gap-5 items-center">
        <div>
          <p className="mt-8 mb-2">tags: </p>
          <div className="flex gap-2 flex-wrap text-sm">
            {detail.tags?.map((tag) => (
              <span key={tag} className="bg-sky-600 text-white p-3 rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          <Image
            src={detail.user.profile_image}
            alt={detail.user.name}
            width={60}
            height={60}
            className="rounded-full object-cover"
          />
          <div>
            <p>{detail.user.name}</p>
            <p>{detail.published_at}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
