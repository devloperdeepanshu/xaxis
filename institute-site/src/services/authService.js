import api from "../utils/api.js";

export async function login(username, password) {
  const res = await api.post("/auth/login", { username, password });
  // expected backend returns { token, role, username, ... }
  return res.data;
}

export async function register(user) {
  const res = await api.post("/auth/register", user);
  return res.data;
}
