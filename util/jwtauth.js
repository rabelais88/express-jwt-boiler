const ENV = require('dotenv').config().parsed;
const jwt = require('jsonwebtoken');

exports.jwtAuth = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new Error('not authenticated');
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(' ')[1];
  const decodedToken = jwt.verify(token, ENV.JWTKEY);
  if (!decodedToken) {
    const error = new Error('not authenticated');
    error.statusCode = 401;
    throw error;
  }
  req.decodedToken = decodedToken;
  next();
};

exports.createToken = (userInfo) => {
  return jwt.sign({ ...userInfo }, ENV.JWTKEY, { expiresIn: '10m' });
};
