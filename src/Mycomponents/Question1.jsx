import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Question1() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState(""); // Input ka state

  return (
    <>
      <div className="diagnostic-question-line">
        <img src="/noto_brain.png" className="icon-brain" />
        <p>What’s the most urgent thing on your mind right now?</p>
      </div>

      <textarea
        className="diagnostic-textarea"
        placeholder="What's in your mind? ..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)} // Value update karo
      />

      <div className="diagnostic-button-div">
        <button onClick={() => navigate("/Welcome")}>Back</button>

        {/* Disable Next until user types something */}
        <button
          onClick={() => navigate("/diagnostic/question-2")}
          disabled={!answer.trim()}
        >
          Next
        </button>
      </div>
    </>
  );
}
