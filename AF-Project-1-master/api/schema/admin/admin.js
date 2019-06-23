const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Admin = new Schema({
  aId: {
    type: Number,
    default: 001
  },
  aName: {
    type: String,
    default: "",
    required: true
  },
  aEmail: {
    type: String,
    default: "",
    required: true
  },
  aContact: {
    type: Number,
    default: "",
    required: true
  },
  aUsername: {
    type: String,
    default: "",
    required: true
  },
  aPassword: {
    type: String,
    default: "",
    required: true
  },
  aRePassword: {
    type: String,
    default: "",
    required: true
  }
});

module.exports = mongoose.model("Admin", Admin);
