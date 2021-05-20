import React from "react";
import { BsSearch } from "react-icons/bs";
import {
  AiFillTag,
  AiFillHome,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { BiBookAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import convertToSnakeCase from '../../util/snake_case_util'
import { withRouter } from 'react-router-dom'

class ReducedSideNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateNote = this.handleCreateNote.bind(this);
  }

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
    let notebookId = this.props.match.params.notebookId
      ? this.props.match.params.notebookId
      : 0;
    // let notebookId = 0;
    let newNote = {
      title: "",
      content: "",
      authorId: this.props.currentUser.id,
      notebookId: notebookId,
    };
    this.props
      .createNote(convertToSnakeCase(newNote))
      .then((response) =>
        this.props.history.push(
          `/notebooks/${notebookId}/notes/${response.note.id}`
        )
      );
  }

  render() {
    let userInitial = this.props.currentUser.username
      ? this.props.currentUser.username[0].toUpperCase()
      : this.props.currentUser.email[0].toUpperCase();
    return (
      <nav className="sidebar">
        <div className="sidebar-buttons">
          <div className="sidebar-user">
            <Link to="/notes" style={{ textDecoration: "none" }}>
              <div className="user-initial">{userInitial}</div>
            </Link>
          </div>
          <div className="buttons-1">
            <button className="sidebar-search">
              <BsSearch />
            </button>
            <button className="sidebar-new" onClick={this.handleCreateNote}>
              +
            </button>
          </div>
          <ul className="buttons-2">
            <Link to="/notes">
              <li className="sidebar-home">
                <AiFillHome />
              </li>
            </Link>
            <Link to="/notes">
              <li className="sidebar-notes">
                <CgNotes />
              </li>
            </Link>
            <Link to="/notebooks">
              <li className="sidebar-notebooks">
                <BiBookAlt />
              </li>
            </Link>
            <Link to="/notebooks">
              <li className="sidebar-tags">
                <AiFillTag />
              </li>
            </Link>
            <li>
              <a href="https://www.github.com/akerpelm" target="_blank">
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alexander-kerpelman-22587584/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(ReducedSideNav);
