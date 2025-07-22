import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:8080";

const useStudentManager = () => {
  const [students, setStudents] = useState([]);

  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    branch: "",
    percentage: ""
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await axios.get(`${API_BASE}/students`);
      setStudents(res.data);
    } catch (err) {
      console.error("Failed to fetch students", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editingId
      ? `${API_BASE}/student/update/${editingId}`
      : `${API_BASE}/student/add`;
    const method = editingId ? axios.put : axios.post;

    try {
      await method(url, form);
      setForm({
        name: "",
        username: "",
        email: "",
        phone: "",
        gender: "",
        dob: "",
        branch: "",
        percentage: ""
      });
      setEditingId(null);
      fetchStudents();
    } catch (err) {
      console.error("Error submitting student form", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/student/delete/${id}`);
      fetchStudents();
    } catch (err) {
      console.error("Error deleting student", err);
    }
  };

  const handleEdit = (student) => {
    setForm({
      name: student.name || "",
      username: student.username || "",
      email: student.email || "",
      phone: student.phone || "",
      gender: student.gender || "",
      dob: student.dob || "",
      branch: student.branch || "",
      percentage: student.percentage || ""
    });
    setEditingId(student.rollNo);
  };

  return {
    students,
    form,
    setForm,
    handleSubmit,
    handleDelete,
    handleEdit,
    editingId,
  };
};

export default useStudentManager;
