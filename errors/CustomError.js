class CustomError extends Error {
  constructor(message, status, success) {
    super(message);
    this.status = status;
    this.success = false;
  }
};

module.exports = CustomError;