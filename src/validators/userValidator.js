const { body, validationResult } = require('express-validator');

const userValidator = [
    body('email').isEmail().withMessage('Invalid email address'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
module.exports = userValidator;
