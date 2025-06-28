const handleError = (err, req, res, next) => {
  let customError = {
    status: err.status || 500,
    message: err.message || "Something went wrong try again later",
    success: err.success || false,
  };
  if (err.name === "ValidationError") {
    customError.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");
    customError.status = 400;
  }
  if (err.code && err.code === 11000) {
    customError.message = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.status = 400;
  }
  if (err.name === "CastError") {
    console.log(err);
    customError.message = `there is no job with id: ${err.value._id}`;
    customError.status = 404;
  }
  return res
    .status(customError.status)
    .json({ msg: customError.message, success: customError.success });
};

module.exports = handleError;
