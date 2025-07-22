import React from "react";
import { useNavigate } from "react-router-dom";

function StudentTable({ students, handleEdit, handleDelete }) {
  const navigate = useNavigate();

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered table-hover shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Percentage</th>
            <th>Branch</th>
            <th style={{ minWidth: "180px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.rollNo}>
              <td>{student.rollNo}</td>
              <td>{student.name}</td>
              <td>{student.percentage}</td>
              <td>{student.branch}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(student)}
                >
                 Edit
                </button>

                <button
                  className="btn btn-sm btn-danger me-2"
                  onClick={() => handleDelete(student.rollNo)}
                >
                   Delete
                </button>

                <button
                  className="btn btn-sm btn-info"
                  onClick={() => navigate(`/view/${student.rollNo}`)}
                >
                   View
                </button>
              </td>
            </tr>
          ))}

          {students.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center text-muted">
                No students found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
