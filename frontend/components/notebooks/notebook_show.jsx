import React, { Component } from 'react'
import { BiBook } from 'react-icons/bi'
import { FaEllipsisH } from 'react-icons/fa'
import EditNotebookModal from './edit_notebook_modal'
import DeleteModal from './modals/delete_modal'
import { DeleteModalContainer } from './modals/delete_modal_container'
import EditModal from './modals/edit_modal'
import EditModalContainer from './modals/edit_modal_container'

// import { Link } from 'react-router-dom'


export class NotebookShow extends Component {
 
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = props.notebook

    }


    handleClick(e) {
        e.preventDefault();
    }

    toggleActive = () => {
        document.querySelector('.action-dropdown-ul')
            .classList.toggle('active')
    }

    componentDidMount() {
        this.props.fetchNotebook(this.props.match.params.notebookId)
    }

    render() {
        // debugger
        let editModal = <EditModalContainer
            notebook={this.props.notebook}
            removeErrors={this.props.removeErrors}
            errors={this.props.errors}
            notebookId={this.props.match.params.notebookId} />
        let deleteModal = <DeleteModal 
            history={this.props.history} 
            deleteNotebook={this.props.deleteNotebook} 
            notebookId={this.props.match.params.notebookId}/>

        let title =  this.props.notebook ? this.props.notebook.title : null 
        

        return (
            <div className="notebook-show-wrapper">
                <div className="notebook-show-notes">
                    <header className="notebook-show-header">
                        <div className="show-header-title">
                            <span><BiBook /></span>
                            {title}
                        </div>
                        <div className="notebook-show-subheader">x notes
                        {editModal}
                            <span className="action-dropdown-button"
                                onClick={this.toggleActive}>
                                <FaEllipsisH className="ellipsis-icon" />

                                <ul className="action-dropdown-ul">
                                    <li>Add new note</li>
                                    <li className="action-dropdown-link">{deleteModal}</li>
                                    <li className="action-dropdown-link"></li>
                                </ul>
                            </span>
                        </div>
                    </header>
                    <div className="notebook-show-collection-wrapper">
                        <ul className="notebook-show-collection">
                            <li >
                              <h2 className="notebook-show-note-title">Title</h2>
                              <p>Text here</p>
                              <br />
                              <span>Creation Date</span>
                              <span> Tag </span>
                            </li>
                            <li>note 2</li>
                        </ul>
                    </div> 
                </div>
            </div>
        )
    }
}

export default NotebookShow
