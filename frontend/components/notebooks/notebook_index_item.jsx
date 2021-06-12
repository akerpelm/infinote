import React from "react";
import { Link } from "react-router-dom";
import { FaEllipsisH } from "react-icons/fa";
import { BiBook } from "react-icons/bi";
import { AiFillCaretRight } from "react-icons/ai";
import moment from "moment";
import { DropdownMenu } from "./notebook_index_dropdown";
moment().format();
import { withRouter } from "react-router";

export class NotebookIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleActive = () => {
    document.querySelector(".action-dropdown-ul").classList.toggle("active");
  };

  render() {
    return (
      <tr className="sort-row">
        <td className="nb-td">
          <Link
            className="notebook-sort-link"
            to={`/notebooks/${this.props.notebook.id}`}
          >
            {/* <AiFillCaretRight />{" "} */}
            <BiBook className="notebook-sort-link-notebook" />
            {this.props.notebook.title}
          </Link>
        </td>
        <td className="notebook-author">
          {this.props.user.username || this.props.user.email}
        </td>
        <td>
          {/* {this.props.notebook.updatedAt} */}
          {moment().to(this.props.notebook.updatedAt)}
        </td>
        <td className="sort-action-row">
          {/* <span className="action-dropdown-button" onClick={this.toggleActive}> */}
          {/* <FaEllipsisH className="ellipsis-icon" /> */}
          <div className="index-dropdown-li">
            <DropdownMenu
              notebook={this.props.notebook}
              deleteNotebook={this.props.deleteNotebook}
              openModal={this.props.openModal}
            ></DropdownMenu>
          </div>
          {/* </span> */}
        </td>
      </tr>
    );
  }
}

export default NotebookIndexItem;
