import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Exam = props => (
  <tr>
    <td>{props.newExam.exam_name}</td>
    <td>{props.newExam.course}</td>
    <td>{props.newExam.date}</td>
    <td>
      <Link to={"/iEditExam/" + props.newExam._id}>Edit Date</Link>
    </td>
  </tr>
);

class iEditViewExamPage extends Component {
  constructor(props) {
    super(props);
    this.state = { examDB: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/instructor/exam/")
      .then(response => {
        this.setState({ examDB: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  displayList() {
    return this.state.examDB.map(function(currentExam, i) {
      return <Exam newExam={currentExam} key={i} />;
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
          Created Exams
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
                <th>Exam Name</th>
                <th>Course</th>
                <th>Due Date</th>
                <th>Edit Date</th>
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

export default iEditViewExamPage;
