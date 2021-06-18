import React from "react";
import { withRouter } from "react-router-dom";
//React Icons
import { BsSearch } from "react-icons/bs";
import { RiLogoutBoxFill } from "react-icons/ri";
import {
  AiFillTag,
  AiFillHome,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { BiBookAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
//Util
import convertToSnakeCase from "../../../util/snake_case_util";

class ReducedSideNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateNote = this.handleCreateNote.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
    const { match, currentUser, createNote, history } = this.props;
    e.preventDefault();
    let notebookId = match.params.notebookId ? match.params.notebookId : 0;
    let newNote = {
      title: "",
      content: "",
      authorId: currentUser.id,
      notebookId: notebookId,
    };
    createNote(convertToSnakeCase(newNote)).then((response) =>
      history.push(`/notebooks/${notebookId}/notes/${response.note.id}`)
    );
  }

  render() {
    const { currentUser } = this.props;
    let userInitial = currentUser.username
      ? currentUser.username[0].toUpperCase()
      : currentUser.email[0].toUpperCase();
    return (
      <nav className="sidebar">
        <div className="sidebar-buttons">
          <div className="sidebar-user">
            <Link to="/home">
              <div className="user-initial">
                <div className="user-letter">{userInitial}</div>
              </div>
            </Link>
          </div>
          <div className="buttons-1">
            {/* <button className="sidebar-search">
              <BsSearch />
            </button> */}
            <button className="sidebar-new" onClick={this.handleCreateNote}>
              +
            </button>
          </div>
          <ul className="buttons-2">
            <Link to="/home">
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
            <Link to="/tags">
              <li className="sidebar-tags">
                <AiFillTag />
              </li>
            </Link>
            <li>
              <a
                href="https://www.github.com/akerpelm/infinote"
                target="_blank"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alex-kerpelman/"
                target="_blank"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.angel.co/u/alex-kerpelman/" target="_blank">
                <FaAngellist />
              </a>
            </li>
            <li onClick={this.handleClick}>
              <i className="menu-btn-icon">
                <RiLogoutBoxFill />
              </i>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(ReducedSideNav);
