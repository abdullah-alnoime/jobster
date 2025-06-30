import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const { confirmPassword, ...submitData } = values;
      console.log("Register form submitted:", submitData);
    },
  });

  return (
    <section className="h-full grid items-center sm:grid-cols-4 lg:grid-cols-6">
      <form
        className="grid gap-3 sm:col-span-2 sm:col-start-2 lg:col-start-3"
        onSubmit={formik.handleSubmit}
      >
        <div className="grid gap-1.5">
          <label htmlFor="name" className="text-gray-500 font-medium">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={`border outline-none rounded px-2 py-1 ${
              formik.touched.name && formik.errors.name
                ? "border-red-500 focus:border-red-500"
                : "border-gray-500 focus:border-red-500"
            } focus:caret-red-500`}
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <span className="text-red-500 text-sm">{formik.errors.name}</span>
          )}
        </div>
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
        <div className="grid gap-1.5">
          <label
            htmlFor="confirmPassword"
            className="text-gray-500 font-medium"
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className={`border outline-none rounded px-2 py-1 ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? "border-red-500 focus:border-red-500"
                : "border-gray-500 focus:border-red-500"
            } focus:caret-red-500`}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <span className="text-red-500 text-sm">
              {formik.errors.confirmPassword}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 disabled:bg-gray-400"
          disabled={!(formik.isValid && formik.dirty)}
        >
          Register
        </button>
      </form>
    </section>
  );
};

export default Register;
