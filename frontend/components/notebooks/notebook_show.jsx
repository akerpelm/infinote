import React, { Component } from 'react'

export class NotebookShow extends Component {
 
    constructor(props) {
        super(props)
    
        this.state = props.notebook
    }
    
    componentDidMount() {
        this.props.fetchNotebook(this.props.notebook.id)
    }
    render() {
        debugger
        return (
            <div>
                <h3>{this.props.notebook.title}</h3>
                <p>note 1</p>
                <p>note 2</p>
                <p>note 3</p>
                <p>note 4</p>
            </div>
        )
    }
}

export default NotebookShow
