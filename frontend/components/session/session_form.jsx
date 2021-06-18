import React, { Component } from "react";
import { Link } from "react-router-dom";
import SessionDemo from "../session/session_demo";

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
    const { processForm, history } = this.props;
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/home"));
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
      <div>
        <p className="redirect-login">
          Already have an account?
          <br />
          <Link
            style={{ color: "Black" }}
            className="redirect-login"
            to="/login"
          >
            <span className="redirect-link">Sign in</span>
          </Link>
        </p>
      </div>
    );
    let redirectSignup = (
      <div>
        <p className="redirect-login">
          Don't have an account?
          <br />
          <Link
            style={{ color: "Black" }}
            className="redirect-login"
            to="/register"
          >
            <span className="redirect-link">Create account</span>
          </Link>
        </p>
      </div>
    );

    return (
      <div className="session-form-wrapper">
        <img className="infinote-bg" src="images/session_bg.png" alt="bg" />
        <div className="wrapper">
          <div className="session-form-div">
            <div className="session-header">
              {
                <Link to="/">
                  <img
                    src="images/logo_vertical.png"
                    alt="infinote_logo_2"
                    className="infinote-logo"
                  />
                </Link>
              }
              <header className="session-form-header">
                <p className="slogan">Infinitely possible.</p>
              </header>
            </div>
            <div className="session-form">
              <SessionDemo />
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="error-div">
                  <ul className="error-ul">{this.renderErrors()}</ul>
                </div>
                <ul>
                  <li className="Row horizontalRow">
                    <div className="horizontalText">or</div>
                  </li>
                </ul>
                <input
                  className="email-input Row"
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
                <input
                  type="submit"
                  value={this.props.formType}
                  className="submit-button"
                />
              </form>
            </div>
            <div className="session-form-btns">
              {this.props.formType === "Register"
                ? redirectLogin
                : redirectSignup}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
