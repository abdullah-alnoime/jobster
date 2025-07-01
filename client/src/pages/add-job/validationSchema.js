import * as Yup from "yup";

export const validationSchema = Yup.object({
  company: Yup.string()
    .required("Company shouldn't be empty!")
    .min(2, "Company shouldn't be less than 2 chars!")
    .max(30, "Company shouldn't be over than 30 chars!"),
  position: Yup.string()
    .required("Position shouldn't be empty!")
    .min(2, "Position shouldn't be less than 2 chars!")
    .max(50, "Position shouldn't be over than 50 chars!"),
  status: Yup.string()
    .oneOf(["interview", "declined", "pending"], "Invalid status")
    .required("Status is required"),
  jobType: Yup.string()
    .oneOf(
      ["full-time", "part-time", "remote", "internship", "contract"],
      "Invalid job type"
    )
    .required("Job type is required"),
});
