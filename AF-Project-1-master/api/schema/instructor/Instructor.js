const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Instructor = new Schema({
  iId: {
    type: Number,
    default: 001
  },
  iName: {
    type: String,
    default: "",
    required: true
  },
  iEmail: {
    type: String,
    default: "",
    required: true
  },
  iContact: {
    type: Number,
    default: "",
    required: true
  },
  iAddress: {
    type: String,
    default: "",
    required: true
  },
  iUsername: {
    type: String,
    default: "",
    required: true
  },
  iPassword: {
    type: String,
    default: "",
    required: true
  },
  iRePassword: {
    type: String,
    default: "",
    required: true
  },
  iMessage: {
    type: String,
    default: "",
    required: true
  }
});

module.exports = mongoose.model("Instructor", Instructor);
