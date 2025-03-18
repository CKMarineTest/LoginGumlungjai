// backend/middleware/auth.middleware.js
const jwt = require('jsonwebtoken');

function checkAuthentication(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'No token provided!' });
  }

  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized!' });
    }
    req.user = decoded;
    next();
  });
}

module.exports = { checkAuthentication };  // ส่งออกอย่างถูกต้อง
