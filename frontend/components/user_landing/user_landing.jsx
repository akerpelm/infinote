import React from 'react'
import { Route, Switch } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import NotebookIndexContainer from '../notebooks/notebook_index_container'
import NotesIndexContainer from '../notes/note_index_container'
import NotebookShowContainer from '../notebooks/notebook_show_container'
import CreateNotebookFormContainer from '../notebooks/notebook_modal_form_container'
import EditNotebookModal from '../notebooks/edit_notebook_modal_container'

const UserLanding = () => (
    <div className="user_landing">
        <Switch>
            <Route exact path="/notebooks/:notebookId/edit" component={EditNotebookModal}/>
            <Route exact path="/notebooks/:notebookId" component={NotebookShowContainer}/>
            <Route exact path="/notebooks" component={NotebookIndexContainer}/>
        </Switch>

        <Route exact path="/notes" component={NotesIndexContainer} />
        <Route exact path="/" />
        {/* <Route exact path="/notebooks/:notebookId" component={NotebookShowContainer} */}
        {/* <Route exact path="/notebooks" component={NotebookIndexContainer} />   */}
    </div>
)

export default UserLanding
