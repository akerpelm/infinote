import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import NotebookForm from './notebook_form';
import { createNotebook } from '../../actions/notebook_actions';

const mapStateToProps = (state) => {
    // debugger
    return {
        notebook: {
            title: '',
            author_id: state.session.id,
            // works with author_id, find way to switch between camel/snake
            // fix this its hideous
        },
        formType: "create"
    }
}

const mapDispatchToProps = dispatch => ({
    action: notebook => dispatch(createNotebook(notebook))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotebookForm)

