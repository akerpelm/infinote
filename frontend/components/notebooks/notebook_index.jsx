import React from 'react'
import { Link } from 'react-router-dom'
import NoteBookIndexItem from './notebook_index_item'



class NotebookIndex extends React.Component {
    constructor(props) {
        super(props)    }

    componentDidMount() {
        this.props.fetchNotebooks()
    }

  
    
    render() {
        return (
            <div>
                <header>

                <h3>Notebooks</h3>
                <br />
                {this.props.notebooks.length === 1 ? `${this.props.notebooks.length} notebook` : `${this.props.notebooks.length} notebooks` }
                <Link to={`/notebooks/create`}><button>New Notebook</button></Link>      
                </header>
                <br />
                {this.props.notebooks.map( notebook => (
                     <NoteBookIndexItem notebook={notebook} key={notebook.id}/>
                ))}
            </div>
        )
    }
}

export default NotebookIndex


// notebook = { notebook } key = { idx } > Notebooks
