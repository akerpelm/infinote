import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createTag, fetchTags } from "../../actions/tag_actions";
import { closeModal } from "../../actions/modal_actions";
import convertToSnakeCase from "../../util/snake_case_util";

class TagForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.notebook;

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let tag = this.state;
    this.props
      .createTag(convertToSnakeCase(tag))
      .then(() => this.props.closeModal());
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
            <label className="modal-label">Name</label>
            <input
              type="text"
              className="tag-modal-input"
              value={this.state.name}
              placeholder={"Tag name"}
              onChange={this.update("name")}
            />
            <div className="tag-spacer"></div>
            <div className="tag-form-btn">
              <input type="submit" className="tag-form-submit" value="Create" />
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

export default withRouter(TagForm);
