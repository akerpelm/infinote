import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
//Util
import { login } from "../../actions/session_actions";

class DemoLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "demo_user@infinote.com",
      password: "infinote",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { login, history } = this.props;
    e.preventDefault;
    login(this.state).then(() => history.push("/home"));
  }

  render() {
    return (
      <div className="demo-login">
        <button
          className="demo-login-link"
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

export default withRouter(connect(null, mapDispatchToProps)(DemoLogin));
