import { IoCarSportSharp } from "react-icons/io5";

export const Navbar = () => {
  return (
    <nav className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <IoCarSportSharp className="size-8 text-blue-500" />
        <h1 className="text-2xl font-bold tracking-tighter">CarCenter</h1>
      </div>
      <div>
        <h1></h1>
      </div>
      <div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full">Sign In</button>
      </div>
    </nav>
  );
};
