// middleware/auth.js
require('dotenv').config();

const authenticateToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const key = authHeader && authHeader.split(' ')[1];
  if (key == null) return res.sendStatus(401); // No token provided

  if (key !== process.env.MI3L_API_KEY) {
    return res.sendStatus(403); // Invalid token
  }

    next();
};

module.exports = authenticateToken;
