import React from 'react'
import { Link } from 'react-router-dom'
const NoteBookIndexItem = (props) => {
    return (
        <li>
            <Link to={`/notebooks/${props.notebook.id}`} >{props.notebook.title}</Link>
        </li>
    )
}

export default NoteBookIndexItem


// class NotebookIndexItem extends React.Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
             
//         }
//     }
//     render() {
//         return (
//             <li>
//                 <Link to={`/notebooks/${this.props.notebook.id}`} >{this.props.notebook.title}</Link>
//             </li>
//         )
//     }
// }

// export default NotebookIndexItem
