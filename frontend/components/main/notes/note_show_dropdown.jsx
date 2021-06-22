import React, { useEffect, useRef, useState } from "react";
//React Icons
import { FaEllipsisH } from "react-icons/fa";

export const DropdownItem = (props) => {
  const [open, setOpen] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      // if (!menuRef.current.contains(event.target)) {
      setOpen(false);
      // }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="note-dropdown" ref={menuRef}>
      <FaEllipsisH className="ellipsis-icon" onClick={() => setOpen(!open)} />
      {open && props.children}
    </div>
  );
};

export const DropdownMenu = (props) => {
  (DropdownItem) => (props) => {
    return <p>{props.children}</p>;
  };

  //
  return (
    <div>
      <DropdownItem className="note-dropdown-item">
        <div className="note-show-dropdown-item-div">
          <p
            className="note-dropdown-item-delete"
            onMouseDown={() => props.openModal("move-note")}
          >
            Move note
          </p>
          <p
            className="note-dropdown-item-delete"
            onMouseDown={() => props.openModal("tag-delete")}
          >
            Remove tag
          </p>
          <p
            className="note-dropdown-item-delete"
            onMouseDown={() => props.openModal("delete-note")}
          >
            Delete note
          </p>
        </div>
      </DropdownItem>
    </div>
  );
};
