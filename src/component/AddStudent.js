import React from "react";
import useStudentManager from "./useStudentManager";
import StudentForm from "./StudentForm";

function AddStudent() {
  const { form, setForm, handleSubmit, editingId } = useStudentManager();

  return (
    <>
      <h4 className="mb-3">Add New Student</h4>
      <StudentForm
        form={form}
        setForm={setForm}
        handleSubmit={handleSubmit}
        editingId={editingId}
      />
    </>
  );
}

export default AddStudent;
