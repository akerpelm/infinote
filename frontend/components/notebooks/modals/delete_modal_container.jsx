import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteNotebook, fetchNotebook } from '../../../util/notebooks_api_util'
import DeleteModal from './delete_modal'

export class DeleteModalContainer extends Component {
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
                <DeleteModal
                    deleteNotebook={this.props.deleteNotebook}
                    formType={this.props.formType}
                    notebook={this.props.notebook} />

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    // debugger
    return {
        notebook: state.entities.notebooks[ownProps.match.params.notebookId],
        // formType: "Rename notebook",
    }
}


const mapDispatchToProps = dispatch => ({
    fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
    deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId))
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModalContainer)
