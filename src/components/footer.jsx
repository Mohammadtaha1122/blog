import Image from "next/image";
import logo from "../../public/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-sky-100 pt-10 mt-15">
      <div className=" mx-auto px-6 flex max-md:flex-col justify-between items-center gap-8">
        <Link href={"/"}>
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>

        <ul className="flex gap-6 text-lg font-medium">
          <li>
            <Link href="/" className="hover:text-sky-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-sky-600 transition">
              Blog
            </Link>
          </li>
        </ul>

        <a
          href="https://github.com/Mohammadtaha1122"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 20 20"
            fill="black"
          >
            <path d="M10 0C4.48 0 0 4.59 0 10.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .07 1.52 1.06 1.52 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 10 4.84a9.3 9.3 0 0 1 2.5.34c1.91-1.34 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.05.36.32.68.94.68 1.91 0 1.38-.01 2.5-.01 2.84 0 .27.18.58.69.48A10.25 10.25 0 0 0 20 10.25C20 4.59 15.52 0 10 0z" />
          </svg>
        </a>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <p className="text-xl font-semibold mb-4">
          Subscribe to our newsletter
        </p>
        <div className="flex max-sm:flex-col gap-2">
          <input
            id="email"
            placeholder="Enter your email..."
            className="outline-none border focus:border-black transition-all ease-in border-gray-400 px-4 py-2 rounded-md w-64"
            type="email"
          />
          <button className="bg-sky-600 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-sky-700 transition">
            Subscribe
          </button>
        </div>
      </div>

      <p className="text-center mt-10 bg-blue-500 text-white py-4 text-sm">
        © 2025 MohammadTaha. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
