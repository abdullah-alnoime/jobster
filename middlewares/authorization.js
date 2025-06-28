const jwt = require("jsonwebtoken");
const { Unauthorized } = require("../errors");

const authorization = async (req, res, next) => {
  const authToken = req.headers.authorization;
  if (!authToken && !authToken.startsWith("Bearer ")) {
    throw new Unauthorized("you're not authorized to access this route!");
  }
  try {
    const token = jwt.verify(authToken.split(" ")[1]);
    if (!token) {
      throw new Unauthorized("you're not authorized to access this route!");
    }
    req.user = token;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authorization;
