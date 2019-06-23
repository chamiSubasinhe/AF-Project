import React, { Component } from "react";
import ReactDOM from "react-dom";
import AdminMenu from "./adminMenu";
import IMainPage from "../instructor/main";
//import StudentMenu from "../student/studentMenu";
import SignUp from "../student/Signup";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  // onSubmit(e) {
  //   ReactDOM.render(<AddAdmin />, document.getElementById("root"));
  // }

  onLogin() {
    const username = this.refs.username.value;
    const password = this.refs.password.value;

    if (username === "sasini" && password === "sasini") {
      ReactDOM.render(<AdminMenu />, document.getElementById("root"));
    } else if (username === "chamara" && password === "chamara123") {
      ReactDOM.render(<AdminMenu />, document.getElementById("root"));
    } else if (username === "s.chinthaka" && password === "chinthaka96") {
      ReactDOM.render(<IMainPage />, document.getElementById("root"));
    } else if (username === "chami" && password === "chami") {
      //ReactDOM.render(<StudentMenu />, document.getElementById("root"));
      ReactDOM.render(<SignUp />, document.getElementById("root"));
    } else if (username === "" && password === "") {
      alert("Fields cannot be empty");
    } else {
      alert("You are not a user");
    }
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Login to continue</h3>
        <form onSubmit={this.onLogin}>
          <div className="form-group">
            <label>Username : </label>
            <input type="text" className="form-control" ref="username" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" ref="password" />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Login"
              className="btn btn-primary"
              onSubmit={this.onSubmit}
            />
          </div>

          {/* <br />
          <br />
          <p>
            Fogotten your password?? Enter your email and we'll sent you a
            code..
          </p>
          <div className="form-group">
            <label>Email :</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Send me a code"
              className="btn btn-primary"
            />
          </div> */}
        </form>
      </div>
    );
  }
}
