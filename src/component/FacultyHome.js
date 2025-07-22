import React, { useState } from "react";
import FacultyForm from "./FacultyForm";
import FacultyTable from "./FacultyTable";
import useFacultyManager from "./useFacultyManager";

function FacultyHome() {
  const {
    faculties,
    form,
    setForm,
    handleSubmit,
    handleDelete,
    handleEdit,
    editingId,
  } = useFacultyManager();

  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [sortKey, setSortKey] = useState("");

  // 🔍 Search and Filter
  let filteredFaculties = faculties.filter(
    (f) =>
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (f.id && f.id.toString().includes(searchTerm))
  );

  if (departmentFilter) {
    filteredFaculties = filteredFaculties.filter(
      (f) => f.department === departmentFilter
    );
  }

  if (sortKey === "name") {
    filteredFaculties.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortKey === "experience") {
    filteredFaculties.sort((a, b) => b.experience - a.experience);
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">👨‍🏫 Faculty Management</h2>

      {/* 🔍 Search and 🎚️ Filter/Sort */}
      <div className="row mb-3">
        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Search by name, department, or ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
          >
            <option value="">All Departments</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="experience">Experience</option>
          </select>
        </div>
      </div>

      {/* 📊 Faculty Table */}
      <FacultyTable
        faculties={filteredFaculties}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />

      {/* ➕ Add Faculty Button */}
      <div className="text-end mt-3">
        <button
          className="btn btn-success"
          onClick={() => {
            setShowForm(!showForm);
            setForm({
              name: "",
              username: "",
              email: "",
              phone: "",
              gender: "",
              dob: "",
              branch: "",
              qualification: "",
              experience: ""
            });
          }}
        >
          {showForm ? "Close Form" : "Add New Faculty"}
        </button>
      </div>

      {/* 📝 Faculty Form (below table) */}
      {showForm && (
        <FacultyForm
          form={form}
          setForm={setForm}
          handleSubmit={handleSubmit}
          editingId={editingId}
        />
      )}
    </div>
  );
}

export default FacultyHome;
