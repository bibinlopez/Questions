const errorHandler = (err, req, res, next) => {
  return res
    .status(500)
    .json({ success: false, msg: err.message || 'something went wrong' });
};

module.exports = errorHandler;
