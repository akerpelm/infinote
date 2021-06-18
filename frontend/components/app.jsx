import React from "react";
import { Switch } from "react-router";

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash/splash";
import LoginFormContainer from "./session/login_form_container";
import RegistrationFormContainer from "./session/registration_form_container";
import Main from "./main/main";

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute path="/register" component={RegistrationFormContainer} />
        <AuthRoute path="/login" component={LoginFormContainer} />
        <ProtectedRoute path="/notes" component={Main} />
        <ProtectedRoute path="/notebooks" component={Main} />
        <ProtectedRoute path="/notebooks/:notebookId" component={Main} />
        <ProtectedRoute exact path="/home" component={Main} />
        <ProtectedRoute exact path="/tags" component={Main} />
        <ProtectedRoute exact path="/tags/:tagId" component={Main} />
        <ProtectedRoute
          exact
          path="/notebooks/:notebookId/notes/"
          component={Main}
        />
        <ProtectedRoute exact path="/tags/:id/notes/:noteId" component={Main} />
        <AuthRoute exact path="/" component={Splash} />
      </Switch>
    </div>
  );
};

export default App;
