import React from 'react'
import { Link } from 'react-router-dom'
import NoteBookIndexItem from './notebook_index_item'



class NotebookIndex extends React.Component {
    constructor(props) {
        console.log(props.notebooks)
        super(props)
    }

    componentDidMount() {
        this.props.fetchNotebooks()
    }
    
    render() {
        return (
            <div>
                {this.props.notebooks.map( notebook => (
                     <NoteBookIndexItem notebook={notebook} key={notebook.id}/>
                ))}          
                test123
            </div>
        )
    }
}

export default NotebookIndex


// notebook = { notebook } key = { idx } > Notebooks
