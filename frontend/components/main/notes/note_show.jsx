import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import TagAddNote from "../tags/tag_add_note";
//React Icons
import { BiBookAlt } from "react-icons/bi";
import { AiFillTag } from "react-icons/ai";

//ReactQuill
// import ReactQuill from "react-quill";
import ReactQuill, { Quill } from "react-quill";
//Util
import convertToSnakeCase from "../../../util/snake_case_util";
import { DropdownMenu } from "./note_show_dropdown";

export class NoteShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: props.currentNote,
      tag: {
        name: "",
        authorId: props.currentUser.id,
        noteIds: [],
      },
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleTag = this.toggleTag.bind(this);
    this.handleTag = this.handleTag.bind(this);
    this.createTag = this.createTag.bind(this);
  }
  handleUpdate(e) {
    e.preventDefault();
    this.props.updateNote(
      convertToSnakeCase({
        id: this.state.note.id,
        title: this.state.note.title,
        content: this.state.note.content,
        notebookId: this.props.currentNote.notebookId,
      })
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.noteId !== this.props.noteId) {
      this.setState({ note: this.props.currentNote });
    }
  }

  handleChange(field) {
    return (e) => {
      this.setState({
        note: { ...this.state.note, [field]: e.target.value },
      });
    };
  }

  toggleTag(e) {
    document.querySelector(".footer-add-tag-input").classList.toggle("active");
    document.querySelector(".add-tag-form-btn").classList.toggle("active");
  }

  handleTag(field) {
    return (e) => {
      this.setState({
        tag: { ...this.state.tag, [field]: e.target.value },
      });
    };
  }

  createTag(e) {
    e.preventDefault();
    let tag = this.state.tag;
    tag.noteIds.push(this.props.match.params.noteId);
    this.props.createTag(convertToSnakeCase(tag)).then(this.toggleTag());
    e.target.querySelector("input").value = "";
    this.setState({
      tag: { ...this.state.tag, noteIds: [] },
    });
  }

  handleDelete(e) {
    this.props.openModal("delete-note");
  }

  renderErrors() {
    return (
      <ul className="error-ul">
        {Array.from(this.props.errors).map((error, i) => (
          <li className="error-li" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    //Quill Functions
    const Size = Quill.import("attributors/style/size");
    Size.whitelist = ["12px", "16px", "18px", "24px"];
    Quill.register(Size, true);
    const formats =
      "background, align, size, bold, italic, underline, strike, code, blockquote, list, bullet, align, color, background, link, image, video".split(
        ", "
      );

    const modules = {
      toolbar: [
        [{ size: ["12px", "16px", "18px", "24px"] }],
        ["bold", "italic", "underline"],
        ["code"],
        [
          {
            list: "ordered",
          },
          {
            list: "bullet",
          },
        ],
        [{ color: [] }, { background: [] }],
        ["link", "image", "video"],
      ],
    };

    const {
      tags,
      currentNote,
      allTags,
      title,
      openModal,
      updateTag,
      fetchTags,
    } = this.props;

    let filteredTags =
      tags == {}
        ? []
        : Object.values(tags).filter((tag) =>
            tag.noteIds.includes(currentNote.id)
          );

    let remainingTags = allTags
      ? allTags.filter((tag) => !filteredTags.includes(tag))
      : "";
    return (
      <div className="note">
        <div className="note-header">
          <div className="note-header-title">
            <i>
              <BiBookAlt />
            </i>
            {title}
          </div>
          <div>
            <div className="note-show-actions">
              <div className="dropdown-li">
                <DropdownMenu openModal={openModal} />
              </div>
              {/* <li>
                <button onClick={() => openModal("move-note")}>
                  Move note...
                </button>
              </li>
              <li>
                <button onClick={this.handleDelete}>Delete note</button>
              </li> */}
            </div>
          </div>
        </div>
        <div className="note-body" onBlur={this.handleUpdate}>
          <div className="note-body-head">
            <input
              className="note-body-head"
              value={this.state.note.title}
              placeholder={this.state.note.title || "Title"}
              onChange={this.handleChange("title")}
            />
          </div>

          <div className="note-body-content">
            <ReactQuill
              theme="snow"
              modules={modules}
              formats={formats}
              value={this.state.note.content}
              placeholder="Start writing..."
              onChange={(content, delta, source, editor) => {
                this.setState({
                  note: { ...this.state.note, content: content },
                });
              }}
            />
          </div>
        </div>
        <div className="note-body-footer">
          <div className="note-body-form-top">
            <div className="add-tags-wrapper">
              <div className="note-show-errors">{this.renderErrors()}</div>
              <div className="add-tags" onClick={this.toggleTag}>
                <p>New tag</p>
                <AiFillTag />
              </div>
              <form onSubmit={this.createTag}>
                <div className="footer-add-tag-div">
                  <input
                    className="footer-add-tag-input"
                    onChange={this.handleTag("name")}
                    type="text"
                    placeholder="Type to add..."
                  />
                  <button className="add-tag-form-btn" type="submit">
                    +
                  </button>
                </div>
              </form>
            </div>
            <div className="note-tag-div">
              {tags.length > 0 ? <p>Current:</p> : ""}
              <ul className="note-tag-ul">
                {filteredTags.map((tag) => {
                  return (
                    <Link
                      key={tag.id}
                      to={`/tags/${tag.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <button key={tag.id}>{tag.name}</button>
                    </Link>
                  );
                })}
              </ul>
              <ul className="noteless-tag-ul">
                {remainingTags.length > 0 ? <p>Add existing:</p> : ""}
                {remainingTags.map((tag) => {
                  return (
                    <TagAddNote
                      tag={tag}
                      key={tag.id}
                      updateTag={updateTag}
                      noteId={currentNote.id}
                      fetchTags={fetchTags}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(NoteShow);
