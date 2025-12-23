import axios from "axios";

axios.defaults.baseURL = "https://notehub-public.goit.study/api";
const token = import.meta.env.VITE_TOKEN;

export const getNotes = async () => {
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const res = await axios.get("/notes", {
    headers: {},
    params: {},
    data: {},
  });
  return res.data;
};
