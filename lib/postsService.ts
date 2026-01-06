import { GetPostsResponse, Post } from "@/types/posts";
import axios from "axios";

export async function getAllPosts() {
  const url = "https://dummyjson.com/posts";
  const res = await axios.get<GetPostsResponse>(url);
  return res.data;
}

export async function getPostDetails(id: number) {
  const url = `https://dummyjson.com/posts/${id}`;
  const res = await axios.get<Post>(url);
  return res.data;
}
