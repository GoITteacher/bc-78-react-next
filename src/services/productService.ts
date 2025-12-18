import axios from "axios";
import { GetProductParams, GetProductResponse } from "../types/product";

export const getProducts = async (userParams: GetProductParams)=>{
const baseURL = 'https://food-boutique.b.goit.study/api';
   const endPoint = '/products';
   const url = baseURL + endPoint;

   const params = {
    ...userParams,
    limit: 10
   };

   const res = await axios.get<GetProductResponse>(url, {  params });
   return res.data;
 
}
