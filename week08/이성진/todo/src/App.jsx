import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import Todo from "./Todo";

function App() {
  const isAuthenticated = !!localStorage.getItem("token"); // js 연산자

  return (
    <Router>
      <div className="bg-neutral-50 rounded-lg p-8 shadow-md">
        <h2 className="font-mono text-center text-2xl mb-6 text-gray-700 shadow-md rounded-full">
          TODO LIST
        </h2>
        <Routes>
          <Route path="/" element={<Navigate to="/auth/signup" />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route
            path="/todos"
            element={isAuthenticated ? <Todo /> : <Navigate to="/auth/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;





