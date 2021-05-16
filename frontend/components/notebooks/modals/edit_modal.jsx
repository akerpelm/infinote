import React, { Component } from 'react'
import { convertToSnakeCase } from '../../../util/snake_case_util'

class EditModal extends Component {
    constructor(props) {
        super(props)
        this.state = props.notebook
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(field) {
        return e => this.setState({
            [field] : e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        let notebook = this.state
        this.props.updateNotebook(convertToSnakeCase(notebook))
    }

    // componentDidMount() {
    //     // debugger
    //     this.state = this.props.notebook
    // }
    
    render() {
        let title = this.state.title ? this.state.title : ''
        return (
            <div>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                        <input type="text" value={title} onChange={this.handleChange('title')}/>
                        <button>Submit</button>
                    </label>

                </form>
            </div>
        )
    }
}

export default EditModal
