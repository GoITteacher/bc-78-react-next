import axios from "axios";
import { Pokemon } from "../types/pokemon";

export const getPokemon = async (id: number)=>{
    const baseUrl = 'https://pokeapi.co/api/v2';
    const endPoint = `/pokemon/${id}`;
    const url = baseUrl + endPoint;

    const res = await axios.get<Pokemon>(url);
    return res.data
}