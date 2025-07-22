import React from "react";
import useFacultyManager from "./useFacultyManager";
import FacultyForm from "./FacultyForm";

function AddFaculty() {
  const { form, setForm, handleSubmit, editingId } = useFacultyManager();

  return (
    <>
      <h4 className="mb-3">{editingId ? "Edit Faculty" : "Add New Faculty"}</h4>
      <FacultyForm
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        editingId={editingId}
      />
    </>
  );
}

export default AddFaculty;
