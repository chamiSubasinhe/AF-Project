import React, { Component } from "react";
import UpdateAdmin from "../updateCourse/UpdateCourse";
import axios from "axios";
import ReactDOM from "react-dom";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios
      .get("http://localhost:3000/course/delete/" + this.props.obj._id)
      .then(console.log("Deleted"))
      .catch(err => console.log(err));
  }

  update() {
    ReactDOM.render(<UpdateAdmin />, document.getElementById("root"));
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.cId}</td>
        <td>{this.props.obj.cName}</td>
        <td>{this.props.obj.cEnrollmentKey}</td>
        <td>{this.props.obj.iName}</td>
        <td>{this.props.obj.cStatus}</td>
        <td>
          {/* <BrowserRouter>
            {" "}
            <Link
              to={"/edit/" + this.props.obj._id}
              className="btn btn-primary"
            >
              Edit
            </Link>
          </BrowserRouter> */}
          <button onClick={this.update} className="btn btn-warning">
            Edit
          </button>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
