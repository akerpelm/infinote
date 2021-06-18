import React, { Component } from "react";
//Util
import convertToSnakeCase from "../../../util/snake_case_util";

export class NotebookForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.notebook;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let notebook = this.state;
    this.props
      .updateNotebook(convertToSnakeCase(notebook))
      .then(() => this.props.closeModal());
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
  render() {
    const { formType, closeModal, button } = this.props;

    return (
      <div className="modal">
        <div className="modal-contents">
          <div className="modal-header">
            <h1 className="modal-title">{formType}</h1>
            <div onClick={closeModal} className="modal-close">
              X
            </div>
          </div>
          <div className="modal-form">
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="tag-form">
                <label className="modal-input-label">
                  <br />
                  <p className="name">Name</p>
                  <br />
                  <input
                    type="text"
                    className="modal-input"
                    value={this.state.title}
                    onChange={this.handleChange("title")}
                  />
                  <div className="modal-errors">{this.renderErrors()}</div>
                  <div className="modal-spacer"></div>
                </label>
                <div className="modal-buttons">
                  <input
                    type="submit"
                    className="modal-submit"
                    value={button}
                  />
                  <input
                    type="submit"
                    className="modal-cancel"
                    value="Cancel"
                    onClick={closeModal}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NotebookForm;
