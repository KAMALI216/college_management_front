import React from "react";
import { useNavigate } from "react-router-dom";

function CollegeHome() {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="mb-4">🎓 College Management System</h1>
      <p className="mb-5">Choose your portal:</p>

      <button
        className="btn btn-primary btn-lg mx-3"
        onClick={() => navigate("/students")}
      >
        Student Management
      </button>

      <button
        className="btn btn-success btn-lg mx-3"
        onClick={() => navigate("/faculties")}
      >
        Faculty Management
      </button>
    </div>
  );
}

export default CollegeHome;
