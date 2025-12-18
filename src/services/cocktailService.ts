import axios from "axios";
import { Cocktail } from "../types/cocktail";

export const getRandomCocktails = async ()=>{
    const baseUrl = 'https://drinkify.b.goit.study/api/v1';
    const endPoint = '/cocktails';
    const url = baseUrl + endPoint;

    const params = {
        r: 9
    }

    const res = await axios.get<Cocktail[]>(url, {params});
    return res.data
}