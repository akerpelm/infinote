import React from 'react'
import { Route, Switch } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import NotebookIndexContainer from '../notebooks/notebook_index_container'
import NotesIndexContainer from '../notes/note_index_container'
import NotebookShowContainer from '../notebooks/notebook_show_container'
// import EditModal from '../notebooks/modals/edit_modal';
import ExpandedSideNavContainer from '../side_nav/expanded_side_nav_container'
import ReducedSideNavContainer from '../side_nav/reduced_side_nav_container';
// import side_nav_container from '../side_nav/side_nav_container';

const UserLanding = () => (
    <div>
        <Route exact path="/notebooks/:notebookId/notes/:noteId" component={NotebookShowContainer}/>
        <Route exact path="/notebooks/:notebookId/" component={NotebookShowContainer}/>
        {/* <Route exact path="/notebooks" component={ReducedSideNavContainer}/> */}
        <Route exact path="/notebooks" component={NotebookIndexContainer}/>

        <Route exact path="/notes" component={NotesIndexContainer} />
        {/* <Route exact path="/" /> */}
     
    </div>
)

export default UserLanding
