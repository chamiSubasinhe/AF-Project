const express = require("express");
const examRoutes = express.Router();

let Exam = require("../../schema/instructor/exam");

examRoutes.route("/exam/add").post(function(req, res) {
  let exam = new Exam(req.body);
  exam
    .save()
    .then(admin => {
      res.status(200).json({ exam: "Data added to Exam Schema successfully" });
    })
    .catch(err => {
      res.status(400).send("Unable to save to Exam Schema");
    });
});

examRoutes.route("/exam").get(function(req, res) {
  Exam.find(function(err, exam) {
    if (err) {
      console.log(err);
    } else {
      res.json(exam);
    }
  });
});

examRoutes.route("/exam/:id").get(function(req, res) {
  let id = req.params.id;
  Exam.findById(id, function(err, exam) {
    res.json(exam);
  });
});

examRoutes.route("/exam/update/:id").post(function(req, res) {
  Exam.findById(req.params.id, function(err, exam) {
    if (!exam) {
      res.status(404).send("Exam data is not found");
    } else {
      exam.exam_name = req.body.exam_name;
      exam.course = req.body.course;
      exam.date = req.body.date;

      exam
        .save()
        .then(exam => {
          res.json("Exam Date updated");
        })
        .catch(err => {
          res.status(400).send("Exam Date update not possible");
        });
    }
  });
});

module.exports = examRoutes;
