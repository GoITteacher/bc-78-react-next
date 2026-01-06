import { User } from "@/types/users";
import axios from "axios";

export async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const res = await axios.get<User[]>(url);
  return res.data;
}

export async function getUserById(id: string) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const res = await axios.get<User>(url);
  return res.data;
}
