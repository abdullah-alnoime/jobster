import * as Yup from "yup";

export const validationSchema = Yup.object({
  company: Yup.string()
    .min(2, "Company must be at least 2 characters")
    .max(30, "Company must be less than 30 characters"),
  position: Yup.string()
    .min(2, "Position must be at least 2 characters")
    .max(50, "Position must be less than 50 characters"),
  status: Yup.string().oneOf(
    ["", "interview", "declined", "pending"],
    "Invalid status"
  ),
  jobType: Yup.string().oneOf(
    ["", "full-time", "part-time", "remote", "internship", "contract"],
    "Invalid job type"
  ),
});
