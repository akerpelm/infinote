import React, { useState } from "react";
//React Icons
import { FaEllipsisH } from "react-icons/fa";

export const DropdownItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="note-dropdown" onClick={() => setOpen(!open)}>
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
      <DropdownItem className="note-dropdown-item">
        <div className="note-show-dropdown-item-div">
          <p
            className="note-dropdown-item-delete"
            onClick={() => props.openModal("move-note")}
          >
            Move note
          </p>
          <p
            className="note-dropdown-item-delete"
            onClick={() => props.openModal("delete-note")}
          >
            Delete note
          </p>
        </div>
      </DropdownItem>
    </div>
  );
};
