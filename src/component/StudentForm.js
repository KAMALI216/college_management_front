import React from "react";

function StudentForm({ form, setForm, handleSubmit, editingId }) {
  return (
    <form onSubmit={handleSubmit} className="card p-4 mb-4 shadow-sm">
      <div className="row g-3">

        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
        </div>

        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            required
          />
        </div>

        <div className="col-md-4">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        <div className="col-md-4">
          <input
            type="tel"
            className="form-control"
            placeholder="Phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            required
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-control"
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
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
            className="form-control"
            value={form.dob}
            onChange={(e) => setForm({ ...form, dob: e.target.value })}
            required
          />
        </div>

        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Branch"
            value={form.branch}
            onChange={(e) => setForm({ ...form, branch: e.target.value })}
            required
          />
        </div>

        <div className="col-md-4">
          <input
            type="number"
            step="0.01"
            className="form-control"
            placeholder="Percentage"
            value={form.percentage}
            onChange={(e) => setForm({ ...form, percentage: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="text-end mt-3">
        <button type="submit" className="btn btn-primary">
          {editingId ? "Update" : "Add"} Student
        </button>
      </div>
    </form>
  );
}

export default StudentForm;
