import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BiBookAdd } from 'react-icons/bi';
import { createNotebook, removeErrors } from '../../../actions/notebook_actions'
import { modalFalse } from '../../../actions/modal_actions'
import { convertToSnakeCase } from '../../../util/snake_case_util'
// import { convertToSnakeCase } from '../../../util/snake_case_util'

class CreateModal extends Component {
    constructor(props) {
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

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(convertToSnakeCase(this.state)).then(() => this.toggleModal())
        this.setState({
            title: ''
        });
    };
    componentWillUnmount() {
        this.props.removeErrors()
    };
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
                            <h1 className="modal-create-title">Create new notebook
                            <div className="modal-close">
                                    <span className="modal-close-span" onClick={this.toggleModal}>X</span>
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
                                    className="modal-title-input" />
                            </label>
                            <div className="modal-buttons">
                                <input className="modal-cancel" type='submit' onClick={this.toggleModal} value='Cancel' />
                                <input className="modal-submit" type="submit" value="Continue" />
                            </div>
                        </form>
                    </div>
                </div>
                <div >
                    <button onClick={this.toggleModal} className='new-notebook-button'>
                        <i ><BiBookAdd className='notebook-icon' /></i>New Notebook
                    </button>
                </div>

            </>
        )
    }
}

const mapStateToProps = state => ({
    notebook: {
        title: '',
        authorId: state.session.id,
    },
    formType: "create",
    errors: state.errors.session,

})

const mapDispatchToProps = dispatch => ({
    action: notebook => dispatch(createNotebook(notebook)),
    removeErrors: () => dispatch(removeErrors()),
    modalFalse: () => dispatch(modalFalse())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateModal)


