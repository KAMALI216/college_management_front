import React from "react";

function FacultyForm({ form, setForm, handleSubmit, editingId }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className="card p-4 mb-4 shadow-sm">
      <div className="row g-3">
        <div className="col-md-4">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4">
          <input
            type="tel"
            name="phone"
            className="form-control"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4">
          <input
            type="text"
            name="department"
            className="form-control"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4">
          <input
            type="text"
            name="designation"
            className="form-control"
            placeholder="Designation"
            value={form.designation}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4">
          <input
            type="date"
            name="joiningDate"
            className="form-control"
            placeholder="Joining Date"
            value={form.joiningDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4">
          <select
            name="gender"
            className="form-control"
            value={form.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="date"
            name="dob"
            className="form-control"
            placeholder="Date of Birth"
            value={form.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4">
          <input
            type="text"
            name="qualification"
            className="form-control"
            placeholder="Qualification"
            value={form.qualification}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-4">
          <input
            type="number"
            name="experienceYears"
            className="form-control"
            placeholder="Experience (Years)"
            value={form.experienceYears}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-8">
          <textarea
            name="address"
            className="form-control"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            rows="2"
            required
          />
        </div>
      </div>

      <div className="text-end mt-3">
        <button type="submit" className="btn btn-primary">
          {editingId ? "Update" : "Add"} Faculty
        </button>
      </div>
    </form>
  );
}

export default FacultyForm;
