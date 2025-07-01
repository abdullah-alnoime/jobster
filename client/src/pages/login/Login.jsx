import { useFormik } from "formik";
import { validationSchema } from "./validationSchema";
import { AlertCircle } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
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
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              formik.touched.email && formik.errors.email
                ? "border-red-500 bg-red-50"
                : "border-gray-300"
            }`}
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-600 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {formik.errors.email}
            </p>
          )}
        </div>
        <div className="grid gap-1.5">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Password<span className="text-red-500">*</span>
          </label>
          <input
            type="password"
            id="password"
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
              formik.touched.password && formik.errors.password
                ? "border-red-500 bg-red-50"
                : "border-gray-300"
            }`}
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-600 text-sm mt-1 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {formik.errors.password}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 cursor-pointer disabled:cursor-not-allowed transition-colors duration-200 font-medium flex items-center justify-center"
          disabled={!(formik.isValid && formik.dirty)}
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Logging in...
            </>
          ) : (
            <>Login</>
          )}
        </button>
        {error && (
          <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
            <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
            <p className="text-red-800">{error}</p>
          </div>
        )}
      </form>
    </section>
  );
};

export default Login;
