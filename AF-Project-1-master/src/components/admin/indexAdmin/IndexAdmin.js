import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";
import AddAdmin from "../addAdmin/AddAdmin";
import ReactDOM from "react-dom";

export default class IndexAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = { admin: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/admin")
      .then(response => {
        this.setState({ admin: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  tabRow() {
    return this.state.admin.map(function(object, i) {
      return <TableRow obj={object} key={i} />;
    });
  }

  onSubBack() {
    ReactDOM.render(<AddAdmin />, document.getElementById("root"));
  }
  render() {
    return (
      <div>
        <h3 align="center">Admin List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact number</th>
              <th>Username</th>
              <th>Password</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
        <div className="form-group">
          <input
            type="submit"
            value="Back"
            className="btn btn-primary"
            onClick={this.onSubBack}
          />
        </div>
      </div>
    );
  }
}
