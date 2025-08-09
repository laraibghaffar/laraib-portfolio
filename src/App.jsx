import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  // Image path helper so GitHub Pages me sahi path mile
  const imgPath = (file) => `${import.meta.env.BASE_URL}${file}`;

  const handleAdjustAnswers = () => {
    navigate("/App/sessions");
  };

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <h2>Clarity OS</h2>
        <div className="border-bottom"></div>

        <Link to="/App" className="home-btn">
          <img src={imgPath("home.png")} className="icon" alt="Home" />
          Home
        </Link>

        <Link to="/App/sessions" className="sessions-btn">
          <img src={imgPath("001-session 1.png")} className="icon" alt="Sessions" />
          Sessions
        </Link>

        <div className="border-bottom"></div>

        <div className="your-sessions">
          <h4>Your Sessions</h4>
          <h4>Clear All</h4>
        </div>

        {[1, 2, 3, 4].map((_, i) => (
          <div key={i} className="emergency-card">
            <div className="left-section">
              <img src={imgPath("star.png")} className="star-icon" alt="Star" />
              <img src={imgPath("Vector.png")} className="msg-icon" alt="Message" />
            </div>
            <div className="content-section">
              <div className="top-row">
                <p className="time">12:29 pm</p>
                <p className="date">11, May Sunday</p>
              </div>
              <div className="menu">
                <h3>Apply To Leave For Emergency</h3>
                <div className="menu-icon">⋮</div>
              </div>
            </div>
          </div>
        ))}

        <div className="border-bottom"></div>

        <Link to="/App/reflections" className="reflection">
          <img src={imgPath("002-reflect 1.png")} className="ref-icon" alt="Reflections" />
          <h3>Reflections</h3>
        </Link>

        <div className="settings">
          <div className="setting">
            <button className="settings-btn">
              <img src={imgPath("setting.png")} className="set-icon" alt="Settings" />
              Settings
            </button>
          </div>
          <div className="setting">
            <button className="settings-btn">
              <img src={imgPath("setting 2.png")} className="set-icon" alt="Settings" />
              Settings
            </button>
          </div>
        </div>
      </aside>

      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
