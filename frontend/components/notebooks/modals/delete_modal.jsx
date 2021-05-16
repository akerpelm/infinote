import React, { Component } from 'react'
import { convertToSnakeCase } from '../../../util/snake_case_util'

class DeleteModal extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

   
    handleSubmit(e) {
        e.preventDefault();
        this.props.deleteNotebook(this.props.notebookId).then(() => this.props.history.push("/notebooks"))
    }

    // componentDidMount() {
    //     // debugger
    //     this.state = this.props.notebook
    // }

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
