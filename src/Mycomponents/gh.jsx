  <main className="main-content">
        <div className='header'>
          <div className="topber">
            <h4>Good Morning</h4>
            <h2>Sarah Joshia</h2>
            <p>Today,27 Oct 2024</p>
          </div>

          <div className="main-right">
            <div className="one">
              <img src="public/button.png" alt="button" id='button' />
            </div>
            <div className="two">
              <img src="public/circle-flags_uk.png" alt="button" id='button' />
              <h3>USA</h3>

            </div>
          </div>
        </div>

        <section className="about">
          <h3>Start Whatever it feels natural</h3>
          <h1>Tell me what’s on your mind, or I can prompt you</h1>
        </section>

        <div className="card">
          <div className="card-box">
            <img src="public/win.png" alt="card" id="card" />
            <h4>Give me writing prompt</h4>
          </div>
          <div className="card-box">
            <img src="public/win.png" alt="card" id="card" />
            <h4>Give me writing prompt</h4>
          </div>
          <div className="card-box">
            <img src="public/win.png" alt="card" id="card" />
            <h4>Give me writing prompt</h4>
          </div>
        </div>

        <div className="custom-input">
          <img src="https://cdn5.vectorstock.com/i/1000x1000/53/24/human-brain-simple-icon-vector-46745324.jpg" alt="start-icon" className="icon-brain" />
          <input type="text" placeholder="What's id your mind? ..." />
        <img src="/msgg.png" alt="msg icon" className="msgg-icon" />

        </div>

        <div className="text">
          <div className="text-content">
            <h4>Write a first Draft</h4>
          </div>
          <div className="text-content">
            <h4>Write a first Draft</h4>
          </div>
          <div className="text-content">
            <h4>Write a first Draft</h4>
          </div>
          <div className="text-content">
            <h4>Write a first Draft</h4>
          </div>
          <div className="text-content">
            <h4>Write a first Draft</h4>
          </div>
          <div className="text-content">
            <h4>Write a first Draft</h4>
          </div>
          <div className="text-content">
            <h4>Write a first Draft</h4>
          </div>
        </div>
   
</main>

      
    </div>











  );
}

export default App;

















import React from "react";
import { Link, Outlet } from "react-router-dom";


export default function App() {
  return (
    <div className="app-layout">
    
      <aside className="sidebar">
        <h2>Clarity OS</h2>
        <div className="border-bottom"></div>

       <Link to="/App" className="home-btn">
  <img src="/home.png" alt="Home Icon" className="icon" />
  Home
</Link>

      <Link to="Sessions" className="sessions-btn">
  <img src="/001-session 1.png" alt="Session Icon" className="icon" />
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
              <img src="/star.png" alt="star" className="star-icon" />
              <img src="/Vector.png" alt="message" className="msg-icon" />
            </div>
            <div className="content-section">
              <div className="top-row">
                <p className="time">12:29 pm</p>
                <p className="date">11, May Sunday</p>
              </div>
              <h3>Apply To Leave For Emergency</h3>
            </div>
            <div className="menu-icon">⋮</div>
          </div>
        ))}

        <div className="border-bottom"></div>

     
<Link to="/App/Reflections" className="reflection">
  <img src="/002-reflect 1.png" alt="Reflection" className="ref-icon" />
  <h3>Reflections</h3>
</Link>

        <div className="settings">
          <div className="setting">
            <button className="settings-btn">
              <img src="/setting.png" alt="setting icon" className="set-icon" />
              Settings
            </button>
          </div>
          <div className="setting">
            <button className="settings-btn">
              <img src="/setting 2.png" alt="setting icon" className="set-icon" />
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










    