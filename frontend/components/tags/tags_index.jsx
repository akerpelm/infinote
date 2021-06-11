import React from "react";
import ReducedSideNavContainer from "../side_nav/reduced_side_nav_container";
import { BsSearch, BsPlusSquareFill } from "react-icons/bs";
import convertToSnakeCase from "../../util/snake_case_util";
import { DropdownItem, DropdownMenu } from "./dropdown";

class TagsIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchTags();
  }

  render() {
    const { tags, openModal, deleteTag } = this.props;
    return (
      <div className="tags-index-wrapper">
        <div className="reduced-side-nav">
          <ReducedSideNavContainer />
        </div>
        <div className="tags-index">
          <div className="tags-header-container">
            <div className="tags-header">
              <h3 className="tags-title">Tags</h3>
              <div className="create-tag-btn">
                <BsPlusSquareFill
                  className="create-tag-btn"
                  onClick={() => openModal("tag")}
                />
              </div>
            </div>
            <div className="tags-search-bar-div">
              <input
                className="tags-search-bar"
                type="input"
                placeholder="Find tags..."
              />
              <i className="tags-search-bar-icon">
                <BsSearch className="tags-search-bar-icon" />
              </i>
            </div>
          </div>
          <div className="tags-body-wrapper">
            <div className="tags-body">
              {tags.map((tag) => {
                return (
                  <div className="tag-list-element" key={tag.id}>
                    <div className="tag-list-info">{tag.name}</div>
                    <div className="dropdown-li">
                      <DropdownMenu deleteTag={deleteTag} tag={tag} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TagsIndex;
