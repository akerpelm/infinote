import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
moment().format();
//React Icons
import { BiBook } from "react-icons/bi";
import { DropdownMenu } from "./notebook_index_dropdown";
//React Icons
import { AiFillCaretRight } from "react-icons/ai";

export class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { notebook, user, deleteNotebook, openModal } = this.props;
    return (
      <tr className="sort-row">
        <td className="nb-td">
          <Link className="notebook-sort-link" to={`/notebooks/${notebook.id}`}>
            {/* <AiFillCaretRight />{" "} */}
            <BiBook className="notebook-sort-link-notebook" />
            {notebook.title}
          </Link>
        </td>
        <td className="notebook-author">{user.username || user.email}</td>
        <td>{moment().to(notebook.updatedAt)}</td>
        <td className="sort-action-row">
          <div className="index-dropdown-li">
            <DropdownMenu
              notebook={notebook}
              deleteNotebook={deleteNotebook}
              openModal={openModal}
            ></DropdownMenu>
          </div>
        </td>
      </tr>
    );
  }
}

export default NotebookIndexItem;
