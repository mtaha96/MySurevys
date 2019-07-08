module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ eroor: "ypu must log in" });
  }
  next();
};
