import React from 'react';
import { Route, Switch } from 'react-router'
import LoginFormContainer from './session/login_form_container'
import RegistrationFormContainer from './session/registration_form_container'
import Splash from './splash/splash'
import { AuthRoute, ProtectedRoute } from '../util/route_util'
import NoteIndexContainer from './notes/note_index_container'


const App = () => {
    return (
        <div>
            <h3>infiNote</h3>
            <Switch>
                <AuthRoute path="/register" component={RegistrationFormContainer}/>
                <AuthRoute path="/login" component={LoginFormContainer}/>
                <ProtectedRoute path="/notes" component={NoteIndexContainer} />

            </Switch>
            <Route exact path="/" component={Splash}/>
        </div>
    )
}

export default App;
