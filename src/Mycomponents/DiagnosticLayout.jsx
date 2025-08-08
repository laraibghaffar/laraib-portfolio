import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import "../index.css";

const questions = [
  "Question 01",
 "Question 02",
  "Question 03",
  "Question 04",
   "Question 05",
];

export default function DiagnosticLayout() {
  const location = useLocation();
  const currentStep = parseInt(location.pathname.split("-")[1]) - 1;

  return (
    <div className="diagnostic-main-div">
      
      {/* Sidebar */}
      <div className="diagnostic-left-div">
        <h2>Diagnostic Questions</h2>
        <ul>
          {questions.map((q, index) => (
            <li key={index}>
              <input type="checkbox" checked={index <= currentStep} readOnly />
              {q}
            </li>
          ))}
        </ul>
      </div>

      {/* Center Content (question pages will render here) */}
      <div className="diagnostic-right-div">
        <Outlet />
      </div>
    </div>
  );
}
