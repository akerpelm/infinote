import React from "react";
import { RiLogoutBoxFill } from 'react-icons/ri'
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
import convertToSnakeCase from "../../util/snake_case_util";
import { Link, withRouter } from "react-router-dom";
import { useState } from "react";
// import convertToSnakeCase from "../../util/snake_case_util";

class ExpandedSideNav extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    // this.state = {
    //   filtered: [props.notes],
    //   showMenu: false,
    //   handleClickRedirect: false,
    // }

    this.handleClick = this.handleClick.bind(this);
    this.handleCreateNote = this.handleCreateNote.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.showMenu = this.showMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotebooks();
    this.props.fetchNotes();
    this.setState = {
      filtered: this.props.notes,
    };
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

  handleRedirect(e) {
    e.preventDefault();
    this.props.history.push("/notebooks");
  }

  // handleChange(e) {
  //   e.preventDefault();
  //   let searchable = {};
  //   Object.values(this.props.notes).forEach((note) => {
  //     if (note.title.includes(e.target.value) === true) {
  //       searchable[note.id] = note;
  //     }
  //   });
  //   // console.log(searchable, "searchable");

  //   this.setState(searchable);
  // }

  toggleActive = () => {
    document
      .querySelector(".expanded-side-nav-action-dropdown-ul")
      .classList.toggle("active");
  };
  render() {
    let title = this.props.currentUser.username || this.props.currentUser.email;
    let abbrTitle = title.length > 8 ? title.slice(0, 8) + "..." : title;
    let firstLetter = title[0].toUpperCase();
    console.log(this.state);

    return (
      <div className="sidenavbar">
        <div className="sidenavbar-top">
          <div className="sidenavbar-top-profile">
            <div className="sidenavbar-profile-icon">
              <Link to="/notes" style={{ textDecoration: "none" }}>
                <div className="user-initial">{firstLetter}</div>
              </Link>
              {/* {firstLetter} */}
            </div>
            <div className="sidenavbar-profile-title">
              {abbrTitle}
              <div className="expanded-side-nav-action-dropdown">
                <section className="expanded-side-nav-action-dropdown-btn">
                  <i className="sidebar-icon">
                    <FaAngleDown
                      className="angledown-i"
                      onClick={this.toggleActive}
                    />
                  </i>
                  <ul className="expanded-side-nav-action-dropdown-ul">
                    <li className="logout-li" onClick={this.handleClick}>
                      Log out {title}
                    </li>
                    <li className="change-user-li">Update Profile</li>
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
              <Link style={{ textDecoration: "none" }} to="/notes">
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
                    <BiBookAlt />
                  </i>
                  Notebooks
                </li>
              </Link>

              <Link style={{ textDecoration: "none" }} to="/notes">
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
              <li onClick={this.handleClick}>
                <i className="menu-btn-icon"><RiLogoutBoxFill/></i>
                Log Out
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ExpandedSideNav);
