const CustomError = require("./CustomError");

class Unauthorized extends CustomError {
  constructor(message, status, success) {
    super(message, success);
    this.status = 401;
  }
}

module.exports = Unauthorized;