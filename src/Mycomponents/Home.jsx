import React, { useState, useEffect } from "react";

export default function MainContent() {
  const [isDark, setIsDark] = useState(() => {
    // 🟡 Get initial value from localStorage
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("darkMode", newTheme); // ✅ Save to localStorage
  };

  useEffect(() => {
    // ✅ Apply class based on isDark
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);

  return (
    <main className="main-content">
      {/* 🔷 Header */}
      <div className="header">
        <div className="topber">
          <h4>Good Morning</h4>
          <h2>Sarah Joshia</h2>
          <p>Today, 27 Oct 2024</p>
        </div>

        <div className="main-right">
          <div className="one">
            <img
              src="/button.png"
              alt="button"
              id="button"
              onClick={toggleTheme}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="two">
            <img src="/circle-flags_uk.png" alt="flag" id="button" />
            <h3>USA</h3>
          </div>
        </div>
      </div>

      {/* 🔶 About Section */}
      <section className="about">
        <h3>Start Whatever it feels natural</h3>
        <h1>Tell me what’s on your mind, or I can prompt you</h1>
        <div className="card">
          {[1, 2, 3].map((_, i) => (
            <div className="card-box" key={i}>
              <img src="/win.png" alt="card" id="card" />
              <h4>Give me writing prompt</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 🟨 Input Area */}
      <div className="boot">
        <div className="custom-input">
          <img
            src="https://cdn5.vectorstock.com/i/1000x1000/53/24/human-brain-simple-icon-vector-46745324.jpg"
            alt="start-icon"
            className="icon-brain"
          />
          <input type="text" placeholder="What's on your mind? ..." />
          <img src="/msgg.png" alt="msg icon" className="msgg-icon" />
        </div>

        <div className="text">
          {Array.from({ length: 7 }).map((_, i) => (
            <div className="text-content" key={i}>
              <h4>Write a first Draft</h4>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
