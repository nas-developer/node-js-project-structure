const userService = require("../services/userService");
const emailService = require("../services/emailService");
const {
  sendBadRequestResponse,
  sendErrorResponse,
} = require("../utils/responseUtils");

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Call the service layer to register the user
    const newUser = await userService.registerUser(name, email, password);

    // Send welcome email after successful registration
    await emailService.sendEmail(
      email,
      "Welcome to Our Service",
      "welcomeEmail",
      { name }
    );

    return sendCreatedResponse(res, {
      message: "User registered successfully and email sent!",
      user: newUser,
    });
  } catch (error) {
    if (error.message === "User already exists") {
      return sendBadRequestResponse(res, error.message);
    }
    return sendErrorResponse(res, "An error occurred during user registration");
  }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Call the service layer to authenticate the user
        const { token, user } = await loginUser(email, password);

        // Send success response with JWT token
        return sendSuccessResponse(res, {
            message: 'Login successful',
            token,
            user: { id: user._id, name: user.name, email: user.email }
        });
    } catch (error) {
        // Send error response
        return sendBadRequestResponse(res, error.message);
    }
};

module.exports = { registerUser, loginUser };
