import React, { Component } from 'react'
import { BiBook } from 'react-icons/bi'
import { FaEllipsisH } from 'react-icons/fa'


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
    render() {
        return (
            <div className="notebook-show-wrapper">
                <div className="notebook-show-notes">
                    <header className="notebook-show-header">
                        <div className="show-header-title">
                            <span><BiBook /></span>
                            {this.props.notebook ? this.props.notebook.title : null}
                        </div>
                        <div className="notebook-show-subheader">x notes
                            <span className="action-dropdown-button"
                                onClick={this.toggleActive}>
                                <FaEllipsisH className="ellipsis-icon" />
                                <ul className="action-dropdown-ul">
                                    <li>Add new note</li>
                                    <li>Rename notebook</li>
                                    <li>Delete notebook</li>
                                </ul>
                            </span>
                        </div>
                    </header>
                    <div className="notebook-show-collection-wrapper">
                        <ul className="notebook-show-collection">
                            <li onClick={this.handleClick}>
                              <h2 className="notebook-show-note-title">Title</h2>
                              <p>Text here</p>
                              <br />
                              <span>Creation Date</span>
                              <span> Tag </span>
                            </li>
                            <li>note 2</li>
                            <li>note 3</li>
                            <li>note 4</li>
                            <li>note 2</li>
                            <li>note 3</li>
                            <li>note 4</li>
                            <li>note 2</li>
                            <li>note 3</li>
                            <li>note 4</li>

                        </ul>
                    </div>
                 
                </div>
                {/* {this.props.notebook.title ? notebookTitle = this.props.notebook.title : ''} */}
            </div>
        )
    }
}

export default NotebookShow
