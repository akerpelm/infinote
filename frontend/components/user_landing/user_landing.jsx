import React from 'react'
import { Route, Switch } from 'react-router-dom';
import NotebookShowContainer from '../notebooks/notebook_show_container'
import NotebookIndexContainer from '../notebooks/notebook_index_container'
import EditModalContainer from '../notebooks/modals/edit_modal_container';
import DeleteModalContainer from '../notebooks/modals/delete_modal_container';
import TestContainer from '../notes/test_container';

const UserLanding = () => (
    <div>
        {/* <Switch> */}
        {/* <Route exact path="/test" component={TestContainer} /> */}
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
