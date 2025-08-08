import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Upload() {
  const navigate = useNavigate();
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        const base64Image = reader.result;

        // Get current reflections
        const existingReflections =
          JSON.parse(localStorage.getItem("uploadedReflections")) || [];

        // Add new one
        const updatedReflections = [...existingReflections, base64Image];

        // Save to localStorage
        localStorage.setItem(
          "uploadedReflections",
          JSON.stringify(updatedReflections)
        );

        setFileUploaded(true);
      };

      reader.readAsDataURL(file); // This reads file as base64
    }
  };

  return (
    <div className="upload-container">
      <h2 className="upload-title">File Upload</h2>

      <div
        onClick={() => document.getElementById("fileInput").click()}
        style={{ cursor: "pointer" }}
      >
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        <div className="upload-box">
          <div className="upload-massage">
            <img
              src="/uploading.png"
              className="uploading-icon"
              alt="upload icon"
            />
            <p className="upload-text">
              {fileUploaded
                ? "File uploaded successfully"
                : "Click or drag file to this area to upload"}
            </p>
          </div>

          <p className="upload-subtext">Formats accepted are .csv and .xlsx</p>

          <div className="upload-sample">
            <p>If you do not have a file you can use the sample below:</p>

            <div className="sim-sesstion">
              <a
                href="/sample-template.xlsx"
                download
                className="sample-link"
              >
                <img src="/sim.png" className="sim-icon" alt="" />
                <span>Download Sample Template</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="upload-buttons">
        <button
          className="cancel-btn"
          onClick={() => navigate("/App/reflections")}
        >
          Cancel
        </button>

        <button
          className="continue-btn"
          disabled={!fileUploaded}
          onClick={() => {
            if (fileUploaded) {
              navigate("/App/reflections");
            }
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
        