import React, { useState, useRef, useEffect } from "react";
//React Icons
import { FaAngleDown, FaEllipsisH } from "react-icons/fa";

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
    <div className="nav-dropdown" ref={menuRef}>
      <FaAngleDown className="sidebar-icon" onClick={() => setOpen(!open)} />
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
      <DropdownItem className="nav-dropdown-item">
        <div className="nav-dropdown-item-div">
          <p
            className="nav-dropdown-item-logout"
            onClick={() => props.logout()}
          >
            Log out {props.title}?
          </p>
        </div>
      </DropdownItem>
    </div>
  );
};
