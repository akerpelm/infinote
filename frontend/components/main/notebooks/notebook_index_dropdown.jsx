import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisH } from "react-icons/fa";

export const DropdownItem = (props) => {
  const [open, setOpen] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="index-dropdown" ref={menuRef}>
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
    <div>
      <DropdownItem className="index-dropdown-item">
        <div className="index-dropdown-item-div">
          <p
            className="index-notebook-dropdown-item-delete"
            onClick={() => props.deleteNotebook(props.notebook.id)}
          >
            Delete notebook
          </p>
        </div>
      </DropdownItem>
    </div>
  );
};
