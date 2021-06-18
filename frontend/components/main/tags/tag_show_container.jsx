import { connect } from "react-redux";
import TagShow from "./tag_show";
//Util
import { fetchTag } from "../../../actions/tag_actions";
import { fetchNote, fetchNotes } from "../../../actions/note_actions";

const mapStateToProps = (state, ownProps) => {
  let dbNotes = Object.values(state.entities.notes);
  let tagId = ownProps.match.params.id;
  let filteredNotes = [];
  if (state.entities.tags[tagId]) {
    dbNotes.filter((note) => {
      Object.values(state.entities.tags[tagId].noteIds).includes(note.id)
        ? filteredNotes.push(note)
        : "";
    });
  }
  let compare = (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt);
  filteredNotes = filteredNotes.sort(compare);
  let tag = state.entities.tags[tagId] ? state.entities.tags[tagId] : undefined;

  return { tagId: tagId, tag: tag, filteredNotes: filteredNotes };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchTag: (tagId) => dispatch(fetchTag(tagId)),
    fetchNote: (noteId) => dispatch(fetchNote(noteId)),
    fetchNotes: () => dispatch(fetchNotes()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TagShow);
