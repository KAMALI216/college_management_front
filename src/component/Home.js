import React, { useState } from "react";
import useStudentManager from "./useStudentManager";
import StudentTable from "./StudentTable";
import StudentForm from "./StudentForm";

function Home() {
  const {
    students,
    form,
    setForm,
    handleSubmit,
    handleDelete,
    handleEdit,
    editingId,
  } = useStudentManager();

  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [branchFilter, setBranchFilter] = useState("");
  const [sortKey, setSortKey] = useState("");

  // Enhanced edit handler that also shows form
  const handleEditAndShow = (student) => {
    handleEdit(student);
    setShowForm(true);
  };

  // Filtered and Sorted students
  let filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.rollNo.toString().includes(searchTerm)
  );

  if (branchFilter) {
    filteredStudents = filteredStudents.filter(
      (s) => s.branch === branchFilter
    );
  }

  if (sortKey === "name") {
    filteredStudents.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortKey === "percentage") {
    filteredStudents.sort((a, b) => b.percentage - a.percentage);
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">🎓 Student Management</h2>

      {/* 🔍 Search and 🎚️ Filter/Sort */}
      <div className="row mb-3">
        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Search by name, branch, or roll no"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select"
            value={branchFilter}
            onChange={(e) => setBranchFilter(e.target.value)}
          >
            <option value="">All Branches</option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="IT">IT</option>
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
            <option value="percentage">Percentage</option>
          </select>
        </div>
      </div>

      {/* 📊 Student Table */}
      <StudentTable
        students={filteredStudents}
        handleEdit={handleEditAndShow}
        handleDelete={handleDelete}
      />

      {/* ➕ Add Student Button */}
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
              percentage: "",
            });
          }}
        >
          {showForm ? "Close Form" : "Add New Student"}
        </button>
      </div>

      {/* 📝 Student Form (below table) */}
      {showForm && (
        <StudentForm
          form={form}
          setForm={setForm}
          handleSubmit={(e) => {
            handleSubmit(e);
            setShowForm(false);
          }}
          editingId={editingId}
        />
      )}
    </div>
  );
}

export default Home;
