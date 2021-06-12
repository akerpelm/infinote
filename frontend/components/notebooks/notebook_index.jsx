import React from "react";
import NotebookIndexItem from "./notebook_index_item";
import { BsSearch } from "react-icons/bs";
import CreateModal from "./modals/create_modal";
import ReducedSideNavContainer from "../side_nav/reduced_side_nav_container";

class NotebookIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  render() {
    return (
      <div className="notebook-index-wrapper">
        <div className="reduced-side-nav">
          <ReducedSideNavContainer />
        </div>
        <div className="notebook-index">
          <div className="notebook-header">
            <h3 className="notebooks-title">Notebooks</h3>
            {/* <div className="notebooks-search-bar-div">
              <input
                className="notebooks-search-bar"
                type="input"
                placeholder="Find Notebooks..."
              />
              <BsSearch className="notebooks-search-bar-icon" />
            </div> */}
          </div>
          <header className="notebook-count-new">
            <p className="notebook-count">
              {this.props.notebooks.length === 1
                ? `${this.props.notebooks.length} notebook`
                : `${this.props.notebooks.length} notebooks`}
            </p>
            <CreateModal />
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
              {this.props.notebooks.map((notebook) => (
                <NotebookIndexItem
                  notebook={notebook}
                  user={this.props.user}
                  key={notebook.id}
                  deleteNotebook={this.props.deleteNotebook}
                  openModal={this.props.openModal}
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
