const express = require("express");
const adminRoutes = express.Router();

let Admin = require("../../schema/admin/admin");

// Defined store route
adminRoutes.route("/add").post(function(req, res) {
  let admin = new Admin(req.body);
  admin
    .save()
    .then(admin => {
      res.status(200).json({ admin: "Admin added successfully" });
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
adminRoutes.route("/").get(function(req, res) {
  Admin.find(function(err, admin) {
    if (err) {
      console.log(err);
    } else {
      res.json(admin);
    }
  });
});

// Defined edit route
adminRoutes.route("/edit/:id").get(function(req, res) {
  let id = req.params.id;
  Admin.findById(id, function(err, admin) {
    res.json(admin);
  });
});

//  Defined update route
adminRoutes.route("/update/:id").post(function(req, res) {
  Admin.findById(req.params.id, function(err, admin) {
    if (!admin) res.status(404).send("data is not found");
    else {
      admin.aName = req.body.aName;
      admin.aEmail = req.body.aEmail;
      admin.aContact = req.body.aContact;
      admin.aUsername = req.body.aUsername;
      admin.aPassword = req.body.aPassword;
      admin.aRePassword = req.body.aRePassword;

      admin
        .save()
        .then(admin => {
          res.json("Update complete");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
adminRoutes.route("/delete/:id").get(function(req, res) {
  Admin.findByIdAndRemove({ _id: req.params.id }, function(err, admin) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = adminRoutes;
