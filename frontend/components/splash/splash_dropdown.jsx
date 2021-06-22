import React, { useState, useRef, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";
import { BsPersonBoundingBox } from "react-icons/bs";

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
    <div className="splash-dropdown" ref={menuRef}>
      <GiHamburgerMenu
        className="hamburger-icon"
        onClick={() => setOpen(!open)}
      />
      {open && props.children}
    </div>
  );
};

export const DropdownMenu = (props) => {
  (DropdownItem) => (props) => {
    return <li>{props.children}</li>;
  };
  return (
    <DropdownItem className="splash-dropdown-item">
      <div className="splash-dropdown-item-div">
        <li>
          <a href="https://www.linkedin.com/in/alex-kerpelman/" target="_blank">
            <i>
              <AiFillLinkedin />
            </i>
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://angel.co/u/alex-kerpelman" target="_blank">
            <i>
              <FaAngellist />
            </i>
            AngelList
          </a>
        </li>
        <li>
          <a href="https://www.github.com/akerpelm/infinote" target="_blank">
            <i>
              <AiFillGithub />
            </i>
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.akerpelmandev.com" target="_blank">
            <i>
              <BsPersonBoundingBox />
            </i>
            Personal Site
          </a>
        </li>
      </div>
    </DropdownItem>
  );
};
