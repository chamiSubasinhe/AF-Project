import React, { Component } from "react";
import axios from "axios";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.onChangeaName = this.onChangeaName.bind(this);
    this.onChangeaEmail = this.onChangeaEmail.bind(this);
    this.onChangeaContact = this.onChangeaContact.bind(this);
    this.onChangeaUsername = this.onChangeaUsername.bind(this);
    this.onChangeaPassword = this.onChangeaPassword.bind(this);
    this.onChangeaRePassword = this.onChangeaRePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      aName: "",
      aEmail: "",
      aContact: "",
      aUsername: "",
      aPassword: "",
      aRePassword: ""
    };
  }

  onChangeaName(e) {
    this.setState({
      aName: e.target.value
    });
  }

  onChangeaEmail(e) {
    this.setState({
      aEmail: e.target.value
    });
  }

  onChangeaContact(e) {
    this.setState({
      aContact: e.target.value
    });
  }

  onChangeaUsername(e) {
    this.setState({
      aUsername: e.target.value
    });
  }

  onChangeaPassword(e) {
    this.setState({
      aPassword: e.target.value
    });
  }

  onChangeaRePassword(e) {
    this.setState({
      aRePassword: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      aName: this.state.aName,
      aEmail: this.state.aEmail,
      aContact: this.state.aContact,
      aUsername: this.state.aUsername,
      aPassword: this.state.aPassword,
      aRePassword: this.state.aRePassword
    };
    axios
      .post("http://localhost:3000/student/add", obj)
      .then(res => console.log(res.data));

    this.setState({
      aName: "",
      aEmail: "",
      aContact: "",
      aUsername: "",
      aPassword: "",
      aRePassword: ""
    });
  }
  render() {
    return (
      <div style={{ width: 800 }}>
        <h3>Signup Student</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Student Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.aName}
              onChange={this.onChangeaName}
            />
          </div>
          <div className="form-group">
            <label>Student Email: </label>
            <input
              type="email"
              className="form-control"
              value={this.state.aEmail}
              onChange={this.onChangeaEmail}
            />
          </div>
          <div className="form-group">
            <label>Student Contact Number: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.aContact}
              onChange={this.onChangeaContact}
            />
          </div>
          <div className="form-group">
            <label>Username(Index): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.aUsername}
              onChange={this.onChangeaUsername}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.aPassword}
              onChange={this.onChangeaPassword}
            />
          </div>
          <div className="form-group">
            <label>Re-enter Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.aRePassword}
              onChange={this.onChangeaRePassword}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="SignUp student"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
