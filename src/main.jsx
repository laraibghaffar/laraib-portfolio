// index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Welcome from "./Mycomponents/Welcome.jsx";
import StartSessions from "./Mycomponents/StartSessions.jsx";
import LoginSignup from "./Mycomponents/LoginSignup.jsx";
import DiagnosticLayout from "./Mycomponents/DiagnosticLayout.jsx";

import Question1 from "./Mycomponents/Question1.jsx";
import Question2 from "./Mycomponents/Question2.jsx";
import Question3 from "./Mycomponents/Question3.jsx";
import Question4 from "./Mycomponents/Question4.jsx";
import Question5 from "./Mycomponents/Question5.jsx";

import Home from "./Mycomponents/Home.jsx";
import Sessions from "./Mycomponents/Sessions.jsx";
import Reflections from "./Mycomponents/Reflections.jsx";
import Upload from "./Mycomponents/Upload.jsx";
import ProtectedRoute from "./Mycomponents/ProtectedRoute.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/StartSessions" element={<StartSessions />} />
      <Route path="/LoginSignup" element={<LoginSignup />} />

      <Route path="/diagnostic" element={<DiagnosticLayout />}>
        <Route path="question-1" element={<Question1 />} />
        <Route path="question-2" element={<Question2 />} />
        <Route path="question-3" element={<Question3 />} />
        <Route path="question-4" element={<Question4 />} />
        <Route path="question-5" element={<Question5 />} />
      </Route>

      <Route
        path="/App"
        element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="Sessions" element={<Sessions />} />
        <Route path="Reflections" element={<Reflections />} />
      </Route>

      <Route
        path="/Upload"
        element={
          <ProtectedRoute>
            <Upload />
          </ProtectedRoute>
        }
      />
    </Routes>
  </HashRouter>
);
