import React, { Component } from "react";
import axios from "axios";

export default class UpdateInstructor extends Component {
  constructor(props) {
    super(props);
    this.onChangecId = this.onChangecId.bind(this);
    this.onChangecName = this.onChangecName.bind(this);
    this.onChangecEnrollmentKey = this.onChangecEnrollmentKey.bind(this);
    this.onChangeiName = this.onChangeiName.bind(this);
    this.onChangecStatus = this.onChangecStatus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      cId: "",
      cName: "",
      cEnrollmentKey: "",
      iName: "",
      cStatus: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "http://localhost:3000/instructor/edit/" + this.props.match.params.id
      )
      .then(response => {
        this.setState({
          cId: response.data.cId,
          cName: response.data.cName,
          cEnrollmentKey: response.data.cEnrollmentKey,
          iName: response.data.iName,
          cStatus: response.data.cStatus
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangecId(e) {
    this.setState({
      cId: e.target.value
    });
  }

  onChangecName(e) {
    this.setState({
      cName: e.target.value
    });
  }

  onChangecEnrollmentKey(e) {
    this.setState({
      cEnrollmentKey: e.target.value
    });
  }

  onChangeiName(e) {
    this.setState({
      iName: e.target.value
    });
  }

  onChangecStatus(e) {
    this.setState({
      cStatus: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      cId: this.state.cId,
      cName: this.state.cName,
      cEnrollmentKey: this.state.cEnrollmentKey,
      iName: this.state.iName,
      cStatus: this.state.cStatus
    };
    axios
      .post(
        "http://localhost:3000/course/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    //this.props.history.push("/index");
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Update course details</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Course Code: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.cId}
              onChange={this.onChangecId}
            />
          </div>
          <div className="form-group">
            <label>Course Name: </label>
            <input
              type="email"
              className="form-control"
              value={this.state.cName}
              onChange={this.onChangecName}
            />
          </div>
          <div className="form-group">
            <label>cEnrollment Key: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.cEnrollmentKey}
              onChange={this.onChangecEnrollmentKey}
            />
          </div>
          <div className="form-group">
            <label>Address: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.iAddress}
              onChange={this.onChangeiAddress}
            />
          </div>
          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.iUsername}
              onChange={this.onChangeiUsername}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.iPassword}
              onChange={this.onChangeiPassword}
            />
          </div>
          <div className="form-group">
            <label>Re-enter Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.iRePassword}
              onChange={this.onChangeiRePassword}
            />
          </div>
          <div className="form-group">
            <label>Message: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.iMessage}
              onChange={this.onChangeiMessage}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Add admin"
              className="btn btn-primary"
            />
          </div>
          &nbsp;&nbsp;
          <div className="form-group">
            <input
              type="submit"
              value="Show all admins"
              className="btn btn-primary"
              onClick={this.onUpdate}
            />
          </div>
        </form>
      </div>
    );
  }
}
