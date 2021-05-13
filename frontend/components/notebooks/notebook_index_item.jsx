import React from 'react'
import { Link } from 'react-router-dom'




export class NotebookIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }

    
    render() {
        return (
            <tr className='sort-row'>
                <td><Link className='notebook-sort-link' to={`/notebooks/${this.props.notebook.id}`}>{this.props.notebook.title}</Link></td>
                <td>{this.props.user.username || this.props.user.email}</td>
                <td>{this.props.notebook.updatedAt}</td>
                <td className="sort-action-row dropdown">. . .</td>
            </tr>
        )
    }
}

export default NotebookIndexItem
