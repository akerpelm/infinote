import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
moment().format();
//React Icons
import { RiBookletLine } from "react-icons/ri";
import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";

//Util
import { DropdownMenu } from "./notebook_index_dropdown";

export class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showNotes: false, downCaret: false };
    this.showNotes = this.showNotes.bind(this);
  }

  showNotes() {
    let { notebook, notes } = this.props;
    let filteredNotes = notebook
      ? notes.filter((note) => notebook.id === note.notebookId)
      : undefined;

    if (this.state.showNotes) {
      return filteredNotes.map((note) => {
        return (
          <li key={note.id}>
            <Link to={`notebooks/${notebook.id}/notes/${note.id}`}>
              <CgNotes />
              <p>{note.title} </p>
            </Link>
          </li>
        );
      });
    }
  }

  showCaret() {
    return this.state.downCaret ? <AiFillCaretDown /> : <AiFillCaretRight />;
  }

  render() {
    const { notes, notebook, user, deleteNotebook, openModal } = this.props;

    let filteredNotes = notebook
      ? notes.filter((note) => notebook.id === note.notebookId)
      : undefined;

    return (
      <tr className="sort-row">
        <td className="nb-td">
          <section className="nb-td-flex">
            <p
              onClick={() =>
                this.setState({
                  showNotes: !this.state.showNotes,
                  downCaret: !this.state.downCaret,
                })
              }
            >
              {this.showCaret()}
            </p>
            <Link
              className="notebook-sort-link"
              to={`/notebooks/${notebook.id}`}
            >
              <RiBookletLine className="notebook-sort-link-notebook" />
              {notebook.title} ({filteredNotes.length} notes)
            </Link>
          </section>
          <ul className="notebook-sort-link-notes">{this.showNotes()}</ul>
        </td>
        <td className="notebook-author">{user.username || user.email}</td>
        <td>{moment().to(notebook.updatedAt)}</td>
        <td className="sort-action-row">
          <div className="index-dropdown-li">
            <DropdownMenu
              notebook={notebook}
              deleteNotebook={deleteNotebook}
              openModal={openModal}
            ></DropdownMenu>
          </div>
        </td>
      </tr>
    );
  }
}

export default NotebookIndexItem;
