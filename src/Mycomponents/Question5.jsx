import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Question5() {
  const navigate = useNavigate();
  const [answer, setAnswer] = useState("");

  return (
    <>
      <div className="diagnostic-question-line">
        <img src="/noto_brain.png" className="icon-brain" />
        <p>If Clarity OS could fix one thing today, what would it be?</p>
      </div>

      <textarea
        className="diagnostic-textarea"
        placeholder="What's in your mind? ..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />

      <div className="diagnostic-button-div">
        <button onClick={() => navigate("/diagnostic/question-4")}>Back</button>

 <button onClick={() => navigate("/StartSessions")} disabled={!answer.trim()}>
  Next
</button>

      </div>
    </>
  );
}
