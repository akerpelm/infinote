import React, { Component } from 'react'
import { BiBook } from 'react-icons/bi'
import { FaEllipsisH } from 'react-icons/fa'
import EditNotebookModal from './edit_notebook_modal'
import EditModal from './modals/edit_modal'
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
        let title =  this.props.notebook ? this.props.notebook.title : null 
        let notebookId = this.props.notebook ? this.props.notebook.id : null
        

        return (
            <div className="notebook-show-wrapper">
                <div className="notebook-show-notes">
                    <header className="notebook-show-header">
                        <div className="show-header-title">
                            <span><BiBook /></span>
                            {title}
                        </div>
                        <div className="notebook-show-subheader">x notes
                            <span className="action-dropdown-button"
                                onClick={this.toggleActive}>
                                <FaEllipsisH className="ellipsis-icon" />
                                <ul className="action-dropdown-ul">
                                    <li>Add new note</li>
                                    <li>Rename note</li>
                                    {/* <EditModal /> */}
                                    {/* <li className="action-dropdown-link"> */}
                                        {/* <EditNotebookModal
                                            action={this.props.action}
                                            formType={this.props.formType}
                                            notebook={this.props.notebook}
                                            removeErrors={this.props.removeErrors}
                                            errors={this.props.errors}
                                            fetchNotebook={this.props.fetchNotebook}
                                            notebookId={this.props.match.params.notebookId}
                                            title={title}
                                            state={this.state}
                                            setState={this.setState}
                                            />  */}
                                    {/* </li> */}
                                    <li>Delete notebook</li>
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
