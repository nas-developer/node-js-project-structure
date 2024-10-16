const userService = require("../services/userService");
const {
  sendSuccessResponse,
  sendErrorResponse,
} = require("../utils/responseUtils");

const getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return sendSuccessResponse(res, {
      message: "Users retrieved successfully",
      users: users,
    });
  } catch (error) {
    return sendErrorResponse(res, "An error occurred while retrieving users");
  }
};
module.exports = { getUsers };
