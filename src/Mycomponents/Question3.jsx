import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Question3() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");

  return (
    <>
      <div className="diagnostic-question-line">
        <img src="/noto_brain.png" className="icon-brain" />
        <p>When was the last time you felt fully aligned with your work?</p>
      </div>

      <textarea
        className="diagnostic-textarea"
        placeholder="What's in your mind? ..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <div className="diagnostic-button-div">
        <button onClick={() => navigate("/diagnostic/question-2")}>Back</button>

        <button
          onClick={() => navigate("/diagnostic/question-4")}
          disabled={!answer.trim()}
        >
          Next
        </button>
      </div>
    </>
  );
}
