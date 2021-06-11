import React, { useState } from "react";
import {FaEllipsisH} from 'react-icons/fa'

export const DropdownItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown" onClick={() => setOpen(!open)}>
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
            className="dropdown-item-update"
            // onClick={() => props.deleteTag(props.tag.id)}
          >
            Update tag...
          </p>
          <p
            className="dropdown-item-delete"
            onClick={() => props.deleteTag(props.tag.id)}
          >
            Delete tag...
          </p>
        </div>
      </DropdownItem>
    </div>
  );
};
