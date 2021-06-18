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
    <DropdownItem className="note-dropdown-item">
      <div className="note-dropdown-item-div">
        <p
          className="note-dropdown-item-update "
          onClick={() => {
            props.openModal("update-notebook");
          }}
        >
          Update notebook...
        </p>
        <p
          className="note-dropdown-item-delete"
          onClick={() => props.openModal("delete-notebook")}
        >
          Delete notebook...
        </p>
      </div>
    </DropdownItem>
  );
};
