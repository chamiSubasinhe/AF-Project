import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

class IMainPage extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <button
            type="button"
            className="btn btn-outline-success btn-lg btn-block"
          >
            <Link to={"/iNotification"}>Notification on Courses</Link>
          </button>
          <button type="button" className="btn btn-warning btn-lg btn-block">
            <Link to={"/iCreateExam"}>Create Exams</Link>
          </button>
          <button type="button" className="btn btn-warning btn-lg btn-block">
            <Link to={"/iEditViewExam"}>Edit Exams</Link>
          </button>
          <button type="button" className="btn btn-warning btn-lg btn-block">
            <Link to={"/iMarkExam"}>Mark Exams</Link>
          </button>
          <button type="button" className="btn btn-danger btn-lg btn-block">
            <Link to={"/iCreateAssignment"}>Create Assignments</Link>
          </button>
          <button type="button" className="btn btn-danger btn-lg btn-block">
            <Link to={"/iEditViewAssignment"}>Edit Assignments</Link>
          </button>
          <button type="button" className="btn btn-danger btn-lg btn-block">
            <Link to={"/iMarkAssignmen"}>Mark Assignments</Link>
          </button>
        </div>
      </BrowserRouter>
    );
  }
}

export default IMainPage;
