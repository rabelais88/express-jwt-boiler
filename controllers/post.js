exports.postArticle = (req, res, next) => {
  // const authHeader = req.get('Authorization');
  // if (!authHeader) {
  //   const error = new Error('not authenticated');
  //   error.statusCode = 401;
  //   throw error;
  // }
  // const token = authHeader.split(' ')[1];
  // const decodedToken = jwt.verify(token, ENV.JWTKEY);
  // if (!decodedToken) {
  //   const error = new Error('not authenticated');
  //   error.statusCode = 401;
  //   throw error;
  // }
  res.status(200).json({ ...req.decodedToken });
};
