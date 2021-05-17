import React, { Component } from 'react'
import { convertToSnakeCase } from '../../../util/snake_case_util'
import { withRouter } from "react-router";


class EditModal extends Component {
    constructor(props) {
        super(props)
        // debugger;
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
        this.props.updateNotebook(this.state)
    }
    
    // componentDidMount() {
    //     debugger
    //     this.props.fetchNotebook(this.props.match.params.notebookId);
    // }
        // this.setState({notebook: this.props.notebook})
    // }
    
    render() {
        // debugger
        // let title = this.state.title ? this.state.title : 'undefined';
        // let title = this.state.title ? this.state.title : undefined;
        // debugger
        return (
            <div>
                <h3>{this.props.formType}</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Name
                        <input type="text" value={this.state.title} onChange={this.handleChange('title')}/>
                        <button>Submit</button>
                    </label>

                </form>
            </div>
        )
    }
}

export default withRouter(EditModal)
