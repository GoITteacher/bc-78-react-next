import { useEffect, useState } from "react";
import css from "./cocktails.module.css";
import { Cocktail } from "../../types/cocktail";
import {
  getRandomCocktails,
  searchCocktails,
} from "../../services/cocktailService";
import CocktailList from "./CocktailList/CocktailList";
import SearchCocktails from "./SearchCocktails/SearchCocktails";
import { Flex } from "antd";

const Cocktails = () => {
  const [cocktails, setCocktails] = useState<Cocktail[]>([]);

  useEffect(() => {
    getRandomCocktails().then(setCocktails);
  }, []);

  const handleSubmit = (drink: string) => {
    const params = { s: drink };
    searchCocktails(params).then(setCocktails);
  };

  return (
    <Flex className={css["cocktails"]} vertical gap={20}>
      <SearchCocktails onSubmit={handleSubmit} />
      <CocktailList items={cocktails} />
    </Flex>
  );
};

export default Cocktails;
