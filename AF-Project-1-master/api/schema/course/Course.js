const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Instructor = require("../instructor/Instructor");

// Define collection and schema for Business
let Course = new Schema({
  cId: {
    type: String,
    default: 001
  },
  cName: {
    type: String,
    default: "",
    required: true
  },
  cEnrollmentKey: {
    type: String,
    default: "",
    required: true
  },
  iName: [
    {
      type: Schema.Types.ObjectId,
      ref: "Instructor"
    }
  ],
  cStatus: {
    type: String,
    default: "",
    required: true
  }
});

module.exports = mongoose.model("Course", Course);
