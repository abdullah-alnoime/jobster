import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4 w-full sm:w-auto">
      <NavLink
        to="/"
        className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded transition-colors duration-200"
      >
        Home
      </NavLink>
      <NavLink
        to="/dashboard/jobs"
        className="w-full text-center sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded transition-colors duration-200"
      >
        Jobs
      </NavLink>
      <NavLink
        to="/dashboard/stats"
        className="w-full text-center sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded transition-colors duration-200"
      >
        Stats
      </NavLink>
      <NavLink
        to="/dashboard/add"
        className="w-full text-center sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 rounded transition-colors duration-200"
      >
        Add Job
      </NavLink>
    </nav>
  );
};

export default Navbar;
