import React, { useState, useRef, useEffect } from "react";
//React Icons
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
    <div className="tag-dropdown" ref={menuRef}>
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
      <DropdownItem className="tag-dropdown-item">
        <div className="tag-dropdown-item-div">
          <p
            className="tag-dropdown-item-delete"
            onClick={() => props.deleteTag(props.tag.id)}
          >
            Delete tag
          </p>
        </div>
      </DropdownItem>
    </div>
  );
};
