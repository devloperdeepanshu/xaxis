import axios from "axios";

// change baseURL if your backend runs elsewhere
const api = axios.create({
  baseURL: "https://xaxis-backend.onrender.com/api",
  headers: {
    "Accept": "application/json",
  },
});

// add token automatically from localStorage
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
