import React from 'react';
import { Route } from 'react-router'
import LoginFormContainer from './session/login_form_container'
import RegistrationFormContainer from './session/registration_form_container'
import Splash from './splash/splash'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import NoteTest from './notes/note_test'


const App = () => {
    return (
        <div>
            <h3>infiNote</h3>
            <Route exact path="/" component={Splash}/>
            <AuthRoute path="/login" component={LoginFormContainer}/>
            <AuthRoute path="/register" component={RegistrationFormContainer}/>
            <ProtectedRoute path="/notes" component={NoteTest} />
        </div>
    )
}

export default App;
