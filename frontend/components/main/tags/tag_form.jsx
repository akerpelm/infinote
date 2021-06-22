import React from "react";
import { withRouter } from "react-router-dom";
import convertToSnakeCase from "../../../util/snake_case_util";

class TagForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.notebook;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.removeTagErrors();
  }

  handleUpdate(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    const { createTag, closeModal } = this.props;
    e.preventDefault();
    let tag = this.state;
    createTag(convertToSnakeCase(tag)).then(() => closeModal());
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
    const { formType, closeModal } = this.props;
    return (
      <div className="modal">
        <div className="modal-contents">
          <header className="modal-header">
            <h1 className="modal-title">{formType}</h1>
            <div onClick={closeModal} className="modal-close">
              x
            </div>
          </header>
          <div className="modal-form">
            <form className="form" onSubmit={this.handleSubmit}>
              <label className="modal-input-label">
                <p className="name">Name</p>
                <input
                  type="text"
                  className="modal-input"
                  value={this.state.name}
                  placeholder={"Tag name"}
                  onChange={this.handleUpdate("name")}
                />
                <div className="modal-errors">{this.renderErrors()}</div>
                <div className="modal-spacer"></div>
              </label>
              <div className="modal-buttons">
                <input type="submit" className="modal-submit" value="Create" />
                <input
                  type="submit"
                  className="modal-cancel"
                  value="Cancel"
                  onClick={closeModal}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(TagForm);
