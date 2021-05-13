import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'
import NotebookIndexContainer from '../notebooks/notebook_index_container'
import NoteIndexContainer from '../notes/note_index_container'


const UserLanding = () => (
    <div className="user_landing">
        <Route exact path="/notes" component={NoteIndexContainer} />
        <Route exact path="/notebooks" component={NotebookIndexContainer} />
    </div>
)

export default UserLanding
