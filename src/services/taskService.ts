import axios from "axios";
import { NewTask, Task, UpdatedTask } from "../types/tasks";

// axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const getTasks = async (query: string) => {
  const params = {
    search: query,
  };
  const res = await axios.get<Task[]>("/tasks", { params });
  return res.data;
};

export const createTask = async (taskInfo: NewTask) => {
  const res = await axios.post<Task>("/tasks", taskInfo);
  return res.data;
};

export const updateTask = async (id: string, taskInfo: UpdatedTask) => {
  const res = await axios.put<Task>(`/tasks/${id}`, taskInfo);
  return res.data;
};

export const deleteTask = async (id: string) => {
  const res = await axios.delete(`/tasks/${id}`);
  return res.data;
};
