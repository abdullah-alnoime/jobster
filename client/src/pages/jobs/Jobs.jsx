import { useState } from "react";
import { Briefcase, Building2, Filter, Search } from "lucide-react";
import { getStatusColor, getJobTypeIcon } from "../../utils/jobs";
import { validationSchema } from "./validationSchema";
import { useFormik } from "formik";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: {
      company: "",
      position: "",
      status: "",
      jobType: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      // fetching data goes here
    },
  });
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <section className="h-full bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Job Applications
          </h1>
          <p className="text-gray-600">
            Track and manage your job applications
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company name..."
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    formik.touched.company && formik.errors.company
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  value={formik.values.company}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.company && formik.errors.company && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.company}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="position"
                  placeholder="Position title..."
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    formik.touched.position && formik.errors.position
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  value={formik.values.position}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.position && formik.errors.position && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.position}
                  </p>
                )}
              </div>
              <div>
                <select
                  name="status"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white ${
                    formik.touched.status && formik.errors.status
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  value={formik.values.status}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">All Status</option>
                  <option value="pending">Pending</option>
                  <option value="interview">Interview</option>
                  <option value="declined">Declined</option>
                </select>
                {formik.touched.status && formik.errors.status && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.status}
                  </p>
                )}
              </div>
              <div>
                <select
                  name="jobType"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white ${
                    formik.touched.jobType && formik.errors.jobType
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  value={formik.values.jobType}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">All Types</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="remote">Remote</option>
                  <option value="internship">Internship</option>
                  <option value="contract">Contract</option>
                </select>
                {formik.touched.jobType && formik.errors.jobType && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.jobType}
                  </p>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors duration-200 font-medium flex items-center justify-center"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    formik.resetForm();
                  }}
                  className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  title="Clear filters"
                >
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
        </div>
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <p className="text-red-800">Error: {error}</p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-2">
                    <Building2 className="w-5 h-5 text-gray-600" />
                    <h3 className="font-semibold text-gray-900 truncate">
                      {job.company}
                    </h3>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                      job.status
                    )}`}
                  >
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                  </span>
                </div>
                <h4 className="text-lg font-medium text-gray-800 mb-3 line-clamp-2">
                  {job.position}
                </h4>
                <div className="flex items-center space-x-2 text-gray-600">
                  {getJobTypeIcon(job.jobType)}
                  <span className="text-sm capitalize">
                    {job.jobType.replace("-", " ")}
                  </span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                {loading ? "Searching jobs..." : "No jobs found"}
              </h3>
              <p className="text-gray-600">
                {loading
                  ? "Please wait while we search for jobs."
                  : "Try adjusting your search criteria."}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Jobs;
