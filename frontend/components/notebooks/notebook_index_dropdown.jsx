import React, { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import { openModal } from "../../actions/modal_actions";
import { EditModalContainer } from "./modals/edit_modal_container";

export const DropdownItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="index-dropdown"
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
      <DropdownItem className="index-dropdown-item">
        <div className="index-dropdown-item-div">
          <p
            className="index-notebook-dropdown-item-delete"
            onClick={() => props.deleteNotebook(props.notebook.id)}
          >
            Delete notebook...
          </p>
        </div>
      </DropdownItem>
    </div>
  );
};
