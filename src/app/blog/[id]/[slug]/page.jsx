"use client";

import axios from "axios";
import Image from "next/image";
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
    return <p className=" text-2xl text-center my-10">loading...</p>;

  return (
    <div>
      {detail.cover_image ? (
        <Image
          className="mx-auto w-1/2 mt-20"
          src={detail.cover_image}
          alt={detail.title}
          width={1000}
          height={100}
        />
      ) : (
        <Image
          className="mx-auto w-1/2 mt-20"
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
      <div className="flex justify-between px-20 items-center">
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
