"use client";

import { useState } from "react";
import css from "./SearchPokemon.module.css";
import { Pokemon } from "@/types/pokemons";
import { getPokemon } from "@/lib/pokemonService";

const SearchPokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const handleSubmit = async (formData: FormData) => {
    const name = formData.get("name") as string;
    const data = await getPokemon(name);
    setPokemon(data);
  };

  return (
    <div className={css["searchPokemon"]}>
      <form action={handleSubmit}>
        <input type="text" name="name" />
        <button type="submit">Submit</button>
      </form>

      <div>
        <img src={pokemon?.sprites.front_default} alt="" />
        <p>{pokemon?.name}</p>
      </div>
    </div>
  );
};

export default SearchPokemon;
