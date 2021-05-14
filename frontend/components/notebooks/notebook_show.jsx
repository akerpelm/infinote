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
            <div className="notebook-show-wrapper">
                <div className="notebook-show-notes">
                    <header className="notebook-show-header">
                    <p>{this.props.notebook ? this.props.notebook.title : null}</p>
                    <br />
                    x notes
                    </header>
                    <p>note 1</p>
                    <p>note 2</p>
                    <p>note 3</p>
                    <p>note 4</p>
                 
                </div>
                {/* {this.props.notebook.title ? notebookTitle = this.props.notebook.title : ''} */}
            </div>
        )
    }
}

export default NotebookShow
