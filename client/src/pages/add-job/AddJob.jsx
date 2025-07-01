import { useState } from "react";
import { useFormik } from "formik";
import { Building2, Briefcase, AlertCircle, Plus } from "lucide-react";
import { validationSchema } from "./validationSchema";

const AddJob = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: {
      company: "",
      position: "",
      status: "pending",
      jobType: "full-time",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    },
  });
  return (
    <section className="min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4">
            <Plus className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Add New Job Application
          </h1>
          <p className="text-gray-600">
            Keep track of your job applications and interview progress
          </p>
        </div>
        <form
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
          onSubmit={formik.handleSubmit}
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Company Name<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  id="company"
                  placeholder="Enter company name"
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    formik.touched.company && formik.errors.company
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  {...formik.getFieldProps("company")}
                />
              </div>
              {formik.touched.company && formik.errors.company && (
                <p className="text-red-600 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {formik.errors.company}
                </p>
              )}
              <p className="text-gray-500 text-xs mt-1">2-30 characters</p>
            </div>
            <div>
              <label
                htmlFor="position"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Position Title<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  id="position"
                  placeholder="Enter position title"
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    formik.touched.position && formik.errors.position
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  {...formik.getFieldProps("position")}
                />
              </div>
              {formik.touched.position && formik.errors.position && (
                <p className="text-red-600 text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {formik.errors.position}
                </p>
              )}
              <p className="text-gray-500 text-xs mt-1">2-50 characters</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Application Status
                </label>
                <select
                  id="status"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer appearance-none bg-white transition-colors ${
                    formik.touched.status && formik.errors.status
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  {...formik.getFieldProps("status")}
                >
                  <option value="pending">Pending</option>
                  <option value="interview">Interview</option>
                  <option value="declined">Declined</option>
                </select>
                {formik.touched.status && formik.errors.status && (
                  <p className="text-red-600 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formik.errors.status}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="jobType"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Job Type
                </label>
                <select
                  id="jobType"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer appearance-none bg-white transition-colors ${
                    formik.touched.jobType && formik.errors.jobType
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                  {...formik.getFieldProps("jobType")}
                >
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="remote">Remote</option>
                  <option value="internship">Internship</option>
                  <option value="contract">Contract</option>
                </select>
                {formik.touched.jobType && formik.errors.jobType && (
                  <p className="text-red-600 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {formik.errors.jobType}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button
                type="submit"
                disabled={!(formik.isValid && formik.dirty)}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 cursor-pointer disabled:cursor-not-allowed transition-colors duration-200 font-medium flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Adding Job...
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5 mr-2" />
                    Add Job Application
                  </>
                )}
              </button>
              <button
                type="reset"
                onClick={() => {
                  formik.resetForm();
                }}
                className="flex-1 sm:flex-none bg-gray-100 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium cursor-pointer"
              >
                Reset Form
              </button>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Fields marked with <span className="text-red-500">*</span> are
              required. All data will be validated before submission.
            </p>
          </div>
          {error && (
            <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
              <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
              <p className="text-red-800">{error}</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default AddJob;
