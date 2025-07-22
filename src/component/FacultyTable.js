import React from "react";
import { useNavigate } from "react-router-dom";

function FacultyTable({ faculties, handleEdit, handleDelete }) {
  const navigate = useNavigate();

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-hover shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Faculty ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th style={{ minWidth: "180px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map((faculty) => (
            <tr key={faculty.id}>
              <td>{faculty.id}</td>
              <td>{faculty.name}</td>
              <td>{faculty.department}</td>
              <td>{faculty.email}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(faculty)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-sm btn-danger me-2"
                  onClick={() => handleDelete(faculty.id)}
                >
                  Delete
                </button>

                <button
                  className="btn btn-sm btn-info"
                  onClick={() => navigate(`/faculty/view/${faculty.id}`)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}

          {faculties.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center text-muted">
                No faculties found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default FacultyTable;
