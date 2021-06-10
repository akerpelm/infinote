import React, { Component } from "react";
import ReducedSideNaveContainer from "../side_nav/reduced_side_nav_container";
import { BsSearch } from "react-icons/bs";
import convertToSnakeCase from "../../util/snake_case_util";
import CreateModal from "../notebooks/modals/create_modal";
class TagsIndex extends Component {
  constructor(props) {
    super(props);
    this.handleCreateTag = this.handleCreateTag.bind(this);
  }
  componentDidMount() {
    this.props.fetchTags();
  }

  handleCreateTag(e) {
    e.preventDefault();
    let newTag = {
      name: "",
      authorId: this.props.currentUser.id,
    };
    this.props.action(convertToSnakeCase(newTag));
  }

  render() {
    const { tags } = this.props;
    return (
      <div className="tags-index-wrapper">
        <div className="reduced-side-nav">
          <ReducedSideNaveContainer />
        </div>
        <div className="tags-index">
          <div className="tags-header">
            <h3 className="tags-title">Tags</h3>
            <div className="create-tag">
              Create
              <div className="create-tag">
                {/* <CreateModal /> */}
              </div>
            </div>
            <div className="notebooks-search-bar-div">
              <input
                className="notebooks-search-bar"
                type="input"
                placeholder="Find tags..."
              />
              <BsSearch className="notebooks-search-bar-icon" />
            </div>
          </div>
          <div className="tags-body">
            {tags.map((tag) => {
              return (
                <div className="tag-list-element" key={tag.id}>
                  tag.title
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default TagsIndex;
