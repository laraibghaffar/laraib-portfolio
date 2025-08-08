import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../index.css";

const StartSessions = () => {
  const navigate = useNavigate();

  return (
    <div className='main-sesstion'>
      <div className="session-box">
        <h3>Got it</h3>
        <h2 className="session-heading">
          Based on what you shared,<br />
          we’ll focus this session around <strong>strategic alignment</strong><br />
          and <strong>decision clarity</strong>
        </h2>
        <p>This isn’t about fixing everything. It’s about moving forward from where you are—with clarity</p>

        <div className="button-group">
          <button className="start-btn"
            onClick={() => navigate("/LoginSignup")}
          >
            Start My Session
          </button>

          <button
            className="adjust-btn"
            onClick={() => navigate("/diagnostic/question-5")}
          >
            Adjust My Answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartSessions;
