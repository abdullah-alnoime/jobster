const Login = () => {
  return (
    <section className="h-full grid items-center sm:grid-cols-4 lg:grid-cols-6">
      <form className="grid gap-3 sm:col-span-2 sm:col-start-2 lg:col-start-3">
        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-gray-500 font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border outline-none border-gray-500 focus:border-red-500 focus:caret-red-500 rounded px-2 py-1"
            required
          />
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="password" className="text-gray-500 font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="border outline-none border-gray-500 focus:border-red-500 focus:caret-red-500 rounded px-2 py-1"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-1.5 rounded"
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
