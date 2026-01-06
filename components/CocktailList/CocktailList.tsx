"use client";
import { useQuery } from "@tanstack/react-query";
import css from "./CocktailList.module.css";
import { getRandomCocktails } from "@/lib/cocktailsService";
import { useSearchParams } from "next/navigation";

const CocktailList = () => {
  const searchParams = useSearchParams();
  searchParams.get("name");
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getRandomCocktails"],
    queryFn: getRandomCocktails,
    refetchOnMount: false,
  });

  const items = data || [];

  return (
    <>
      <button onClick={() => refetch()}>Reload</button>
      <ul className={css["cocktailList"]}>
        {items.map((item) => {
          return (
            <li key={item._id}>
              <img src={item.drinkThumb} alt="" />
              <p>{item.drink}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CocktailList;
