import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

// Fetch all teachers
export const getTeachers = async () => {
  const res = await API.get("/teachers");
  return res.data;
};

// Add a teacher with Cloudinary photo
export const addTeacher = async ({ name, subject, experience, photoFile }) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("subject", subject);
  formData.append("experience", experience);
  if (photoFile) formData.append("photo", photoFile);

  const res = await API.post("/teachers", formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });
  return res.data;
};

// Delete teacher
export const deleteTeacher = async (id) => {
  const res = await API.delete(`/teachers/${id}`);
  return res.data;
};
