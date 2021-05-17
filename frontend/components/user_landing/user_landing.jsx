import React from 'react'
import { Route, Switch } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import NotebookIndexContainer from '../notebooks/notebook_index_container'
import NotesIndexContainer from '../notes/note_index_container'
import NotebookShowContainer from '../notebooks/notebook_show_container'
import EditModalContainer from '../notebooks/modals/edit_modal_container';
import DeleteModalContainer from '../notebooks/modals/delete_modal_container';
import ExpandedSideNavContainer from '../side_nav/expanded_side_nav_container'
import ReducedSideNavContainer from '../side_nav/reduced_side_nav_container';
// import side_nav_container from '../side_nav/side_nav_container';

const UserLanding = () => (
    <div>
        {/* <Switch> */}
        <Route exact path="/notebooks/:notebookId/notes/:noteId" component={NotebookShowContainer}/>
        <Route exact path="/notebooks/:notebookId/" component={NotebookShowContainer}/>
        <Route exact path="/notebooks" component={NotebookIndexContainer}/>
        {/* <Route ext path ="/user/:userId" component={UserUpdateContainer}/> */}
        {/* </Switch> */}
        <Route exact path="/notebooks/:notebookId/" component={EditModalContainer}/>
        <Route exact path="/notebooks/:notebookId/" component={DeleteModalContainer}/>
        {/* <Route exact path="/notebooks" component={ReducedSideNavContainer}/> */}
        {/* render all notes, then pass them to notebook show hwere notebook is just every note with title notes */}

        <Route exact path="/notes" component={NotebookShowContainer} />
        {/* <Route exact path="/" /> */}
     
    </div>
)

export default UserLanding
