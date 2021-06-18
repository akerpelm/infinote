import { connect } from "react-redux";
import TagsIndex from "./tags_index";
//Util
import { openModal } from "../../../actions/modal_actions";
import { logout } from "../../../actions/session_actions";
import { deleteTag, fetchTags } from "../../../actions/tag_actions";

const mapStateToProps = (state) => {
  return {
    tags: Object.values(state.entities.tags),
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchTags: () => dispatch(fetchTags()),
    deleteTag: (tag) => dispatch(deleteTag(tag)),
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagsIndex);
