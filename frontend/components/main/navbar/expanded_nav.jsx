import React from "react";
import { Link, withRouter } from "react-router-dom";
// React Icons
import { RiLogoutBoxFill } from "react-icons/ri";
import { FaAngleDown, FaPlus } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import {
  AiFillHome,
  AiFillTag,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { GiRunningShoe } from "react-icons/gi";
import { ImLoop2 } from "react-icons/im";
import { RiBookletLine } from "react-icons/ri";
//Util
import convertToSnakeCase from "../../../util/snake_case_util";
import * as ToggleUtil from "../../../util/component/toggle_util";

class ExpandedSideNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleCreateNote = this.handleCreateNote.bind(this);
  }

  componentDidMount() {
    const { fetchNotebooks, fetchNotes, notes } = this.props;
    fetchNotebooks();
    fetchNotes();
    this.setState = {
      filtered: notes,
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleCreateNote(e) {
    const { history, match, currentUser, createNote } = this.props;
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

  handleRedirect(e) {
    e.preventDefault();
    this.props.history.push("/notebooks");
  }

  render() {
    const { currentUser } = this.props;
    let title = currentUser.username || currentUser.email;
    let abbrTitle = title.length > 8 ? title.slice(0, 8) + "..." : title;
    let firstLetter = title[0].toUpperCase();
    let className = "sidenavbar";

    return (
      <div className={className}>
        <div className="sidenavbar-top">
          <div className="sidenavbar-top-profile">
            <div className="sidenavbar-profile-icon">
              <Link to="/home" style={{ textDecoration: "none" }}>
                <div className="user-initial">{firstLetter}</div>
              </Link>
            </div>
            <div className="sidenavbar-profile-title">
              {abbrTitle}
              <div className="expanded-side-nav-action-dropdown">
                <section className="expanded-side-nav-action-dropdown-btn">
                  <i className="sidebar-icon">
                    <FaAngleDown
                      className="angledown-i"
                      onClick={ToggleUtil.toggleActive}
                    />
                  </i>
                  <ul className="expanded-side-nav-action-dropdown-ul">
                    <li className="logout-li" onClick={this.handleClick}>
                      Log out {title}
                    </li>
                    {/* <li className="change-user-li">Update Profile</li> */}
                  </ul>
                </section>
              </div>
            </div>
          </div>
          {/* <div className="sidenavbar-top-search">
            <div className="search-block">
              <i className="sidenavbar-search-icon">
                <BsSearch />
              </i>
              <input placeholder="Search"/>
              <ul className="search-output">
                {this.state
                  ? Object.values(this.state).map((note, i) => {
                      return <li key={i}>{note.title}</li>;
                    })
                  : undefined}
              </ul>
            </div>
          </div> */}
          <div
            className="sidenavbar-top-create-note"
            onClick={this.handleCreateNote}
          >
            <div className="create-note-btn">
              <i className="sidenavbar-plus-icon">
                <FaPlus />
              </i>
              <div className="new-note">New Note</div>
            </div>
          </div>
          <div className="sidenavbar-top-menu-item">
            <ul className="sidenavbar-menu-btn">
              <Link style={{ textDecoration: "none" }} to="/home">
                <li className="sidebar-home">
                  <i className="menu-btn-icon">
                    <AiFillHome />
                  </i>
                  Home
                </li>
              </Link>

              <Link style={{ textDecoration: "none" }} to="/notes">
                <li className="sidebar-notes">
                  <i className="menu-btn-icon">
                    <CgNotes />
                  </i>
                  Notes
                </li>
              </Link>

              <Link style={{ textDecoration: "none" }} to="/notebooks">
                <li className="sidebar-notebooks">
                  <i className="menu-btn-icon">
                    <RiBookletLine />
                  </i>
                  Notebooks
                </li>
              </Link>

              <Link style={{ textDecoration: "none" }} to="/tags">
                <li className="sidebar-tags">
                  <i className="menu-btn-icon">
                    <AiFillTag />
                  </i>
                  Tags
                </li>
              </Link>

              <li>
                <a
                  href="https://www.github.com/akerpelm/infinote"
                  target="_blank"
                >
                  <i className="menu-btn-icon">
                    <AiFillGithub />
                  </i>
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/alex-kerpelman/"
                  target="_blank"
                >
                  <i className="menu-btn-icon">
                    <AiFillLinkedin />
                  </i>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.angel.co/u/alex-kerpelman/"
                  target="_blank"
                >
                  <i className="menu-btn-icon">
                    <FaAngellist />
                  </i>
                  AngelList
                </a>
              </li>
              <li onClick={this.handleClick}>
                <i className="menu-btn-icon">
                  <RiLogoutBoxFill />
                </i>
                Log Out
              </li>
            </ul>
          </div>
        </div>
        <div className="sidenavbar-bottom">
          <div className="sidenavbar-top-menu-item">
            <ul className="sidenavbar-menu-btn">
              <li>OTHER PROJECTS</li>
              <li>
                <a href="https://akerpelm.github.io/InTheLoop/" target="_blank">
                  <i className="menu-btn-icon">
                    <ImLoop2 />
                  </i>
                  InTheLoop
                </a>
              </li>
              <li>
                <a href="http://laceup-1.herokuapp.com/" target="_blank">
                  <i className="menu-btn-icon">
                    <GiRunningShoe />
                  </i>
                  LaceUp
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
