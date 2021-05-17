import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import ReducedSideNav from "./reduced_side_nav";

const mapStateToProps = (state) => {
  // user: state.entities.users[1]
  return {
    currentUser: state.entities.users[state.session.id],

  }
}

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReducedSideNav);
