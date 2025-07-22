import { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:8080";

const useFacultyManager = () => {
  const [faculties, setFaculties] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    joiningDate: "",
    gender: "",
    dob: "",
    qualification: "",
    experienceYears: "",
    address: "",
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchFaculties();
  }, []);

  const fetchFaculties = async () => {
    try {
      const res = await axios.get(`${API_BASE}/faculties`);
      setFaculties(res.data);
    } catch (err) {
      console.error("Failed to fetch faculties", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = editingId
      ? `${API_BASE}/faculty/update/${editingId}`
      : `${API_BASE}/faculty/add`;
    const method = editingId ? axios.put : axios.post;

    try {
      await method(url, form);
      setForm({
        name: "",
        email: "",
        phone: "",
        department: "",
        designation: "",
        joiningDate: "",
        gender: "",
        dob: "",
        qualification: "",
        experienceYears: "",
        address: "",
      });
      setEditingId(null);
      fetchFaculties();
    } catch (err) {
      console.error("Error submitting faculty form", err);
    }
  };

  const handleDelete = async (id) => {
  console.log("Deleting faculty with ID:", id); // 🔍 Confirm it's called with correct ID

  try {
    await axios.delete(`${API_BASE}/faculty/delete/${id}`);
    fetchFaculties();
  } catch (err) {
    console.error("Error deleting faculty", err); // 🔍 Check if error shows here
  }
};

  const handleEdit = (faculty) => {
    console.log("Editing:", faculty);
    setForm({
      name: faculty.name || "",
      email: faculty.email || "",
      phone: faculty.phone || "",
      department: faculty.department || "",
      designation: faculty.designation || "",
      joiningDate: faculty.joiningDate || "",
      gender: faculty.gender || "",
      dob: faculty.dob || "",
      qualification: faculty.qualification || "",
      experienceYears: faculty.experienceYears || "",
      address: faculty.address || "",
    });

    setEditingId(faculty.id); // Only use faculty.id, not faculty.facultyid
  };

  return {
    faculties,
    form,
    setForm,
    handleSubmit,
    handleDelete,
    handleEdit,
    editingId,
  };
};

export default useFacultyManager;
