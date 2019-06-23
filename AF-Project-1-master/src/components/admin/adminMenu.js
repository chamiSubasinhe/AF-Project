import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Link } from "react-router-dom";
import ReactDOM from "react-dom";

import AddAdmin from "./addAdmin/AddAdmin";
import AddInstructor from "../instructor/addInstructor/AddInstructor";
import AddCourse from "../course/addCourse/AddCourse";
import AllStudents from "../student/AllStudenets";

export default class AdminMenu extends Component {
  onSubAdmin() {
    ReactDOM.render(<AddAdmin />, document.getElementById("root"));
  }

  onSubInstructor() {
    ReactDOM.render(<AddInstructor />, document.getElementById("root"));
  }

  onSubCourse() {
    ReactDOM.render(<AddCourse />, document.getElementById("root"));
  }

  onSubStudent() {
    ReactDOM.render(<AllStudents />, document.getElementById("root"));
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <img
            src="data:image/jpeg;base64,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"
            height="80"
            width="80"
          />
          <Link to={"/"} className="navbar-brand">
            <b>
              <p>Welcome to the University of Information Technology</p>
            </b>
          </Link>
          <br />
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          />
        </nav>
        <br />
        <br />
        <table class="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Admins</th>
              <th scope="col">Instructors</th>
              <th scope="col">Courses</th>
              <th scope="col">Students</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Add Admins"
                    className="btn btn-success"
                    onClick={this.onSubAdmin}
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Add Instructors"
                    className="btn btn-success"
                    onClick={this.onSubInstructor}
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Add Courses"
                    className="btn btn-success"
                    onClick={this.onSubCourse}
                  />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Show all Students"
                    className="btn btn-success"
                    onClick={this.onSubStudent}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
