import React, { useState } from "react";
//React Icons
import { FaEllipsisH } from "react-icons/fa";

export const DropdownItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="tag-dropdown" onClick={() => setOpen(!open)}>
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
      <DropdownItem className="tag-dropdown-item">
        <div className="tag-dropdown-item-div">
          <p
            className="tag-dropdown-item-delete"
            onClick={() => props.deleteTag(props.tag.id)}
          >
            Delete tag...
          </p>
        </div>
      </DropdownItem>
    </div>
  );
};
