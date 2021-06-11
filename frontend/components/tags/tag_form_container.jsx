import { connect } from "react-redux";
import { createTag, fetchTags } from "../../actions/tag_actions";
import { closeModal } from "../../actions/modal_actions";
import TagForm from './tag_form'

const mapStateToProps = (state) => {
  return {
    formType: "tag",
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    // fetchTags: () => dispatch(fetchTags()),
    createTag: (tag) => dispatch(createTag(tag)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagForm);
