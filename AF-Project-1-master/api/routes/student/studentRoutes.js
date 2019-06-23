const express = require("express");
const studentRoutes = express.Router();

let Student = require("../../schema/student/student");

// Defined store route
studentRoutes.route("/add").post(function(req, res) {
  let student = new Student(req.body);
  student
    .save()
    .then(student => {
      res.status(200).json({ student: "student added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = studentRoutes;
