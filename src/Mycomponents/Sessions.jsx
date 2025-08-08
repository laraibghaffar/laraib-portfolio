import React, { useState, useEffect } from "react";

export default function Session() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "left",
      name: "Clarity OS",
      text: "Let’s get started with today’s session. Please take a moment to think about what’s been top of mind lately. We’ll focus on that.",
      time: "11:31 AM",
    },
  ]);

  const [input, setInput] = useState("");

  // ✅ Persistent Dark Mode State
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("darkMode", newTheme); // ✅ Save to localStorage
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);

  // 🔹 Send message
  const handleSend = () => {
    if (input.trim() === "") return;

    const newMessage = {
      id: Date.now(),
      sender: "right",
      name: "You",
      text: input,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages([...messages, newMessage]);
    setInput("");

    setTimeout(() => {
      const replyMessage = {
        id: Date.now() + 1,
        sender: "left",
        name: "Clarity OS",
        text: "Thanks for sharing. Let's explore that further.",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prevMessages) => [...prevMessages, replyMessage]);
    }, 1500);
  };

  return (
    <main className={`main-content ${isDark ? "dark-mode" : ""}`}>
      {/* 🔷 Top Bar */}
      <div className="header">
        <div className="topber">
          <h4>Good Morning</h4>
          <h2>Sarah Joshia</h2>
          <p>Today, 27 Oct 2024</p>
        </div>
        <div className="topbar-center-heading">
          <h3>Session Details - Sunday, 27 Oct 2024, 2:30 pm</h3>
        </div>
        <div className="main-right">
          <div className="one">
            {/* ✅ Toggle Button */}
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

      {/* 🔷 Messages Area */}
      <div className="massage-bar-container">
        <div className="download-session">
          <img src="/star.png" className="starrr-icon" alt="star" />
          <button className="Download">
            <img src="/erro.png" className="erro-icon" alt="icon" />
            Download
          </button>
          <div className="menu-icon" style={{ fontSize: "24px", color: "black" }}>⋮</div>
        </div>

        {messages.map((msg) =>
          msg.sender === "left" ? (
            <div className="main-text-msg" key={msg.id}>
              <div className="massage-icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1053/1053244.png"
                  alt="icon"
                  className="msg-icon"
                />
              </div>
              <div className="massage-box">
                <h4>{msg.name}</h4>
                <p>{msg.text}</p>
                <h6>{msg.time}</h6>
              </div>
            </div>
          ) : (
            <div className="text-content-sesstion right-msg" key={msg.id}>
              <div className="massage-box-right">
                <h4>{msg.name}</h4>
                <p>{msg.text}</p>
                <h6>{msg.time}</h6>
              </div>
            </div>
          )
        )}
      </div>

      {/* 🔶 Input Field */}
      <div className="custom-input">
        <img
          src="https://cdn5.vectorstock.com/i/1000x1000/53/24/human-brain-simple-icon-vector-46745324.jpg"
          alt="start-icon"
          className="icon-brain"
        />
        <input
          type="text"
          placeholder="What's on your mind? ..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <img
          src="/msgg.png"
          alt="msg icon"
          className="msgg-icon"
          onClick={handleSend}
          style={{ cursor: "pointer" }}
        />
      </div>
    </main>
  );
}
