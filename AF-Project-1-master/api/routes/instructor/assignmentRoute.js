const express = require("express");
const assignmentRoutes = express.Router();

let Assignment = require("../../schema/instructor/assignment");

assignmentRoutes.route("/assignment/add").post(function(req, res) {
  let assignment = new Assignment(req.body);
  assignment
    .save()
    .then(admin => {
      res
        .status(200)
        .json({ assignment: "Data added to Assignment Schema successfully" });
    })
    .catch(err => {
      res.status(400).send("Unable to save to Assignment Schema");
    });
});

assignmentRoutes.route("/assignment").get(function(req, res) {
  Assignment.find(function(err, assignment) {
    if (err) {
      console.log(err);
    } else {
      res.json(assignment);
    }
  });
});

assignmentRoutes.route("/assignment/:id").get(function(req, res) {
  let id = req.params.id;
  Assignment.findById(id, function(err, assignment) {
    res.json(assignment);
  });
});

assignmentRoutes.route("/assignment/update/:id").post(function(req, res) {
  Assignment.findById(req.params.id, function(err, assignment) {
    if (!assignment) {
      res.status(404).send("Assignment data is not found");
    } else {
      assignment.assignmnet_name = req.body.assignmnet_name;
      assignment.course = req.body.course;
      assignment.date = req.body.date;

      assignment
        .save()
        .then(assignment => {
          res.json("Assignment Date updated");
        })
        .catch(err => {
          res.status(400).send("Assignment Date update not possible");
        });
    }
  });
});

module.exports = assignmentRoutes;
