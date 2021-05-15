import React from 'react';
import { Route, Switch } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Splash from './splash/splash';
import LoginFormContainer from './session/login_form_container';
import RegistrationFormContainer from './session/registration_form_container';
import UserLanding from './user_landing/user_landing'

const App = () => {
    return (
        <div>
            <Switch>
                <AuthRoute path="/register" component={RegistrationFormContainer}/>
                <AuthRoute path="/login" component={LoginFormContainer}/>
                <ProtectedRoute path="/notes" component={UserLanding} />
                <ProtectedRoute path="/notebooks" component={UserLanding} />
                <ProtectedRoute path="/notebooks/:notebookId" component={UserLanding} />
                <AuthRoute exact path="/" component={Splash}/>
            </Switch>
        </div>
    )
}

export default App;
