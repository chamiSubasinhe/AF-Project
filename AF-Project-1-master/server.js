const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 3000;
const cors = require("cors");
const mongoose = require("mongoose");
const adminRoutes = require("./api/routes/admin/adminRoutes");
const instructorRoutes = require("./api/routes/instructor/instructorRoutes");
const courseRoutes = require("./api/routes/course/courseRoutes");

//insrtuctor routes
const examRoutes = require("./api/routes/instructor/examRoute");
const assignmentRoutes = require("./api/routes/instructor/assignmentRoute");
//--------------------------------------

//Student routes
const studentRoutes = require("./api/routes/student/studentRoutes");
//
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/afproject", { useNewUrlParser: true })
  .then(
    () => {
      console.log("Database is connected");
    },
    err => {
      console.log("Can not connect to the database" + err);
    }
  );

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/admin", adminRoutes);
app.use("/instructor", instructorRoutes);
app.use("/course", courseRoutes);

////insrtuctor
app.use("/instructor", examRoutes);
app.use("/instructor", assignmentRoutes);
///============

////Student
app.use("/student", studentRoutes);
///============

app.listen(PORT, function() {
  console.log("Server is running on Port:", PORT);
});
