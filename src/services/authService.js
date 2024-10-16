const bcrypt = require('bcrypt');
const User = require('../models/userModel');

// JWT secret key (store this securely in environment variables)
const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Function to register a user
const registerUser = async (name, email, password) => {
  // Check if the user already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Create a new user instance
  const user = new User({
    name,
    email,
  });

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);
  user.password = hashedPassword;

  // Save the user to the database
  return await user.save();
};

// Function to login a user and return a JWT token
const loginUser = async (email, password) => {
  // Find user by email
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Check if the password is correct
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  // Generate JWT token
  const token = jwt.sign(
    { userId: user._id, email: user.email },
    JWT_SECRET,
    { expiresIn: "1h" } // Token will expire in 1 hour
  );

  return { token, user };
};

module.exports = { registerUser, loginUser };