import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { convertToSnakeCase } from '../../util/snake_case_util'
import { BiBookAdd } from 'react-icons/bi';


// action={this.props.action}
// formType = { this.props.formType }
// post = { post }
// removeErrors = { this.props.removeErrors }
// errors = { this.props.errors }

class NotebookCreateModal extends Component {
    constructor(props) {
        // debugger
        super(props)
        this.state = props.notebook
        this.handleSubmit = this.handleSubmit.bind(this);
    };
    handleChange(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    };

    renderErrors() {
        return (
            <ul className='error-ul'>
                {this.props.errors.map((error, i) => (
                    <li className='error-li' key={`error-${i}`}>{error}</li>
                ))}
            </ul>
        )
    };
    

    componentDidMount() {
        // debugger
        return (this.props.fetchNotebook(this.props.notebook.id))
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(convertToSnakeCase(this.state)).then(() => this.toggleModal())
        this.setState({
            title: ''
        });
    };
    // componentWillUnmount() {
    //     this.props.removeErrors()
    // };
    toggleModal = () => {
        document.querySelector('.modal')
            .classList.toggle('modal-hidden');
        this.props.removeErrors();
    };

    render() {
        
        return (   
            <>
                <div className="modal modal-hidden">
                    <div className="modal-contents">
                        <header className="modal-create-header">
                            <h1 className="modal-create-title">{this.props.formType} notebook
                            <div className="modal-close">
                                <span className= "modal-close-span" onClick={this.toggleModal}>X</span>
                            </div>
                            </h1>
                            <p className="modal-create-info">Notebooks are useful for grouping notes around a common topic. They can be private or shared</p>
                        </header>
                        <form className='modal-create-form' onSubmit={this.handleSubmit}>
                            <label className='modal-name-label'>Name
                            <br />
                            {this.renderErrors()}
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
                <div >
                    <button onClick={this.toggleModal} className='new-notebook-button'>
                        <i ><BiBookAdd className='notebook-icon'/></i>New Notebook
                    </button>
                </div>
                
            </>
        )
    }
}

export default NotebookCreateModal


