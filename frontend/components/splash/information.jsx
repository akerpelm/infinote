import React from "react";

const Information = () => {
  return (
    <div>
      <div className="information-page">
        {/* <div> */}
        <img
          className="infographic"
          src="images/infinote_splash_infographic.png"
          alt="infographic"
        />
        <div className="information-list">
          <div className="information-texts">
            <h2>INFINITE POTENTIAL</h2>
            <p>No data caps allows you to write as many notes as you desire.</p>
          </div>
          <div className="information-texts">
            <h2>CAPTURE AND ARRANGE YOUR IDEAS</h2>
            <p>
              With the click of a button, a notepad is immediately available to
              capture your greatest ideas.
            </p>
          </div>
          <div className="information-texts">
            <h2>YOUR NOTES, YOUR WAY</h2>
            <p>
              Notes can be placed into notebooks for clearer organization and
              ease of access.
            </p>
          </div>
        </div>
      </div>
      <footer className="footer-wrapper">
        <div className="footer-nav">
          <div className="footer-logo">
            <div className="f-logo">
              <img src="/images/infinote_logo_1.png" alt="logo_1" />
            </div>
          </div>
          <div className="row footer-flex">
            <div className="link-section">
              <p className="link-section-header">Stack</p>
              <ul>
                <li>Hi</li>
              </ul>
            </div>
            <div className="link-section">
              <p className="link-section-header">Features</p>
              <ul>
                <li>Hi</li>
              </ul>
            </div>
            <div className="link-section">
              <p className="link-section-header">Contact</p>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/alexander-kerpelman-22587584/"
                    target="_blank"
                  >LinkedIn</a>
                </li>
              </ul>
            </div>
            {/* <div className="link-section">
                    <p className="link-section-header">Stack</p>
                    <ul>
                        <li>Hi</li>
                    </ul>
                    
                </div>
                <div className="link-section">
                    <p className="link-section-header">Stack</p>
                    <ul>
                        <li>Hi</li>
                    </ul>
                    
                </div> */}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Information;
