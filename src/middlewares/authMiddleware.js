const jwt = require("jsonwebtoken");
const { sendUnauthorizedResponse } = require("../utils/responseUtils.js");

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

const authenticateJWT = (req, res, next) => {
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  if (!token) {
    return sendUnauthorizedResponse(res, "Access denied, no token provided");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return sendForbiddenResponse(res, "Invalid or expired token");
  }
};

module.exports = authenticateJWT;
