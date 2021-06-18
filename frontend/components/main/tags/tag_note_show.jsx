import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import TagAddNote from "./tag_add_note";
//React Icons
import { BiBookAlt } from "react-icons/bi";
import { AiFillTag } from "react-icons/ai";
//React Quill
import ReactQuill, { Quill } from "react-quill";
//Util
import convertToSnakeCase from "../../../util/snake_case_util";
import * as ToggleUtil from "../../../util/component/toggle_util";

export class TagNoteShow extends React.Component {
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
    this.handleTag = this.handleTag.bind(this);
    this.createTag = this.createTag.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotebook(this.props.currentNote.notebookId);
  }

  componentDidUpdate(prevProps) {
    const { currentNote, removeTagErrors } = this.props;
    if (prevProps.currentNote.id !== currentNote.id) {
      this.setState({ note: currentNote });
      removeTagErrors();
    }
  }

  handleUpdate(e) {
    const { currentNote, updateNote } = this.props;
    e.preventDefault();
    updateNote(
      convertToSnakeCase({
        id: this.state.note.id,
        title: this.state.note.title,
        content: this.state.note.content,
        notebookId: currentNote.notebookId,
      })
    );
  }

  handleChange(field) {
    return (e) => {
      this.setState({
        note: { ...this.state.note, [field]: e.target.value },
      });
    };
  }

  handleTag(field) {
    return (e) => {
      this.setState({
        tag: { ...this.state.tag, [field]: e.target.value },
      });
      console.log(this.state);
    };
  }

  createTag(e) {
    const { match, createTag } = this.props;
    e.preventDefault();
    let tag = this.state.tag;
    tag.noteIds.push(match.params.noteId);
    createTag(convertToSnakeCase(tag)).then(ToggleUtil.toggleTag());
    e.target.querySelector("input").value = "";
    this.setState({
      tag: { ...this.state.tag, noteIds: [] },
    });
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
    const { notebook, tags, currentNote, allTags, fetchTags, updateTag } =
      this.props;

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

    let notebookTitle = notebook ? notebook.title : "Uncategorized Notes";
    let filteredTags =
      tags == undefined
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
            {notebookTitle}
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
              value={this.state.note.content}
              format={formats}
              modules={modules}
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
              <div className="add-tags" onClick={ToggleUtil.toggleTag}>
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
              {filteredTags.length > 0 ? <p>Current:</p> : ""}

              <ul className="note-tag-ul">
                {filteredTags.map((tag) => {
                  return (
                    <Link
                      to={`/tags/${tag.id}`}
                      style={{ textDecoration: "none" }}
                      key={tag.id}
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

export default withRouter(TagNoteShow);
