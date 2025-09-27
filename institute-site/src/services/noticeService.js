import api from "../utils/api.js";

export async function getNotices() {
  const res = await api.get("/notices");
  return res.data;
}

export async function addNotice({ title, content }) {
  const res = await api.post("/notices", { title, content });
  return res.data;
}

export async function deleteNotice(id) {
  const res = await api.delete(`/notices/${id}`);
  return res.data;
}
