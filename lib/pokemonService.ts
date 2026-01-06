import { Pokemon } from "@/types/pokemons";
import axios from "axios";

export async function getPokemon(name: string) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const res = await axios.get<Pokemon>(url);
  return res.data;
}
