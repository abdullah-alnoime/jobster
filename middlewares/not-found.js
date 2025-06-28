const notFound = (req, res, next) => {
  res.status(404).send('this page is not found!')
};

module.exports = notFound;