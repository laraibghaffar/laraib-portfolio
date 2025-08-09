import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Reflections() {
  const navigate = useNavigate();

  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === "true";
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("darkMode", newTheme);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);

  const initialCards = [
    { id: 1, img: "/Green.png" },
    { id: 2, img: "/red.png" },
    { id: 3, img: "/blue.png" },
    { id: 4, img: "/Green.png" },
    { id: 5, img: "/Green.png" },
    { id: 6, img: "/red.png" },
    { id: 7, img: "/blue.png" },
    { id: 8, img: "/Green.png" },
    { id: 9, img: "/Green.png" },
    { id: 10, img: "/red.png" },
    { id: 11, img: "/blue.png" },
    { id: 12, img: "/Green.png" },
  ];

  const [uploadedImages, setUploadedImages] = useState(() => {
    return JSON.parse(localStorage.getItem("uploadedReflections")) || [];
  });

  const [searchQuery, setSearchQuery] = useState("");

  const uploadedCards = uploadedImages.map((img, index) => ({
    id: initialCards.length + index + 1,
    img,
  }));

  const allCards = [...initialCards, ...uploadedCards];

  const handleDelete = (idToDelete) => {
    const updatedImages = uploadedImages.filter((_, index) => {
      return initialCards.length + index + 1 !== idToDelete;
    });
    setUploadedImages(updatedImages);
    localStorage.setItem("uploadedReflections", JSON.stringify(updatedImages));
  };

  // Filter logic for search
  const filteredCards =
    searchQuery.trim() === ""
      ? allCards
      : uploadedCards.filter((card) =>
          `Shopping_Listy ${card.id}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        );

  return (
    <div className={`reflections-container ${isDark ? "dark-mode" : ""}`}>
      <div className="header">
        <div className="topber">
          <h4>Good Morning</h4>
          <h2>Sarah Joshia</h2>
          <p>Today, 27 Oct 2024</p>
        </div>

        <div className="topbar-center-heading">
          <h2>Your Reflections</h2>
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

      <div className="filter-bar">
        <div className="left-filters">
          <button className="filter-btn-left">
            <img src="/any data.png" className="icon-left" alt="calendar" />
            Any Date
            <img src="/victi.png" className="icon-right" alt="arrow" />
          </button>

          <button className="filter-btn-right">
            All Type
            <img src="/victi.png" className="icon-right" alt="arrow" />
          </button>
        </div>

        <div className="right-search">
          <div className="search-box">
            <img src="/search.png" className="icon-left" alt="search" />
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="rerlection-file-upload">
        <div className="upload-top-bar">
          <h4>Files ({filteredCards.length})</h4>
          <button className="upload-btn" onClick={() => navigate("/Upload")}>
            <img src="/teer.png" alt="Top Icon" className="dess-icon" />
            Upload Documents
          </button>
        </div>
      </div>

      <div className="reflection-grid">
        {filteredCards.map((card) => (
          <div className="reflection-card" key={card.id}>
            <div className="check">
              <img src="/cheakbox.png" className="check-icon" alt="checkbox" />
              {card.id > 12 && (
                <img
                  src="/delete.png"
                  className="delete-icon"
                  alt="delete"
                  onClick={() => handleDelete(card.id)}
                  style={{
                    cursor: "pointer",
                    width: "20px",
                    marginLeft: "10px",
                  }}
                  
                />
              )}
            </div>
            <img src={card.img} className="image-icon" alt="center" />
            <h4 className="heading">Shopping_Listy {card.id}</h4>
            <div className="mb-time">
              <p>1 MB</p>
              <p>27.10.2024</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
