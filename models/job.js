const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "company shouldn't be empty!"],
      minLength: [2, "company shouldn't be less than 2 chars!"],
      maxLength: [30, "company shouldn't be over than 30 chars!"],
    },
    position: {
      type: String,
      required: [true, "position shouldn't be empty!"],
      minLength: [2, "position shouldn't be less than 2 chars!"],
      maxLength: [50, "position shouldn't be over than 50 chars!"],
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "internship", "contract"],
      default: "full-time",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "creator user shouldn't be empty!"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("job", jobSchema);
