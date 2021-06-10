import React from "react";
import { Route, Switch } from "react-router-dom";
import NotebookShowContainer from "../notebooks/notebook_show_container";
import NotebookIndexContainer from "../notebooks/notebook_index_container";
import TagsIndexContainer from "../tags/tags_index_container";

const UserLanding = () => (
  <div>
    <Switch>
      <Route
        exact
        path="/notebooks/:notebookId/notes/:noteId"
        component={NotebookShowContainer}
      />
      <Route
        exact
        path="/notebooks/:notebookId/"
        component={NotebookShowContainer}
      />
      <Route exact path="/notebooks" component={NotebookIndexContainer} />
      <Route exact path="/notes" component={NotebookShowContainer} />
      <Route exact path="/tags" component={TagsIndexContainer} />
    </Switch>
  </div>
);

export default UserLanding;
