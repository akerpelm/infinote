import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteNotebook, fetchNotebook, fetchNotebooks } from '../../../actions/notebook_actions';

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
                    notebook={this.props.notebook}
                    fetchNotebooks={this.props.fetchNotebooks} />

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        notebook: state.entities.notebooks[ownProps.match.params.notebookId],
    }
}


const mapDispatchToProps = dispatch => ({
    fetchNotebook: (notebookId) => dispatch(fetchNotebook(notebookId)),
    fetchNotebooks: () => dispatch(fetchNotebooks()),
    deleteNotebook: (notebookId) => dispatch(deleteNotebook(notebookId))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModalContainer)
