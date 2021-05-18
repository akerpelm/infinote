import React from "react";
import { FaAngleDown, FaPlus } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import {
  AiFillHome,
  AiFillTag,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { BiBookAlt } from "react-icons/bi";
import convertToSnakeCase from '../../util/snake_case_util'
import { Link, withRouter } from "react-router-dom";
// import convertToSnakeCase from "../../util/snake_case_util";

class ExpandedSideNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleCreateNote = this.handleCreateNote.bind(this);
  }

  // this method was created with the assistance of Tim Fraczak, a colleague of mine.
  componentDidMount() {
    this.props.fetchNotebooks();
    this.props.fetchNotes();
  }
  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }
  handleCreateNote(e) {
    e.preventDefault();
    let newNote = {
      title: "Title",
      content: "Start writing",
      authorId: this.props.currentUser.id,
      notebookId: this.props.match.params.notebookId,
    };
    this.props
      .createNote(convertToSnakeCase(newNote))
      .then((response) =>
        this.props.history.push(
          `/notebooks/${this.props.match.params.notebookId}/notes/${response.note.id}`
        )
      );
  }

  // toggleActive = () => {
  //     document.querySelector('.action-dropdown-ul')
  //         .classList.toggle('active')
  // }

  render() {
    // debugger
    let title = this.props.currentUser.username || this.props.currentUser.email;
    let firstLetter = title[0].toUpperCase();

    return (
      <div className="sidenavbar">
        <div className="sidenavbar-top">
          <div className="sidenavbar-top-profile">
            <div className="sidenavbar-profile-icon">{firstLetter}</div>
            <div className="sidenavbar-profile-title">
              {title}
              <span
                className="action-dropdown-button"
                onClick={this.toggleActive}
              >
                <i className="sidenavbar-icon">
                  <FaAngleDown />
                </i>
                <p onClick={this.handleClick}>Log out</p>
              </span>
            </div>
          </div>
          <div className="sidenavbar-top-search">
            <div className="search-block">
              <i className="sidenavbar-search-icon">
                <BsSearch />
              </i>
              <input placeholder="Search" />
            </div>
          </div>
          <div className="sidenavbar-top-create-note">
            <div className="create-note-btn">
              <i className="sidenavbar-plus-icon">
                <FaPlus />
              </i>
              <div className="new-note" onClick={this.handleCreateNote}>
                New Note
              </div>
            </div>
          </div>
          <div className="sidenavbar-top-menu-item">
            <ul className="sidenavbar-menu-btn">
              <Link to="/notes">
                <li className="sidebar-home">
                  <i className="menu-btn-icon">
                    <AiFillHome />
                  </i>
                  Home
                </li>
              </Link>

              <Link to="/notes">
                <li className="sidebar-notes">
                  <i className="menu-btn-icon">
                    <CgNotes />
                  </i>
                  Notes
                </li>
              </Link>

              <Link to="/notebooks">
                <li className="sidebar-notebooks">
                  <i className="menu-btn-icon">
                    <BiBookAlt />
                  </i>
                  Notebooks
                </li>
              </Link>

              <Link to="/notes">
                <li className="sidebar-tags">
                  <i className="menu-btn-icon">
                    <AiFillTag />
                  </i>
                  Tags
                </li>
              </Link>

              <li>
                <a href="https://www.github.com/akerpelm" target="_blank">
                  <i className="menu-btn-icon">
                    <AiFillGithub />
                  </i>
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/alexander-kerpelman-22587584/"
                  target="_blank"
                >
                  <i className="menu-btn-icon">
                    <AiFillLinkedin />
                  </i>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ExpandedSideNav);
