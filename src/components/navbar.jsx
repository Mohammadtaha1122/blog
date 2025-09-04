import Link from "next/link";

const Navbar = () => {
  return (
    <div className="shadow-lg bg-white py-4 flex justify-between items-center px-20">
      <h1 className="text-4xl font-bold cursor-pointer">BLOG</h1>
      <div className="flex justify-between items-center border rounded-md border-gray-300 p-3">
        <input
          type="text"
          placeholder="search..."
          className="w-[500px] outline-none"
        />
        <button className="cursor-pointer">🔍</button>
      </div>
      <ul className="flex gap-10 text-2xl">
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/blog'}>Blog</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
