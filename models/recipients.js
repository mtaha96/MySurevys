const mongoose = require("mongoose");
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  yes: { type: Boolean, default: false }
});

module.exports("surveys", recipientSchema);
