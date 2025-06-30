import { Navbar } from "../navbar";

const Header = () => {
  return (
    <header className="px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white shadow rounded-b-md gap-4 sm:gap-0">
      <span className="text-xl sm:text-2xl font-bold text-gray-900">
        Job<span className="text-red-500">Track</span>
      </span>
      <Navbar />
    </header>
  );
};

export default Header;
