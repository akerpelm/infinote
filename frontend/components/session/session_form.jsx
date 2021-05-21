import React, { Component } from "react";
import { Link } from "react-router-dom";
import SessionFormDemo from "../session/session_form_demo";

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/notes"));
  }

  handleChange(field) {
    return (e) =>
      this.setState({
        [field]: e.target.value,
      });
  }
  renderErrors() {
    return (
      <ul className="error-ul">
        {this.props.errors.map((error, i) => (
          <li className="error-li" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  componentWillUnmount() {
    this.props.removeErrors();
  }
  render() {
    let redirectLogin = (
      <>
        <p className="redirect-login">
          Already have an account?
          <br />
          <Link
            style={{ color: "Black" }}
            className="redirect-login"
            to="/login"
          >
            Sign in
          </Link>
        </p>
      </>
    );
    let redirectSignup = (
      <>
        <p className="redirect-login">
          Don't have an account?
          <br />
          <Link style={{color: "Black"}} className="redirect-login" to="/register">
            Create account
          </Link>
        </p>
      </>
    );

    return (
      <div  className="session-form-wrapper">
        <img className="infinote-bg" src="images/infinote_background.png" alt="bg" />
        <div className="wrapper">
          <div className="session-form-div">
            {
              <Link to="/">
              <img
                src="images/infinote_logo_2.png"
                alt="infinote_logo_2"
                className="infinote-logo"
                />
                </Link>
            }
            <header className="session-form-header">
              <p className="slogan">Infinitely possible.</p>
            </header>
            <SessionFormDemo />
            <form className="session-form" onSubmit={this.handleSubmit}>
              {/* <p className="session-or">or</p> */}
              <div className="error-div">
                <ul className="error-ul">{this.renderErrors()}</ul>
              </div>
              <input
                className="email-input"
                type="email"
                value={this.state.email}
                onChange={this.handleChange("email")}
                placeholder="Email"
              />
              <br />
              <input
                className="password-input"
                type="password"
                value={this.state.password}
                onChange={this.handleChange("password")}
                placeholder="Password"
              />
              <br />
              {/* <button className="submit-button" type="submit" value={this.props.formType}>{this.props.formType}</button> */}
              <input
                type="submit"
                value={this.props.formType}
                className="submit-button"
              />
              {this.props.formType === "Register"
                ? redirectLogin
                : redirectSignup}
            </form>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
