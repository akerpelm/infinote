import React, { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { openModal } from "../../actions/modal_actions";
import { EditModalContainer } from "./modals/edit_modal_container";
import { withRouter } from "react-redux";

export const DropdownItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="dropdown"
      onClick={() => setOpen(!open)}
      // onBlur={console.log("blur")}
    >
      <FaEllipsisH className="ellipsis-icon" />

      {open && props.children}
    </div>
  );
};

export const DropdownMenu = (props) => {
  (DropdownItem) => (props) => {
    return <p>{props.children}</p>;
  };
  return (
    <div>
      <DropdownItem className="dropdown-item">
        <div className="dropdown-item-div">
          <p
            className="test-dropdown-item-update "
            onClick={() => {
              props.openModal("update-notebook");
            }}
          >
            Update notebook...
          </p>
          <p
            className="notebook-dropdown-item-delete"
            onClick={() =>
              props
                .deleteNotebook(props.notebook.id)
                .then(props.history.push("/notebooks"))
            }
          >
            Delete notebook...
          </p>
        </div>
      </DropdownItem>
    </div>
  );
};
