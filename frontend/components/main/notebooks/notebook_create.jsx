import React, { Component } from "react";
import { connect } from "react-redux";
//Util
import {
  createNotebook,
  removeNotebookErrors,
} from "../../../actions/notebook_actions";
import convertToSnakeCase from "../../../util/snake_case_util";
import { closeModal } from "../../../actions/modal_actions";

class NotebookCreate extends Component {
  constructor(props) {
    super(props);

    this.state = props.notebook;
    this.handleSubmit = this.handleSubmit.bind(this);
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
        {Array.from(this.props.errors).map((error, i) => (
          <li className="error-li" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .action(convertToSnakeCase(this.state))
      .then(() => this.props.closeModal());
    this.setState({
      title: "",
    });
  }

  render() {
    const { closeModal, modalInfo } = this.props;
    return (
      <div>
        <div className="modal">
          <div className="modal-contents">
            <header className="modal-header">
              <h1 className="modal-title">Create new notebook</h1>
              <div className="modal-close" onClick={closeModal}>
                X
              </div>
            </header>
            <div className="modal-info">{modalInfo}</div>
            <div className="modal-form">
              <form className="form" onSubmit={this.handleSubmit}>
                <label className="modal-input-label">
                  <p className="name">Name</p>
                  <input
                    value={this.state.title}
                    onChange={this.handleChange("title")}
                    placeholder="Notebook name"
                    className="modal-input"
                  />
                  <div className="modal-errors">{this.renderErrors()}</div>
                  <div className="modal-spacer"></div>
                </label>
                <div className="modal-buttons">
                  <input
                    className="modal-submit"
                    type="submit"
                    value="Continue"
                  />
                  <input
                    className="modal-cancel"
                    type="submit"
                    onClick={closeModal}
                    value="Cancel"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  notebook: {
    title: "",
    authorId: state.session.id,
  },
  formType: "create",
  errors: state.errors.notebook,
  modalInfo:
    "Notebooks are useful for grouping notes around a common topic. They can be private or shared.",
});

const mapDispatchToProps = (dispatch) => ({
  action: (notebook) => dispatch(createNotebook(notebook)),
  closeModal: () => dispatch(closeModal()),
  removeNotebookErrors: () => dispatch(removeNotebookErrors()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookCreate);
