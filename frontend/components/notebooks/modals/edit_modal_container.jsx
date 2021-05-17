import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchNotebook, updateNotebook } from '../../../util/notebooks_api_util'
import EditModal from './edit_modal'

export class EditModalContainer extends Component {
    constructor(props) {
        super(props)
    }
    // componentDidMount() {
    //     this.props.fetchNotebook(this.props.notebookId)
    // }
    
    render() {
        // const { action, formType, notebook } = this.props
        if (!this.props.notebook) return null;
        return (
            <div>
                <EditModal
                    updateNotebook={this.props.updateNotebook}
                    fetchNotebook={this.props.fetchNotebook}
                    formType={this.props.formType}
                    notebook={this.props.notebook} />
            
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        notebook: state.entities.notebooks[ownProps.match.params.notebookId]
    // notebook: state.entities.notebooks[ownProps.notebook.id],
    // formType: "Rename notebook",
    }
}


const mapDispatchToProps = dispatch => ({
    fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
    updateNotebook: (notebook) => dispatch(updateNotebook(notebook))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditModalContainer)
