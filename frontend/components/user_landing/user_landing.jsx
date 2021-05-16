import React from 'react'
import { Route, Switch } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import NotebookIndexContainer from '../notebooks/notebook_index_container'
import NotesIndexContainer from '../notes/note_index_container'
import NotebookShowContainer from '../notebooks/notebook_show_container'
import EditNotebookModal from '../notebooks/edit_notebook_modal_container'
import EditModal from '../notebooks/modals/edit_modal';
import SideNavContainer from '../side_nav/side_nav_container'

const UserLanding = () => (
    <div className="user_landing">
        <Switch>
            <Route path="/notebooks/:notebookId" component={SideNavContainer} />
            <Route component={SideNavContainer} />
            {/* <Route exact path="/notebooks/:notebookId/edit" component={EditNotebookModal}/> */}
        </Switch>

        {/* <Route exact path="/notebooks/:notebookId" component={EditModal}/> */}
        <Route exact path="/notebooks" component={NotebookIndexContainer}/>
        <Route exact path="/notebooks/:notebookId" component={NotebookShowContainer}/>
        <Route exact path="/notes" component={NotesIndexContainer} />
        <Route exact path="/" />
        {/* <Route exact path="/notebooks/:notebookId" component={NotebookShowContainer} */}
        {/* <Route exact path="/notebooks" component={NotebookIndexContainer} />   */}
    </div>
)

export default UserLanding
