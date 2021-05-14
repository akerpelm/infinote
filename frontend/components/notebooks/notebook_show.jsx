import React, { Component } from 'react'
import { BiBook } from 'react-icons/bi'
import { FaEllipsisH } from 'react-icons/fa'
import EditNotebookModal from './edit_notebook_modal_container'
import { Link } from 'react-router-dom'


export class NotebookShow extends Component {
 
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
    }

    toggleActive = () => {
        document.querySelector('.action-dropdown-ul')
            .classList.toggle('active')
    }

    componentDidMount() {
        return (this.props.fetchNotebook(this.props.match.params.notebookId))
    }

    editModal() {
       
        
    }
    render() {
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
                                    <li className="action-dropdown-link">
                                    <Link className="action-dropdown-link" to={`/notebooks/${notebookId}/edit`}>Rename notebook</Link>
                                    </li>
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
                {/* {this.props.notebook.title ? notebookTitle = this.props.notebook.title : ''} */}
            </div>
        )
    }
}

export default NotebookShow
