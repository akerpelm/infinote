import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
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
            <li><AiFillGithub/></li>
            <li><AiFillLinkedin/></li>
          </ul>
        </div>
      </div>
    );
}

export default SplashHeader