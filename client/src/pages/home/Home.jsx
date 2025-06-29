import { Link } from "react-router";

const Home = () => {
  return (
    <section className="h-full grid items-center sm:grid-cols-6">
      <div className="grid gap-4 sm:col-span-4 lg:col-span-3 xl:col-span-2">
        <h1 className="font-bold text-2xl xl:text-3xl">
          Job <span className="text-red-500">Tracking</span> App
        </h1>
        <p className="leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
          perspiciatis explicabo est? Nihil, ab quas. Nihil, nobis assumenda
          exercitationem dicta sint dolorem.
        </p>
        <div className="flex items-center gap-3 font-bold leading-relaxed">
          <Link
            to="/auth/login"
            className="bg-red-500 text-white px-4 py-1.5 rounded"
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className="border border-red-500 text-red-500 px-4 py-1.5 rounded"
          >
            Register
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
