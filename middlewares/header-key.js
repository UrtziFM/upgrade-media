const headerKeyMiddleware = (req, res, next) => {
    const { secret } = req.headers;
  
    if (secret === process.env.SECRET_KEY) {
      return next();
    }
  
    const error = new Error('Missing secret credentials');
    error.status = 401;
    return next(error);
  };
  
  module.exports = {
    headerKeyMiddleware,
  };
  