import axios from "axios";

export const globalApiConfig = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true,
});
