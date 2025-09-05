"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(9);

  const getData = async () => {
    try {
      const res = await axios.get("https://dev.to/api/articles");
      setBlogs(res.data);
    } catch (err) {
      console.log(err);
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
    <div className="pt-20 container">
      <section>
        <h1 className="text-3xl font-medium text-center mb-4">welcom blog</h1>
        <h2 className="text-center">
          Here are different types of blogs to read.
        </h2>
      </section>
      <section className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mt-15">
        {isLoading ? (
          <p className=" text-2xl text-center">loading...</p>
        ) : (
          blogs.slice(0, visibleCount).map((blog) => (
            <Link
              href={`blog/${blog.id}/${blog.slug}`}
              className="border hover:scale-105 transition-all ease-in flex flex-col shadow-lg cursor-pointer justify-between border-gray-300 p-4 rounded-lg"
              key={blog.id}
            >
              {blog.cover_image ? (
                <Image
                  src={blog.cover_image}
                  alt={blog.title}
                  width={500}
                  height={100}
                />
              ) : (
                <Image
                  src={blog.social_image}
                  alt={blog.title}
                  width={500}
                  height={100}
                />
              )}
              <h3 className="mb-4 text-2xl font-medium ">{blog.title}</h3>
              <h4 className="text-gray-600">{blog.description}</h4>
              <div className="flex gap-2 flex-wrap my-6 text-sm">
                {blog.tag_list.map((tag) => (
                  <span
                    key={tag}
                    className="bg-sky-600 text-white p-2 rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Image
                  src={blog.user.profile_image}
                  alt={blog.user.name}
                  width={60}
                  height={60}
                  className="rounded-full  object-cover"
                />
                <div>
                  <p>{blog.user.name}</p>
                  <p>{blog.published_at}</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </section>
      <button onClick={() => setVisibleCount(prev => prev + 9)} className="flex items-center gap-1 mx-auto my-20 cursor-pointer border-2 border-blue-500 rounded-lg p-3">
        <span className="text-blue-500 mb-0.5">load more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18px"
          height="18px"
          stroke="#0057f8"
          strokeWidth="5px"
          viewBox="0 -22.04 75.804 75.804"
        >
          <g
            id="Group_67"
            data-name="Group 67"
            transform="translate(-798.203 -587.815)"
          >
            <path
              id="Path_59"
              data-name="Path 59"
              d="M798.2,589.314a1.5,1.5,0,0,1,2.561-1.06l33.56,33.556a2.528,2.528,0,0,0,3.564,0l33.558-33.556a1.5,1.5,0,1,1,2.121,2.121l-33.558,33.557a5.53,5.53,0,0,1-7.807,0l-33.56-33.557A1.5,1.5,0,0,1,798.2,589.314Z"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Blog;
