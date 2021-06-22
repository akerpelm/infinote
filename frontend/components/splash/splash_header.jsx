import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";
import { BsPersonBoundingBox } from "react-icons/bs";
import SessionDemoLogin from "../session/session_demo_login";
import { DropdownMenu } from "./splash_dropdown";

const SplashHeader = () => {
  return (
    <div className="splash-header">
      <div className="splash-inner-content">
        <div className="splash-img">
          <img
            className="splash-img"
            src="images/logo_horizontal.png"
            alt="logo"
          />
        </div>
        <div className="splash-header-buttons">
          <div className="splash-header-demo-user">
            <SessionDemoLogin />
          </div>

          <ul className="splash-dropdown-li">
            <DropdownMenu />
            {/* <li>
              <a
                href="https://www.linkedin.com/in/alex-kerpelman/"
                target="_blank"
              >
                <i>
                  <AiFillLinkedin />
                </i>
              </a>
            </li>
            <li>
              <a href="https://angel.co/u/alex-kerpelman" target="_blank">
                <i>
                  <FaAngellist />
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/akerpelm/infinote"
                target="_blank"
              >
                <i>
                  <AiFillGithub />
                </i>
              </a>
            </li>
            <li>
              <a href="https://www.akerpelmandev.com" target="_blank">
                <i>
                  <BsPersonBoundingBox />
                </i>
              </a>
            </li>
             */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SplashHeader;
