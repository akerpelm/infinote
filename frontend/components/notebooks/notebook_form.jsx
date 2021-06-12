import React, { Component } from "react";
import convertToSnakeCase from "../../util/snake_case_util";

export class NotebookForm extends Component {
  constructor(props) {
    //   debugger
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
    return (
      <div className="tag-form-wrapper">
        <div className="tag-form-header">
          <h1 className="modal-tag-name">{this.props.formType}</h1>
          <div onClick={this.props.closeModal} className="close-x">
            x
          </div>
        </div>
        <form className="tag-form-container" onSubmit={this.handleSubmit}>
          <div className="tag-form">
            <label className="modal-label">
              Name
              <br />
              {this.renderErrors()}
            </label>
            <input
              type="text"
              className="tag-modal-input"
              value={this.state.title}
              onChange={this.handleChange("title")}
            />
            <div className="tag-spacer"></div>
            <div className="tag-form-btn">
              <input
                type="submit"
                className="tag-form-submit"
                value={this.props.button}
              />
              <input
                type="submit"
                className="tag-form-close"
                value="Cancel"
                onClick={this.props.closeModal}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NotebookForm;
