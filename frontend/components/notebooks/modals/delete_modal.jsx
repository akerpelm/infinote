import React, { Component } from 'react'
import { convertToSnakeCase } from '../../../util/snake_case_util'

class DeleteModal extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

   
    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props.deleteNotebook(this.props.notebook.id)
    }

    componentWillUnmount() {
        // debugger
        then(() => this.props.history.push("/notebooks"));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                        <button>Delete Notebook</button>
                </form>
            </div>
        )
    }
}

export default DeleteModal
