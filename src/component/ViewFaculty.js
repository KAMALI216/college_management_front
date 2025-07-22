import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ViewFaculty() {
  const { id } = useParams(); // fetch faculty ID from the URL
  const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/faculties/${id}`) // Make sure this matches your backend endpoint
      .then((res) => setFaculty(res.data))
      .catch((err) => console.error("Error fetching faculty:", err));
  }, [id]);

  if (!faculty) {
    return (
      <div className="container mt-4">
        <h2 className="text-center">Faculty Details</h2>
        <p className="text-center">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">👨‍🏫 Faculty Details</h2>
      <div className="card mx-auto shadow p-4" style={{ maxWidth: "600px" }}>
        <div className="row mb-2">
          <div className="col-4 fw-bold">ID</div>
          <div className="col-8">{faculty.id}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">Name</div>
          <div className="col-8">{faculty.name}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">Email</div>
          <div className="col-8">{faculty.email}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">Phone</div>
          <div className="col-8">{faculty.phone}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">Department</div>
          <div className="col-8">{faculty.department}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">Designation</div>
          <div className="col-8">{faculty.designation}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">Qualification</div>
          <div className="col-8">{faculty.qualification}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">Experience</div>
          <div className="col-8">{faculty.experienceYears} years</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">Gender</div>
          <div className="col-8">{faculty.gender}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">DOB</div>
          <div className="col-8">{faculty.dob}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">Joining Date</div>
          <div className="col-8">{faculty.joiningDate}</div>
        </div>
        <div className="row mb-2">
          <div className="col-4 fw-bold">Address</div>
          <div className="col-8">{faculty.address}</div>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link to="/faculties" className="btn btn-primary">Back to List</Link>
      </div>
    </div>
  );
}

export default ViewFaculty;
