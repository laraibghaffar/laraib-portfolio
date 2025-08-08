import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom"; // ✅ Added useNavigate

export default function App() {
  const navigate = useNavigate(); // ✅ Hook for navigation

  const handleAdjustAnswers = () => {
    navigate("/App/sessions"); // ✅ Route change on button click
  };

  return (
   
    <div className="app-layout">
      <aside className="sidebar">
        <h2>Clarity OS</h2>
        <div className="border-bottom"></div>

        <Link to="/App" className="home-btn">
          <img src="/home.png" className="icon" />
          Home
        </Link>

        <Link to="/App/sessions" className="sessions-btn">
          <img src="/001-session 1.png" className="icon" />
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
              <img src="/star.png" className="star-icon" />
              <img src="/Vector.png" className="msg-icon" />
            </div>
            <div className="content-section">
              <div className="top-row">
                <p className="time">12:29 pm</p>
                <p className="date">11, May Sunday</p>
              </div>
              <emergency className="menu"> <h3>Apply To Leave For Emergency</h3>
              <div className="menu-icon">⋮</div></emergency>
             
            </div>
            
          </div>
        ))}

        <div className="border-bottom"></div>

        <Link to="/App/reflections" className="reflection">
          <img src="/002-reflect 1.png" className="ref-icon" />
          <h3>Reflections</h3>
        </Link>

        {/* ✅ Adjust My Answers Button */}
       

        <div className="settings">
          <div className="setting">
            <button className="settings-btn">
              <img src="/setting.png" className="set-icon" />
              Settings
            </button>
          </div>
          <div className="setting">
            <button className="settings-btn">
              <img src="/setting 2.png" className="set-icon" />
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
