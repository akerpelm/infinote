import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotebook, removeNotebookErrors, updateNotebook } from '../../../actions/notebook_actions'
import EditModal from './edit_modal'
import { withRouter } from 'react-router-dom'

export class EditModalContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        // const { action, formType, notebook } = this.props
        if (!this.props.notebook) return null;
        return (
            <div>
                <EditModal
                    updateNotebook={this.props.updateNotebook}
                    fetchNotebook={this.props.fetchNotebook}
                    formType={this.props.formType}
                    notebook={this.props.notebook}
                    errors={this.props.errors} />
            
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
        notebook: state.entities.notebooks[ownProps.match.params.notebookId],
        errors: state.errors.notebook,

      // notebook: state.entities.notebooks[ownProps.notebook.id],
      // formType: "Rename notebook",

})


const mapDispatchToProps = dispatch => ({
    fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
    updateNotebook: (notebook) => dispatch(updateNotebook(notebook)),
    removeNotebookErrors: () => dispatch(removeNotebookErrors())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditModalContainer))
