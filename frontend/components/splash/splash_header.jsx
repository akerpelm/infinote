import React from "react";
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaAngellist } from "react-icons/fa";
const SplashHeader = () => {
  return (
    <div className="splash-header">
      <div className="splash-img">
        <img
          className="splash-img"
          src="images/infinote_logo_1.png"
          alt="infinote_logo_1"
        />
      </div>
      <div className="splash-header-buttons">
        <ul>
          <li>
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
            <a href="https://www.github.com/akerpelm/infinote" target="_blank">
              <i>
                <AiFillGithub />
              </i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SplashHeader;
