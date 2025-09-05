"use client";

import Image from "next/image";
import blog from "../../public/blog.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

export default function Home() {
  const [recentArticles, setRecentArticles] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://dev.to/api/articles/?per_page=5");
        setRecentArticles(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <>
      <div className="bg-blue-400">
        <section className="flex container justify-between items-center pt-5 py-5 mb-15">
          <p className="w-[700px] leading-10 text-2xl text-white">
            Welcome to my blog platform 🚀 Here you can discover the latest
            articles from developers around the world. Explore tutorials, coding
            tips, and insights shared by real devs on Dev.to API. Stay updated
            with trending topics in JavaScript, React, Next.js, and more.
          </p>
          <Image src={blog} alt="home img" width={500} height={500} />
        </section>
      </div>
      <div className="container">
        <section>
          <h2 className="text-2xl font-semibold">Recent articles:</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 8000 }}
            slidesPerView={2}
            className="flex overflow-scroll mt-6 gap-6"
          >
            {recentArticles.map((item) => (
              <SwiperSlide key={item.id}>
                <Link href={`/blog/${item.id}/${item.slug}`}>
                  {item.cover_image ? (
                    <Image
                      className=" mx-auto rounded-2xl"
                      src={item.cover_image}
                      alt={item.title}
                      width={500}
                      height={100}
                    />
                  ) : (
                    <Image
                      className=" rounded-2xl"
                      src={item.social_image}
                      alt={item.title}
                      width={500}
                      height={100}
                    />
                  )}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </div>
    </>
  );
}
