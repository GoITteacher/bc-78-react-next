import axios from "axios";
import { GetProductParams, GetProductsRes } from "../types/product";

export const getProducts= async(userParams: GetProductParams)=>{
    const url = 'https://food-boutique.b.goit.study/api/products';
    const params = {
        ...userParams,
        limit: 10
    }
    const res = await axios.get<GetProductsRes>(url, {params})
    return res.data
}