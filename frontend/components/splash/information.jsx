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
          <div className="information-texts">
            <h2>MORE THAN JUST A NOTEPAD</h2>
            <p>
              Format your notes using a built-in rich-text-editor for full note customization.
            </p>
          </div>
          <div className="information-texts">
            <h2>INFINITE POTENTIAL</h2>
            <p>No data caps allows you to write as many notes as you desire.</p>
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
              <p className="link-section-header">Features</p>
              <ul>
                <li>
                  Create, update, and
                  <br /> delete notes in realtime.
                </li>
                <li>
                  Create notebooks to
                  <br /> house notes.
                </li>
                <li>
                  Rich-text-editing for
                  <br /> more personalized
                  <br /> notes.
                </li>
                <li style={{ textDecoration: "underline" }}>In Progress:</li>
                <li>
                  Create note tags
                  <br />
                  to allow filtering by tags.
                </li>
                <li>
                  Implement search functionality
                  <br /> to quickly access other features.
                </li>
              </ul>
            </div>
            <div className="link-section">
              <p className="link-section-header">About Me</p>
              <ul>
                <li>I press buttons for a living.</li>
                <li>Former healthcare professional.</li>
                <li>Fluency in three spoken languages.</li>
                <li>
                  Interests include finance,
                  <br />
                  progressive rock, and soccer.
                </li>
              </ul>
            </div>
            <div className="link-section">
              <p className="link-section-header">Technical Tools</p>
              <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Ruby on Rails</li>
                <li>PostgreSQL</li>
                <li>Ruby</li>
                <li>SQLite</li>
              </ul>
            </div>
            <div className="link-section">
              <p className="link-section-header">Contact</p>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/alex-kerpelman/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.github.com/akerpelm/infinote"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://angel.co/u/alex-kerpelman" target="_blank">
                    AngelList
                  </a>
                </li>
                {/* <li>
                  <a href="https://www.instagram.com/akerpz/" target="_blank">
                    Personal Site
                  </a>
                </li> */}
                <li>
                  <a href="mailto: akerpelm@u.rochester.edu">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Information;
