module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).sebd({ eroor: "ypu must log in" });
  }
  next();
};
