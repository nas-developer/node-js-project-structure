const User = require('../models/userModel');

const getAllUsers = async () => {
  return await User.find();
};

module.exports = { getAllUsers };
