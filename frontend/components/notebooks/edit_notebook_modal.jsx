// import React from 'react'
// import { updateNotebook, removeErrors, fetchNotebook } from "../../../actions/notebook_actions";
// import { BiBookAdd } from 'react-icons/bi';
// import { convertToSnakeCase } from '../../../util/snake_case_util'
// import { connect } from 'react-redux';



// class NotebookEditModal extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = this.props.notebook
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     componentDidMount() {
//         debugger
//         this.props.fetcNotebook(this.props.notebook.id)
//         this.setState({
//             title: this.props.notebook.title,
//             id: this.props.notebook.id
//         })
//     }
//     handleChange(field) {

//         return e => this.setState({ [field]: e.target.value })
//     };

//     renderErrors() {
//         return (
//             <ul className='error-ul'>
//                 {this.props.errors.map((error, i) => (
//                     <li className='error-li' key={`error-${i}`}>{error}</li>
//                 ))}
//             </ul>
//         )
//     };

//     handleSubmit(e) {
//         e.preventDefault();
//         this.props.action(convertToSnakeCase(this.state)).then(() => this.toggleModal())
//     };

//     toggleModal = () => {
//         document.querySelector('.modal')
//             .classList.toggle('modal-hidden');
//         this.props.removeErrors();
//     };


//     render() {
//         if (!this.props.notebook) return null;
//         const { title } = this.state;
//         return (
//             <>
//                 <div className="modal modal-hidden">
//                     <div className="modal-contents">
//                         <header className="modal-create-header">
//                             <h2 className="modal-create-title">Rename notebook
//                             <div className="modal-close">
//                                     <span className="modal-close-span" onClick={this.toggleModal}>X</span>
//                                 </div>
//                             </h2>
//                         </header>
//                         <form className='modal-create-form' onSubmit={this.handleSubmit}>
//                             <label className='modal-name-label'>Name
//                             <br />
//                                 {this.renderErrors()}
//                                 <input
//                                     // value={this.state.title}
//                                     value={title}
//                                     onChange={this.handleChange('title')} placeholder="Notebook name"
//                                     className="modal-title-input" />
//                             </label>
//                             <div className="modal-buttons">
//                                 <input className="modal-cancel" type='submit' onClick={this.toggleModal} value='Cancel' />
//                                 <input className="modal-submit" type="submit" value="Continue" />
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//                 <div >
//                     <button onClick={this.toggleModal} className='new-notebook-button'>Rename
//                         <i ><BiBookAdd className='notebook-icon' /></i>{this.props.formType} Notebook
//                     </button>
//                 </div>

//             </>
//         )
//     }
// }

// const mapStateToProps = (state, ownProps) => {
//     let notebook = ownProps.match ? state.entities.notebooks[ownProps.match.params.notebookId] : null
//     debugger

//     return {
//         notebook,
//         errors: state.errors.session,
//         formType: "Rename",
//         authorId: state.session.id,
//     }
// }
// const mapDispatchToProps = (dispatch) => ({
//     action: notebook => dispatch(updateNotebook(notebook)),
//     removeErrors: () => dispatch(removeErrors()),
//     fetchNotebook: notebook => dispatch(fetchNotebook(notebook))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(NotebookEditModal)



