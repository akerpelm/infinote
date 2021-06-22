import React, { useState, useRef, useEffect } from "react";
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
  return (
    <DropdownItem className="note-dropdown-item">
      <div className="note-dropdown-item-div">
        <p
          className="note-dropdown-item-update "
          onMouseDown={() => {
            props.openModal("update-notebook");
          }}
        >
          Update notebook
        </p>
        <p
          className="note-dropdown-item-delete"
          onMouseDown={() => props.openModal("delete-notebook")}
        >
          Delete notebook
        </p>
      </div>
    </DropdownItem>
  );
};
