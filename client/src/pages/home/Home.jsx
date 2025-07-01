import { Link } from "react-router";
import hero from "../../assets/hero.svg";

const Home = () => {
  return (
    <section className="h-full grid gap-4 items-center md:grid-cols-2">
      <div className="grid gap-4">
        <h1 className="font-bold text-2xl xl:text-4xl">
          Job <span className="text-red-500">Tracking</span> App
        </h1>
        <p className="leading-relaxed text-gray-700 xl:w-3/4">
          Take control of your job search with our comprehensive tracking
          platform. Organize applications, monitor interview progress, and never
          miss a follow-up opportunity.
        </p>
        <div className="flex items-center gap-3 font-bold leading-relaxed">
          <Link
            to="/auth/login"
            className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/auth/register"
            className="border border-red-500 text-red-500 px-4 py-1.5 rounded hover:bg-red-50 transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src={hero}
          alt="Job Tracking Dashboard Interface"
          className="w-full max-w-lg"
        />
      </div>
    </section>
  );
};

export default Home;
