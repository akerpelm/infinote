import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import { convertToSnakeCase } from "../../../util/snake_case_util";

class DeleteModal extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleDelete() {
    this.props.deleteNotebook(this.props.notebook.id);
    return (e) => {
      this.props.history.push(`/notebooks/`);
    };
  }

  render() {
    return (
      <div className="delete-notebook-modal">
          <Link
            to="/notebooks"
            // style={{ textDecoration: "none", color: "#737373" }}
            onClick={this.handleDelete}
          >
            Delete Notebook
          </Link>
      </div>
    );
  }
}

export default DeleteModal;
