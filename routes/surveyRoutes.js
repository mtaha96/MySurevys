const passport = require("passport");
const keys = require("../config/key");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "here is your money",
      source: req.body.id
    });
    req.user.credit += 5;
    const user = await req.user.save();
    res.send(user);
  });
};
