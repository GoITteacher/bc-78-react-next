import axios from "axios";
import { SearchProductParams, SearchProductResponse } from "../types/product";

export const serachProducts = async (params: SearchProductParams)=>{
    const baseUrl = 'https://food-boutique.b.goit.study/api';
    const endPoint = '/products';
    const url = baseUrl + endPoint;
    const res = await axios.get<SearchProductResponse>(url, {params})
    return res.data;
}