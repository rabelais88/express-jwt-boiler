module.exports = (err, req, res, next) => {
  if (err) {
    if (!err.statusCode) err.statusCode = 500;
    if (!err.message) err.message = 'no message';
    res.status(err.statusCode).json({ message: err.message });
  } else {
    res.status(500).json({ message: 'uncaught error' });
  }
};
