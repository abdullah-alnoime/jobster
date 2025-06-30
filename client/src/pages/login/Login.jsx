import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Login form submitted:", values);
    },
  });

  return (
    <section className="h-full grid items-center sm:grid-cols-4 lg:grid-cols-6">
      <form
        className="grid gap-3 sm:col-span-2 sm:col-start-2 lg:col-start-3"
        onSubmit={formik.handleSubmit}
      >
        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-gray-500 font-medium">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={`border outline-none rounded px-2 py-1 ${
              formik.touched.email && formik.errors.email
                ? "border-red-500 focus:border-red-500"
                : "border-gray-500 focus:border-red-500"
            } focus:caret-red-500`}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-500 text-sm">{formik.errors.email}</span>
          )}
        </div>
        <div className="grid gap-1.5">
          <label htmlFor="password" className="text-gray-500 font-medium">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className={`border outline-none rounded px-2 py-1 ${
              formik.touched.password && formik.errors.password
                ? "border-red-500 focus:border-red-500"
                : "border-gray-500 focus:border-red-500"
            } focus:caret-red-500`}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <span className="text-red-500 text-sm">
              {formik.errors.password}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 disabled:bg-gray-400"
          disabled={!(formik.isValid && formik.dirty)}
        >
          Login
        </button>
      </form>
    </section>
  );
};

export default Login;
