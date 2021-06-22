import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import ExpandedNavContainer from "../navbar/expanded_nav_container";
//React Icons
import { AiOutlineRight } from "react-icons/ai";
import { MdNoteAdd } from "react-icons/md";
import { ImLoop2 } from "react-icons/im";
import { GiRunningShoe } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";
//Util
import { getCurrentDate } from "../../../util/date";
import { createNote, fetchNotes } from "../../../actions/note_actions";
import convertToSnakeCase from "../../../util/snake_case_util";
import moment from "moment";
import { compare } from "../../../util/component/notebook_util";
moment().format();

class Home extends Component {
  constructor(props) {
    super(props);

    this.handleCreateNote = this.handleCreateNote.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotes;
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

  render() {
    const { currentUser, notes } = this.props;
    const user = currentUser.username
      ? currentUser.username
      : currentUser.email;

    let recentNotes = notes ? notes.sort(compare).slice(0, 5) : "";

    recentNotes = recentNotes.map((note) => {
      return (
        <Link
          to={`/notebooks/${note.notebookId}/notes/${note.id}`}
          key={note.id}
        >
          <div className="home-note-body">
            <p>{note.title}</p>
            <p className="home-note-body-time">{moment().to(note.updatedAt)}</p>
          </div>
        </Link>
      );
    });

    return (
      <div className="home-wrapper">
        <div className="reduced-side-nav">
          <ExpandedNavContainer />
        </div>
        <div className="home-info">
          <section className="home">
            <header className="home-header">
              <h1 className="welcome">Welcome, {user}!</h1>
              <h2 className="date">{getCurrentDate()}</h2>
            </header>
            <div className="home-body-wrapper">
              <div className="home-body">
                <div className="home-body-notes">
                  <div className="home-note-links">
                    <div className="home-note-links-title">
                      <Link to="/notes" className="home-create">
                        <h3 className="home-notes-link">NOTES</h3>
                        <AiOutlineRight className="right-arrow-svg" />
                      </Link>
                      <h3 className="home-notes-recent">Recent</h3>
                    </div>
                    <div className="home-create-note-link">
                      <div
                        className="home-create-note-body"
                        onClick={this.handleCreateNote}
                      >
                        <MdNoteAdd className="add-note-svg" />
                        <h4>Create new note</h4>
                      </div>
                      {/* <Link to="/notes">
                        <div className="home-create-note-body">
                          <CgNotes className="add-note-svg" />
                          <h4>View notes</h4>
                        </div>
                      </Link> */}
                      {recentNotes}
                    </div>
                  </div>
                </div>
                <div className="home-project-links">
                  <h3>OTHER PROJECTS</h3>
                  <a
                    href="https://akerpelm.github.io/InTheLoop/"
                    target="_blank"
                    className="project-1"
                  >
                    {" "}
                    <i className="menu-btn-icon">
                      <ImLoop2 />
                    </i>
                    InTheLoop
                  </a>
                  <a
                    href="http://laceup-1.herokuapp.com/"
                    target="_blank"
                    className="project-1"
                  >
                    {" "}
                    <i className="menu-btn-icon">
                      <GiRunningShoe />
                    </i>
                    LaceUp
                  </a>
                </div>
                <div className="scratch-pad">
                  <h3>SCRATCH PAD</h3>
                  <textarea
                    className="scratch-pad-text"
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Start writing..."
                  ></textarea>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.entities.users[state.session.id],
  notes: Object.values(state.entities.notes),
});

const mapDispatchToProps = (dispatch) => ({
  createNote: (note) => dispatch(createNote(note)),
  fetchNotes: () => dispatch(fetchNotes()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
