// 200: OK - Standard success response
const sendSuccessResponse = (res, data) => {
  res.status(200).json(data);
};

// 201: Created - Successful creation of resource
const sendCreatedResponse = (res, data) => {
  res.status(201).json(data);
};

// 400: Bad Request - Client-side error (e.g., validation failed)
const sendBadRequestResponse = (res, message) => {
  res.status(400).json({ error: message });
};

// 401: Unauthorized - Authentication failed or required
const sendUnauthorizedResponse = (res, message) => {
  res.status(401).json({ error: message });
};

// 403: Forbidden - Client does not have permission to access the resource
const sendForbiddenResponse = (res, message) => {
res.status(403).json({ error: message });
};

// 404: Not Found - Resource not found
const sendNotFoundResponse = (res, message) => {
  res.status(404).json({ error: message });
};

// 409: Conflict - Resource conflict (e.g., duplicate record)
const sendConflictResponse = (res, message) => {
  res.status(409).json({ error: message });
};

// 500: Internal Server Error - General server-side error
const sendErrorResponse = (res, message) => {
  res.status(500).json({ error: message });
};

module.exports = {
  sendSuccessResponse,
  sendCreatedResponse,
  sendBadRequestResponse,
  sendUnauthorizedResponse,
  sendForbiddenResponse,
  sendNotFoundResponse,
  sendConflictResponse,
  sendErrorResponse,
};
