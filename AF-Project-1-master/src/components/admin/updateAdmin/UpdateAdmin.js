import React, { Component } from "react";
import axios from "axios";

export default class UpdateAdmin extends Component {
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

  componentDidMount() {
    axios
      .get("http://localhost:3000/admin/edit/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          aName: response.data.aName,
          aEmail: response.data.aEmail,
          aContact: response.data.aContact,
          aUsername: response.data.aUsername,
          aPassword: response.data.aPassword,
          aRePassword: response.data.aRePassword
        });
      })
      .catch(function(error) {
        console.log(error);
      });
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
      .post(
        "http://localhost:3000/admin/update/" + this.props.match.params.id,
        obj
      )
      .then(res => console.log(res.data));

    //this.props.history.push("/index");
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Update Admin details</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Admin Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.aName}
              onChange={this.onChangeaName}
            />
          </div>
          <div className="form-group">
            <label>Admin Email: </label>
            <input
              type="email"
              className="form-control"
              value={this.state.aEmail}
              onChange={this.onChangeaEmail}
            />
          </div>
          <div className="form-group">
            <label>Admin Contact Number: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.aContact}
              onChange={this.onChangeaContact}
            />
          </div>
          <div className="form-group">
            <label>Username: </label>
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
              value="Update admin"
              className="btn btn-primary"
            />
          </div>
          &nbsp;&nbsp;
          <div className="form-group">
            <input
              type="submit"
              value="Show all admins"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
