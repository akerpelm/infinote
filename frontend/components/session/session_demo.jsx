import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
//Util
import { login } from "../../actions/session_actions";

class SessionDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "demo_user@infinote.com",
      password: "infinote",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault;
    this.props.login(this.state).then(() => this.props.history.push("/notes"));
  }

  render() {
    return (
      <div className="session-demo-login">
        <button
          className="session-demo-login-link"
          type="submit"
          onClick={this.handleSubmit}
        >
          Demo User
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
});

export default withRouter(connect(null, mapDispatchToProps)(SessionDemo));
