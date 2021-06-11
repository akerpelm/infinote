import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";
import {
  createTag,
  deleteTag,
  fetchTags,
  removeTagErrors,
} from "../../actions/tag_actions";
import TagsIndex from "./tags_index";

const mapStateToProps = (state) => {
  //   debugger;
  return {
    tags: Object.values(state.entities.tags),
    currentUser: state.entities.users[state.session.id],
    // errors: state.errors.tag,
  };
};

const mapDispatchToProps = (dispatch) => {
  //   debugger;
  return {
    logout: () => dispatch(logout()),
    fetchTags: () => dispatch(fetchTags()),
    deleteTag: (tag) => dispatch(deleteTag(tag)),
    removeTagErrors: () => dispatch(removeTagErrors),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagsIndex);
