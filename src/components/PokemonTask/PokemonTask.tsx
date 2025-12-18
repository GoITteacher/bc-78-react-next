import { useState } from "react";
import css from "./PokemonTask.module.css";
import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../../services/pokemonService";

const PokemonTask = () => {
  const [counter, setCounter] = useState(1);

  const inc = () => {
    setCounter(counter + 1);
  };
  const dec = () => {
    setCounter(counter - 1);
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getPokemon", { name: counter }],
    queryFn: () => getPokemon(counter),
    enabled: counter > 0,
  });

  return (
    <div className={css["pokemonTask"]}>
      <button onClick={dec}>-</button>
      <p>{counter}</p>
      <button onClick={inc}>+</button>

      <div>{data?.name}</div>
    </div>
  );
};

export default PokemonTask;
