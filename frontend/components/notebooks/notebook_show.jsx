import React, { Component } from 'react'

export class NotebookShow extends Component {
 
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
        return (this.props.fetchNotebook(this.props.match.params.notebookId)
)
    }
render() {
        return (
            <div>
                {/* {this.props.notebook.title ? notebookTitle = this.props.notebook.title : ''} */}
                {this.props.notebook ? this.props.notebook.title : null}
                <p>note 1</p>
                <p>note 2</p>
                <p>note 3</p>
                <p>note 4</p>
            </div>
        )
    }
}

export default NotebookShow
