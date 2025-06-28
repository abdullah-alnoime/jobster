const Job = require("../models/job");
const { NotFound } = require("../errors");

const getJobs = async (req, res, next) => {
  const { userId } = req.user;
  try {
    const jobs = await Job.find({ createdBy: userId }).sort("updatedAt");
    res.status(200).json({
      success: true,
      msg: "jobs have been fetched successfully!",
      jobs,
      hits: jobs.length,
    });
  } catch (err) {
    next(err);
  }
};
const getJob = async (req, res, next) => {
  const { id: jobId } = req.params;
  const { userId } = req.user;
  try {
    const job = await Job.findOne({ _id: jobId, createdBy: userId });
    if (!job) {
      throw new NotFound(`there is no job with id: ${jobId}`);
    }
    res.status(200).json({
      success: true,
      msg: "job has been fetched successfully!",
      job,
    });
  } catch (err) {
    next(err);
  }
};
const createJob = async (req, res, next) => {
  const { userId } = req.user;
  try {
    await Job.create({ ...req.body, createdBy: userId });
    res.status(201).json({
      success: true,
      msg: "the job has been created successfully!",
    });
  } catch (err) {
    next(err);
  }
};
const updateJob = async (req, res, next) => {
  const { id: jobId } = req.params;
  const { userId } = req.user;
  try {
    const updatedJob = await Job.findOneAndUpdate(
      { _id: jobId, createdBy: userId },
      { ...req.body },
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updateJob) {
      throw new NotFound(`there is no job with id: ${jobId}`);
    }
    res.status(201).json({
      success: true,
      msg: "the job has been updated successfully!",
    });
  } catch (err) {
    next(err);
  }
};
const deleteJob = async (req, res, next) => {
  const { id: jobId } = req.params;
  const { userId } = req.user;
  try {
    const deletedJob = await Job.findOneAndDelete({
      _id: jobId,
      createdBy: userId,
    });
    if (!deletedJob) {
      throw new NotFound(`there is no job with id: ${jobId}`);
    }
    res.status(201).json({
      success: true,
      msg: "the job has been deleted successfully!",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
};
