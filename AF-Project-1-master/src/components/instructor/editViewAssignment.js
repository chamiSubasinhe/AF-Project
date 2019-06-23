import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Assignment = props => (
  <tr>
    <td>{props.newAssignment.assignment_name}</td>
    <td>{props.newAssignment.course}</td>
    <td>{props.newAssignment.date}</td>
    <td>
      <Link to={"/iEditAssignment/" + props.newAssignment._id}>
        Edit Due Date
      </Link>
    </td>
  </tr>
);

class iEditViewAssignmentPage extends Component {
  constructor(props) {
    super(props);
    this.state = { assignmentDB: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/instructor/assignment/")
      .then(response => {
        this.setState({ assignmentDB: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  displayList() {
    return this.state.assignmentDB.map(function(currentAssignmnet, i) {
      return <Assignment newAssignment={currentAssignmnet} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3
          align="center"
          className="font-weight-bolder text-danger"
          style={{ marginTop: 20 }}
        >
          Created Assignments
        </h3>
        <div
          className="container"
          style={{
            marginTop: 20,
            backgroundColor: "#B4CFEC"
          }}
        >
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Assignment Name</th>
                <th>Course</th>
                <th>Due Date</th>
                <th>Edit Due Date</th>
              </tr>
            </thead>
            <tbody>{this.displayList()}</tbody>
          </table>
        </div>

        <div className="container">
          <button type="button" className="btn btn-warning btn-sm btn-block">
            <Link to={"/iMain"}>Back To Instructor Home Page</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default iEditViewAssignmentPage;
