// phone
const validateDataMiddleware = (req, res, next) => {
  const { email, phone } = req.body;

  if (!email.includes("@")) {
    return res.status(400).json({ msg: "email is not valid!" });
  }

  if (!/^\(\+\d{1,3}\)\d{3}-\d{4}-\d{2}$/.test(phone)) {
    return res.status(400).json({ msg: "phone is not valid!" });
  }

  // not error
  next();
};

module.exports = validateDataMiddleware;
