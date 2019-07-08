module.exports = (req, res, next) => {
  if (req.user.credit < 1) {
    return res.status(403).send({ eroor: "You need to add credits" });
  }
  next();
};
