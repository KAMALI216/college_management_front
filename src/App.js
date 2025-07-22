import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Routes, Route } from "react-router-dom";

import CollegeHome from "./component/CollegeHome";
import Home from "./component/Home"; // Student Management
import FacultyHome from "./component/FacultyHome"; // Faculty Management
import AddStudent from "./component/AddStudent";
import ViewStudent from "./component/ViewStudent";
import ViewFaculty from "./component/ViewFaculty"; // ✅ Import ViewFaculty

function App() {
  return (
    <div className="container mt-4">
      <Routes>
        <Route path="/" element={<CollegeHome />} />
        <Route path="/students" element={<Home />} />
        <Route path="/faculties" element={<FacultyHome />} />
        <Route path="/add" element={<AddStudent />} />
        <Route path="/view/:id" element={<ViewStudent />} />
        <Route path="/faculty/view/:id" element={<ViewFaculty />} /> {/* ✅ Add this route */}
      </Routes>
    </div>
  );
}

export default App;
