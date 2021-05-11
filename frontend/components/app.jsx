import React from 'react';
import { Route, Switch } from 'react-router'
import LoginFormContainer from './session/login_form_container'
import RegistrationFormContainer from './session/registration_form_container'
import SplashContainer from './splash/splash_container'
import { AuthRoute, ProtectedRoute, SplashRoute } from '../util/route_util'
import NoteIndexContainer from './notes/note_index_container'


const App = () => {
    return (
        <div>
            <Switch>
                <AuthRoute path="/register" component={RegistrationFormContainer}/>
                <AuthRoute path="/login" component={LoginFormContainer}/>
                <ProtectedRoute path="/notes" component={NoteIndexContainer} />
                <Route exact path="/" component={SplashContainer}/>
            </Switch>
        </div>
    )
}

export default App;
