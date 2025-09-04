"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  isLoading && <p>loading...</p>;

  return (
    <div className="pt-20">
      <section>
        <h1 className="text-3xl font-medium text-center mb-4">welcom blog</h1>
        <h2 className="text-center">
          Here are different types of blogs to read.
        </h2>
      </section>
      <section className="grid grid-cols-3 gap-6 mt-15">
        {isLoading ? (
          <p className=" text-2xl text-center">loading...</p>
        ) : (
          blogs.map((blog) => (
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
                    className="bg-sky-600 text-white p-3 rounded-lg"
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
                  className="rounded-full object-cover"
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
    </div>
  );
};

export default Blog;
