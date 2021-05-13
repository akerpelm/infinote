import React from 'react'
import { Route, Switch } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import NotebookIndexContainer from '../notebooks/notebook_index_container'
import NotesIndexContainer from '../notes/note_index_container'
import NotebookShowContainer from '../notebooks/notebook_show_container'

const UserLanding = () => (
    <div className="user_landing">
        <Switch>
            <Route path="/notebooks/:notebookId" component={NotebookShowContainer}/>
        </Switch>

        <Route exact path="/notebooks" component={NotebookIndexContainer}/>
        <Route exact path="/notes" component={NotesIndexContainer} />
        {/* <Route exact path="/notebooks/:notebookId" component={NotebookShowContainer} */}
        {/* <Route exact path="/notebooks" component={NotebookIndexContainer} />   */}
    </div>
)

export default UserLanding
