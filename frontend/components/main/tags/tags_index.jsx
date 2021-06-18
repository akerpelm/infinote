import React from "react";
import { Link } from "react-router-dom";
import ReducedNavContainer from "../navbar/reduced_nav_container";
import { DropdownMenu } from "./tag_dropdown";
import EmptyTagNoteShow from "./empty_tag_note_show";
//React-Icons
import { BsSearch, BsPlusSquareFill } from "react-icons/bs";

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
          <ReducedNavContainer />
        </div>
        <div className="tags-index">
          <div className="tags-header-container">
            <div className="tags-header">
              <h3 className="tags-title">Tags</h3>
              <div className="create-tag-btn">
                <BsPlusSquareFill
                  className="create-tag-btn"
                  onClick={() => openModal("create-tag")}
                />
              </div>
            </div>
            {/* <div className="tags-search-bar-div">
              <input
                className="tags-search-bar"
                type="input"
                placeholder="Find tags..."
              />
              <i className="tags-search-bar-icon">
                <BsSearch className="tags-search-bar-icon" />
              </i>
            </div> */}
          </div>
          <div className="tags-body-wrapper">
            <div className="tags-body">
              {tags.map((tag) => {
                return (
                  <div className="tag-list-element" key={tag.id}>
                    <div className="inner-tag-list-element">
                      <Link
                        style={{ textDecoration: "none", padding: "0" }}
                        to={`/tags/${tag.id}`}
                      >
                        <div className="tag-list-info">{tag.name}</div>
                      </Link>
                      <div className="tag-dropdown-li">
                        <DropdownMenu
                          deleteTag={deleteTag}
                          tag={tag}
                          openModal={openModal}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="tags-index-bg">
          <EmptyTagNoteShow />
        </div>
      </div>
    );
  }
}

export default TagsIndex;
