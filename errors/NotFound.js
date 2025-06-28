const CustomError = require("./CustomError");

class NotFound extends CustomError {
  constructor(message, status, success) {
    super(message, success);
    this.status = 404;
  }
}

module.exports = NotFound;