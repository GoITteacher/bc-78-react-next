import { Cocktail } from "@/types/cocktails";
import axios from "axios";

export async function getRandomCocktails() {
  const url = "https://drinkify.b.goit.study/api/v1/cocktails/?r=9";
  const res = await axios.get<Cocktail[]>(url);
  return res.data;
}
