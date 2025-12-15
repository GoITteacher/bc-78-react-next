//https://hn.algolia.com/api/v1/search

import axios from "axios";
import { FetchArticlesResponse } from "../types/article";


export const fetchArticles = async (topic:string)=>{
    const baseUrl = 'https://hn.algolia.com/api/v1';
    const endPoint = '/search';
    const url = baseUrl + endPoint

    const params = {
        query: topic
    }

    const res = await axios.get<FetchArticlesResponse>(url,{params});
    return res.data
}