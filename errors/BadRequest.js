const CustomError = require("./CustomError");

class BadRequest extends CustomError {
  constructor(message, status, success) {
    super(message, success);
    this.status = 400;
  }
}

module.exports = BadRequest;