import axios from "axios";
import { GetPostsParams, GetPostsResponse } from "../types/post";

export const fetchAllPosts = async ({limit, skip}:GetPostsParams) =>{
    const baseUrl ='https://dummyjson.com';
    const endPoint = '/posts';
    const url = baseUrl + endPoint;

    const params = {
        limit, 
        skip,
    };

    const res = await axios.get<GetPostsResponse>(url, {params})
    return res.data
}

