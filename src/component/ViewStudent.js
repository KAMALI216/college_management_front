import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const ViewStudent = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/students/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.error("Error fetching student:", err));
  }, [id]);

  if (!student) return <p className="text-center mt-5">Loading…</p>;

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🎓 Student Details</h2>

      <div className="card mx-auto shadow p-4" style={{ maxWidth: "600px" }}>
        {/* Two-column label:value layout */}
        <div className="row mb-2">
          <div className="col-4 fw-bold">Roll No</div>
          <div className="col-8">{student.rollNo}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">Name</div>
          <div className="col-8">{student.name}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">Username</div>
          <div className="col-8">{student.username}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">Email</div>
          <div className="col-8">{student.email}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">Phone</div>
          <div className="col-8">{student.phone}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">Gender</div>
          <div className="col-8">{student.gender}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">DOB</div>
          <div className="col-8">{student.dob}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">Branch</div>
          <div className="col-8">{student.branch}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">Percentage</div>
          <div className="col-8">{student.percentage}</div>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link to="/" className="btn btn-primary">
          Back to List
        </Link>
      </div>
    </div>
  );
};

export default ViewStudent;
