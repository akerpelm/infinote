import React, { Component } from "react";
import { convertToSnakeCase } from "../../../util/snake_case_util";
import { withRouter } from "react-router";

class EditModal extends Component {
  constructor(props) {
    super(props);

    this.state = props.notebook;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.evaluateErrors = this.evaluateErrors.bind(this);
  }

  handleChange(field) {
    return (e) =>
      this.setState({
        [field]: e.target.value,
      });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.updateNotebook(this.state)
          .then(() => this.toggleModal());

  }

  toggleModal = () => {
    document.querySelector(".modal").classList.toggle("modal-hidden");
  };

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

  evaluateErrors() {
    this.props.errors === [] ? this.renderErrors() : null;
  }

  render() {
    return (
      <div>
        <div className="modal modal-hidden">
          <div className="modal-contents">
            <header className="modal-create-header">
              <h1 className="modal-create-title">
                Rename notebook
                <div className="modal-close">
                  <span className="modal-close-span" onClick={this.toggleModal}>
                    X
                  </span>
                </div>
              </h1>
            </header>
            <form className="modal-create-form" onSubmit={this.handleSubmit}>
              <label className="modal-name-label">
                Name
                <br />
                {this.renderErrors()}
                <input
                  value={this.state.title}
                  onChange={this.handleChange("title")}
                  placeholder="Notebook name"
                  className="modal-title-input"
                />
              </label>
              <div className="modal-buttons">
                <input
                  className="modal-cancel"
                  type="submit"
                  onClick={this.toggleModal}
                  value="Cancel"
                />
                <input
                  className="modal-submit"
                  type="submit"
                  value="Continue"
                />
              </div>
            </form>
          </div>
        </div>
        <div>
          <button onClick={this.toggleModal} className="new-notebook-button">
            <i>{/* <BiBookAdd className="notebook-icon" /> */}</i>
            Rename Notebook
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(EditModal);
