import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NotebookForm from './notebook_form';
import { createNotebook } from '../../actions/notebook_actions';

const mapStateToProps = (state) => ({
    post: {
        title: '',
    },
    formType: "Create a new notebook"
})