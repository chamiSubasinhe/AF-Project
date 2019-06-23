const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let assignmentSchema = new Schema({
  assignment_name: {
    type: String
  },

  course: {
    type: String
  },

  date: {
    type: Date
  }
});

module.exports = mongoose.model("assignmentSchema", assignmentSchema);
