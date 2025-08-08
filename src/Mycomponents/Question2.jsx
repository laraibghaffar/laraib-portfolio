import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Question2() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");

  return (
    <>
      <div className="diagnostic-question-line">
        <img src="/noto_brain.png" className="icon-brain" />
        <p>How do you feel about your current business?</p>
      </div>

      <textarea
        className="diagnostic-textarea"
        placeholder="What's in your mind? ..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <div className="diagnostic-button-div">
        <button onClick={() => navigate("/diagnostic/question-1")}>Back</button>

        <button
          onClick={() => navigate("/diagnostic/question-3")}
          disabled={!answer.trim()}
        >
          Next
        </button>
      </div>
    </>
  );
}
