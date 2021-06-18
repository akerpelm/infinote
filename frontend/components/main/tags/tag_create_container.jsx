import { connect } from "react-redux";
import TagForm from "./tag_form";
//Util
import { createTag, removeTagErrors } from "../../../actions/tag_actions";
import { closeModal } from "../../../actions/modal_actions";

const mapStateToProps = (state) => {
  return {
    formType: "Create new tag",
    currentUser: state.entities.users[state.session.id],
    notebook: {
      name: "",
      authorId: state.entities.users[state.session.id].id,
    },
    errors: state.errors.tag,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    createTag: (tag) => dispatch(createTag(tag)),
    removeTagErrors: () => dispatch(removeTagErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagForm);
