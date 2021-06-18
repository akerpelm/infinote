import React from "react";
import { Link } from "react-router-dom";
import SessionDemoLogin from "../session/session_demo_login";

const SplashUserActions = () => {
  return (
    <div className="user-actions">
      <Link to="/register" className="register-button">
        Sign up for free
      </Link>
      <br />
      <Link to="/login" className="login-link">
        Already have an account? Log in
      </Link>
      <br />
      {/* <SessionDemoLogin /> */}
    </div>
  );
};

export default SplashUserActions;
