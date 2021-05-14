import React from 'react'
import { updateNotebook, removeErrors, fetchNotebook } from "../../actions/notebook_actions";
import { connect } from 'react-redux';
import NotebookModalForm from './notebook_modal_form'

class EditNotebookModal extends React.Component {
    constructor(props) {
        super(props) 
    }

    componentDidMount() {
        // debugger
        this.props.fetchNotebook(this.props.match.params.notebookId)
    }
    render() {
        if (!this.props.notebook) return null;
        return (
            <NotebookModalForm
            action={this.props.action}
            formType={this.props.formType}
            notebook={this.props.notebook}
            removeErrors={this.props.removeErrors}
            errors={this.props.errors}
            fetchNotebook={this.props.fetchNotebook}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        notebook: state.entities.notebooks[ownProps.match.params.notebookId],
        formType: "Rename",
        errors: state.errors.session,
    }
}
const mapDispatchToProps = (dispatch) => ({
    action: notebook => dispatch(updateNotebook(notebook)),
    removeErrors: () => dispatch(removeErrors()),
    fetchNotebook: notebook => dispatch(fetchNotebook())
});

export default connect(mapStateToProps, mapDispatchToProps)(EditNotebookModal)



