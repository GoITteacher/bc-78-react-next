import axios from "axios";
import { Cocktail, SearchCocktailsParams } from "../types/cocktail";

const BASE_URL = 'https://drinkify.b.goit.study/api/v1';

export const getRandomCocktails = async ()=>{
    const url = BASE_URL + '/cocktails/'
    const params = {
     r: 9   
    }
    const res = await axios.get<Cocktail[]>(url, {params});
    return res.data
}
export const searchCocktails = async (params: SearchCocktailsParams)=>{
    const url = BASE_URL + '/cocktails/search/'
    const res = await axios.get<Cocktail[]>(url, {params});
    return res.data
}