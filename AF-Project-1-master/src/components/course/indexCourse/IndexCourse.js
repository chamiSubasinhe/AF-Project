import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";

export default class IndexCourse extends Component {
  constructor(props) {
    super(props);
    this.state = { course: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/course")
      .then(response => {
        this.setState({ course: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  tabRow() {
    return this.state.course.map(function(object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <h3 align="center">Course List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Enrollment Key</th>
              <th>Instructors</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
