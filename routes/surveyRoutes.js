const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const emailTemplate = require("../services/emailTemplates");
const Survey = mongoose.model("surveys");
module.exports = app => {
  app.get("/api/surveys/", requireLogin, async (req, res) => {
    console.log(req.user.id);
    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false
    });
    res.send(surveys);
  });

  app.get("/api/surveys/:surveyId/:choice", (req, res) => {
    res.send("Thanks for voting!");
  });
  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map(email => ({ email: email.trim(), responded: false })),
      dateSent: Date.now(),
      _user: req.user.id
    });
    const mailer = new Mailer(survey, emailTemplate(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credit -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });

  app.post("/api/surveys/webhooks", async (req, res) => {
    const events = _.map(req.body, event => {
      const p = new Path("/api/surveys/:surveyId/:choice");
      const match = p.test(new URL(event.url).pathname);
      if (match) {
        return {
          email: event.email,
          surveyId: match.surveyId,
          choice: match.choice
        };
      }
    });
    const compactEvents = _.compact(events);
    const uniqueEvents = _.uniqBy(compactEvents, "email", "surveyId");
    uniqueEvents.forEach(({ surveyId, email, choice }) => {
      const surveyFound = Survey.findOne({
        _id: surveyId,
        recipients: {
          $elemMatch: { email: email, responded: false }
        }
      });
      console.log(surveyId);
      console.log(surveyFound);
      Survey.updateOne(
        {
          _id: surveyId,
          recipients: {
            $elemMatch: { email: email, responded: false }
          }
        },
        {
          $inc: { [choice]: 1 },
          $set: { "recipients.$.responded": true }
        }
      ).exec();
    });
    res.send({});
  });
};
