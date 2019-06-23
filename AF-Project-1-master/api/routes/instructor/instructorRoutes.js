const express = require("express");
const instructorRoutes = express.Router();

let Instructor = require("../../schema/instructor/Instructor");

// Defined store route
instructorRoutes.route("/add").post(function(req, res) {
  let instructor = new Instructor(req.body);
  admin
    .save()
    .then(instructor => {
      res.status(200).json({ instructor: "Instructor added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
instructorRoutes.route("/").get(function(req, res) {
  Instructor.find(function(err, instructor) {
    if (err) {
      console.log(err);
    } else {
      res.json(instructor);
    }
  });
});

// Defined edit route
instructorRoutes.route("/edit/:id").get(function(req, res) {
  let id = req.params.id;
  Instructor.findById(id, function(err, instructor) {
    res.json(instructor);
  });
});

//  Defined update route
instructorRoutes.route("/update/:id").post(function(req, res) {
  Instructor.findById(req.params.id, function(err, instructor) {
    if (!instructor) res.status(404).send("data is not found");
    else {
      instructor.iName = req.body.iName;
      instructor.iEmail = req.body.iEmail;
      instructor.iContact = req.body.iContact;
      instructor.iUsername = req.body.iUsername;
      instructor.iPassword = req.body.iPassword;
      instructor.iRePassword = req.body.iRePassword;
      instructor.iAddress = req.body.iAddress;
      instructor.iMessage = req.body.iMessage;

      instructor
        .save()
        .then(instructor => {
          res.json("Update complete");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
instructorRoutes.route("/delete/:id").get(function(req, res) {
  instructor.findByIdAndRemove({ _id: req.params.id }, function(
    err,
    instructor
  ) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = instructorRoutes;
