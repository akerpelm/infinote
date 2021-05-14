import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { convertToSnakeCase } from '../../util/snake_case_util'
import classnames from 'classnames'
//styled in notebooke_index

class CreateFormModal extends Component {
    constructor(props) {
        super(props)
        // debugger
        this.state = props.notebook
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(field) {
        //  debugger
        return e => this.setState({
            [field]: e.target.value
        })
    }
    // renderErrors() {
    //     return (
    //         <ul className='error-ul'>
    //             {this.props.errors.map((error, i) => (
    //                 <li className='error-li' key={`error-${i}`}>{error}</li>
    //             ))}
    //         </ul>
    //     )
    // }

    handleSubmit(e) {
        //  debugger
        e.preventDefault
        this.props.action(convertToSnakeCase(this.state)).then(() => this.toggleModal())
        this.setState({
            title: ''
        })
         //this.props.history.push("/notebooks"))
    }

    componentWillUnmount() {
        this.props.removeErrors()
    }


    toggleModal = () => {
        document.querySelector('.modal')
            .classList.toggle('modal-hidden')
    }
    
    render() {
        return (
            <>
            <div className="modal modal-hidden">
                <div className="modal-contents">
                    <header className="modal-create-header">
                    <h1 className="modal-create-title">Create new notebook
                        <div className="modal-close">
                            <span className= "modal-close-span" onClick={this.toggleModal}>X</span>
                        </div>
                    </h1>
                    <p className="modal-create-info">Notebooks are useful for grouping notes around a common topic. They can be private or shared</p>
                    </header>
                <form className='modal-create-form' onSubmit={this.handleSubmit}>
                    {/* {this.renderErrors()} */}
                    <label className='modal-name-label'>Name
                        <br />
                        <input 
                        value={this.state.title} 
                        onChange={this.handleChange('title')} placeholder="Notebook name"
                        className="modal-title-input"/>
                        </label>
                        <div className="modal-buttons">
                            <input className="modal-cancel" type='submit' onClick={this.toggleModal} value='Cancel'/>
                            <input className="modal-submit" type="submit" value="Continue"/>
                        </div>
                    </form>
                </div>
            </div>
                <button onClick={this.toggleModal} className='new-notebook-button'>New Notebook</button>
                </>
        )
    }
}

export default CreateFormModal


