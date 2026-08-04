import axios from "axios";

const api = axios.create({
  baseURL:
  "https://adomako-3.onrender.com/api/",
});

export default api;