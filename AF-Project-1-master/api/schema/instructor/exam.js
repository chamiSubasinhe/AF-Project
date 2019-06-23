const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let examSchema = new Schema({
  exam_name: {
    type: String
  },

  course: {
    type: String
  },

  date: {
    type: Date
  }
});

module.exports = mongoose.model("examSchema", examSchema);
