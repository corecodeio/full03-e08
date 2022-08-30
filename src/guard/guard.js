const Guard = require('../models/guard');

module.exports = async (req, res, next) => {
  // Guard.validUser ?

  let isValidUser = true;
  if (isValidUser) {
    req.person = {
      person: 1,
      name: 'Yosef',
      email: 'yosefmarr@gmail.com',
      password: '123',
    };
    return next();
  }
  return res.status(403).json({
    message: 'Unauthorized',
  });
};
