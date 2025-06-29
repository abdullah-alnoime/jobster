import { Navbar } from "../navbar";

const Header = () => {
  return (
    <header className="px-6 py-3 flex justify-between items-center bg-slate-100">
      <span>logo</span>
      <Navbar />
    </header>
  );
};

export default Header;
