const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name should be provided'],
    minLength: [2, 'name should be more than 2 chars'],
    maxLength: [30, 'name should be less than 30 chars']
  },
  email: {
    type: String,
    required: [true, 'email should be provided'],
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'email should be in a valid format'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'password should be provided'],
    minLength: [8, 'password should be more than 8 chars']
  }
}, { timestamps: true });

userSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);
});
userSchema.methods.createToken = function () {
  const token = jwt.sign({ userId: this._id }, process.env.SECRET, { expiresIn: process.env.LIFETIME });
  return token;
};
userSchema.methods.verifyPassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model('user', userSchema);