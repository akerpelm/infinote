import React from 'react'
import { Link } from 'react-router-dom'




export class NotebookIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }


    toggleActive = () => {
        document.querySelector('.action-dropdown-ul')
            .classList.toggle('active')
    }

    
    render() {
        return (
            // <div>

            <tr className='sort-row'>
                <td><Link className='notebook-sort-link' to={`/notebooks/${this.props.notebook.id}`}>{this.props.notebook.title}</Link></td>
                <td className="notebook-author">{this.props.user.username || this.props.user.email}</td>
                <td>{this.props.notebook.updatedAt}</td>
                <td className="sort-action-row">
                    <span className="action-dropdown-button"
                    onClick={this.toggleActive}>...</span>
                    <ul className="action-dropdown-ul">
                        <li>Add new note</li>
                        <li>Rename notebook</li>
                        <li>Delete notebook</li>
                    </ul>
                </td>
            </tr>
                  
        )
    }
}

export default NotebookIndexItem

