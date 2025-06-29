import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex items-center gap-2">
      <NavLink to="/" className="px-4 py-1.5">
        Home
      </NavLink>
      <NavLink to="/dashboard/jobs" className="px-4 py-1.5">
        Jobs
      </NavLink>
      <NavLink to="/dashboard/stats" className="px-4 py-1.5">
        Stats
      </NavLink>
      <NavLink to="/dashboard/add" className="px-4 py-1.5">
        Add job
      </NavLink>
    </nav>
  );
};

export default Navbar;
