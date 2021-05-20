import React from "react";
import { Route, Switch } from "react-router-dom";
import NotebookShowContainer from "../notebooks/notebook_show_container";
import NotebookIndexContainer from "../notebooks/notebook_index_container";
import EditModalContainer from "../notebooks/modals/edit_modal_container";
import DeleteModalContainer from "../notebooks/modals/delete_modal_container";

const UserLanding = () => (
  <div>
    {/*  */}
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
    </Switch>
    {/* <Route
      exact
      path="/notebooks/:notebookId/"
      component={EditModalContainer}
    />
    <Route
      exact
      path="/notebooks/:notebookId/"
      component={DeleteModalContainer}
    /> */}
  </div>
);

export default UserLanding;
