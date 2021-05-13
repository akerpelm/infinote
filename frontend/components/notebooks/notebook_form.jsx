import React, { Component } from 'react'
import { Link } from 'react-router-dom'

 class NotebookForm extends Component {
     constructor(props) {
        //  debugger
         super(props)
         this.state = props.notebook
         this.handleSubmit = this.handleSubmit.bind(this);
     }
     handleChange(field) {
        //  debugger
         return e => this.setState({
             [field] : e.target.value
         })
     }

     handleSubmit(e) {
        //  debugger
         e.preventDefault
         this.props.action(this.state).then(() => this.props.history.push("/notebooks"))
     }

     
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Create new notebook</h3>
                    <p>Notebooks are useful for grouping notes around a common topic. They can be private or shared</p>
                    <label>Name
                        <input  value={this.state.title} onChange={this.handleChange('title')}/>
                        <Link to="/notebooks">Cancel</Link>
                            <button type="submit">Continue</button>
                       

                    </label>

                </form>

            </div>
        )
    }
}

export default NotebookForm
