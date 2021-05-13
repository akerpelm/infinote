import React from 'react'
import { Link } from 'react-router-dom'



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
                hi there you made it
                
            </div>
        )
    }
}

export default NotebookIndex


// notebook = { notebook } key = { idx } > Notebooks
