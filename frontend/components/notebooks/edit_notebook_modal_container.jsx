import React from 'react'
import { updateNotebook, removeErrors, fetchNotebook } from "../../actions/notebook_actions";
import { connect } from 'react-redux';


class EditNotebookModal extends React.Component {
    constructor(props) {
        super(props) 
    }

    componentDidMount() {
        debugger
        this.props.fetchNotebook(this.props.match.params.postId)
    }
    render() {
        if (!notebook) return null;
        return (
            <NotebookModalForm
            action={this.props.action}
            formType={this.props.formType}
            post={post}
            removeErrors={this.props.removeErrors}
            />
        )
    }
}

export default EditNotebookModal


const mapStateToProps = (state) => {
    debugger
    return {
        notebook: state.enities.notebooks[ownProps.match.params.notebookId],
        formType: "Update",
        errors: state.errors.session,
    }
}

const mapDispatchToProps = dispatch => ({
    action: notebook => dispatch(updateNotebook(notebook)),
    removeErrors: () => dispatch(removeErrors()),
    fetchNotebook: notebook => dispatch(fetchNotebook)
});

export default connect(mapStateToProps, mapDispatchToProps)(EditNotebookModal)



