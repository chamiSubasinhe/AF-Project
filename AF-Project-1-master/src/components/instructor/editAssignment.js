import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class iEditAssignmentPage extends Component {
  constructor(props) {
    super(props);

    this.onchangeName = this.onchangeName.bind(this);
    this.onChangeCourse = this.onChangeCourse.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      assignment_name: "",
      course: "",
      date: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:3000/instructor/assignment/" +
          this.props.match.params.id
      )
      .then(response => {
        this.setState({
          assignment_name: response.data.assignment_name,
          course: response.data.course,
          date: response.data.date
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onchangeName(e) {
    this.setState({
      exam_name: e.target.value
    });
  }

  onChangeCourse(e) {
    this.setState({
      course: e.target.value
    });
  }

  onChangeDate(e) {
    this.setState({
      date: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form Updated: `);
    console.log(`Assignmnet Name: ${this.state.assignment_name}`);
    console.log(`Course: ${this.state.course} `);
    console.log(`Date: ${this.state.date}`);

    const obj = {
      assignment_name: this.state.assignment_name,
      course: this.state.course,
      date: this.state.date
    };

    axios
      .post(
        "http://localhost:3000/instructor/assignment/update/" +
          this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    alert("Assignment Due Date is Updated and Students will be notified.");

    this.props.history.push("/iEditViewAssignment");

    this.setState({
      assignment_name: "",
      course: "",
      date: ""
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
          Update Due Date
        </h3>

        <div
          className="container"
          style={{
            marginTop: 20,
            backgroundColor: "#B4CFEC"
          }}
        >
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <lable>Assignment Name : </lable>
              <input
                type="text"
                className="form-control"
                value={this.state.assignment_name}
                onChange={this.onchangeName}
                readOnly
              />
            </div>

            <div className="form-group">
              <label>Course : </label>
              <select
                className="form-control"
                onChange={this.onChangeCourse}
                value={this.state.course}
                disabled
              >
                <option value="SE">SE</option>
                <option value="SEPQM">SEPQM</option>
              </select>
            </div>

            <div className="form-group">
              <lable>Due Date : </lable>
              <input
                type="date"
                className="form-control"
                value={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>

            <div className="form-group">
              <input
                type="submit"
                value="Edit Due Date"
                className="btn btn-primary"
              />
            </div>
          </form>
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

export default iEditAssignmentPage;
