const User = require("../models/user");
const { Unauthorized } = require("../errors");

const register = async (req, res, next) => {
  try {
    const user = await User.create({ ...req.body });
    const token = user.createToken();
    res.status(201).json({
      msg: "user has been created successfully!",
      success: true,
      token,
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Unauthorized("this email does not exist");
    }
    const isCorrect = await user.verifyPassword(password);
    if (!isCorrect) {
      throw new Unauthorized("this password is not correct");
    }
    const token = user.createToken();
    res.status(200).json({
      msg: "user has been logged in successfully!",
      success: true,
      token,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };
