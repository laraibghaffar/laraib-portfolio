import React from "react";
import { useNavigate } from "react-router-dom";

export default function Question4() {
  const navigate = useNavigate();

  return (
    <>
      <div className="diagnostic-question-line">
        <img src="/noto_brain.png" className="icon-brain" />
        <p>What do you want to feel after using Clarity OS today?</p>
      </div>

      <textarea className="diagnostic-textarea" placeholder="What's in your mind? ..." />

      <div className="diagnostic-button-div">
 <button onClick={() => navigate("/diagnostic/question-3")}>Back</button>

        <button onClick={() => navigate("/diagnostic/question-5")}>Next</button>
      </div>
    </>
  );
}
