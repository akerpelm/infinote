import React from "react";
import NotebookIndexItem from "./notebook_index_item";
import ReducedNavContainer from "../navbar/reduced_nav_container";
//React Icons
import { RiBookletFill } from "react-icons/ri";


class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchNotebooks();
  }
  render() {
    const { notes, notebooks, openModal, user, deleteNotebook } = this.props;
    const length =
      notebooks.length === 1
        ? `${notebooks.length} notebook`
        : `${notebooks.length} notebooks`;

    return (
      <div className="notebook-index-wrapper">
        <div className="reduced-side-nav">
          <ReducedNavContainer />
        </div>
        <div className="notebook-index">
          <div className="notebook-header">
            <h3 className="notebooks-title">Notebooks</h3>
          </div>
          <header className="notebook-count-new">
            <p className="notebook-count">{length}</p>
            <button
              className="new-notebook-button"
              onClick={() => openModal("create-note")}
            >
              <RiBookletFill className="notebook-icon" />
              New Notebook
            </button>
          </header>
          <table className="notebook-table">
            <thead className="notebook-table-head">
              <tr className="notebook-sort">
                <th className="sort-feature sort-title">TITLE</th>
                <th className="sort-feature sort-cb">CREATED BY</th>
                <th className="sort-feature sort-update">UPDATED</th>
                <th className="sort-feature sort-action">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="sort-body ">
              {notebooks.map((notebook) => (
                <NotebookIndexItem
                  notebook={notebook}
                  user={user}
                  key={notebook.id}
                  deleteNotebook={deleteNotebook}
                  openModal={openModal}
                  notes={notes}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default NotebookIndex;
