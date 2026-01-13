import { GetProductsParams, GetPropductsResponse } from "@/types/products";
import axios from "axios";

export async function getProducts(params: GetProductsParams) {
  const baseURL = "https://food-boutique.b.goit.study/api";
  const endPoint = "/products";
  const url = baseURL + endPoint;
  const res = await axios.get<GetPropductsResponse>(url, { params });
  return res.data;
}
