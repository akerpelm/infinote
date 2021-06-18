import React from "react";
import { Route } from "react-router-dom";
import { Switch } from "react-router";
import Home from "./home/home";

import NotebookIndexContainer from "./notebooks/notebook_index_container";
import Modal from "./modal/modal";
import NotebookShowContainer from "./notebooks/notebook_show_container";
import TagsIndexContainer from "./tags/tags_index_container";
import TagShowContainer from "./tags/tag_show_container";

const Main = () => {
  return (
    <div className="main">
      <Modal />
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
        <Route
          exact
          path="/tags/:id/notes/:noteId"
          component={TagShowContainer}
        />
        <Route exact path="/tags/:id" component={TagShowContainer} />
        <Route exact path="/notebooks" component={NotebookIndexContainer} />
        <Route exact path="/notes" component={NotebookShowContainer} />
        <Route exact path="/tags" component={TagsIndexContainer} />
        <Route exact path="/home" component={Home} />;
      </Switch>
    </div>
  );
};

export default Main;
