// import React from 'react'
// import { updateNotebook, removeErrors, fetchNotebook } from "../../actions/notebook_actions";
// import { connect } from 'react-redux';
// import EditNotebookModal from './edit_notebook_modal'

// class NotebookEditModal extends React.Component {
//     constructor(props) {
//         super(props) 
//     }

//     render() {
//         if (!this.props.notebook) return null;
//         return (
//             <EditNotebookModal
//             action={this.props.action}
//             formType={this.props.formType}
//             notebook={this.props.notebook}
//             removeErrors={this.props.removeErrors}
//             errors={this.props.errors}
//             fetchNotebook={this.props.fetchNotebook}
//             />
//         )
//     }
// }

// const mapStateToProps = (state, ownProps) => {
//     // debugger
// //     return {
// //         notebook: state.entities.notebooks[ownProps.match.params.notebookId],
// //         formType: "Rename",
// //         errors: state.errors.session,
// //     }
// // }
// const mapDispatchToProps = (dispatch) => ({
//     // action: notebook => dispatch(updateNotebook(notebook)),
//     // removeErrors: () => dispatch(removeErrors()),
//     // fetchNotebook: notebook => dispatch(fetchNotebook(notebook))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(NotebookEditModal)



