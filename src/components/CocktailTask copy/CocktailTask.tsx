import { useEffect, useState } from "react";
import { Cocktail } from "../../types/cocktail";
import css from "./CocktailTask.module.css";
import { getRandomCocktails } from "../../services/cocktailService";

const CocktailTask = () => {
  const [data, setData] = useState<Cocktail[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setIsError(false);
      try {
        const data = await getRandomCocktails();
        setData(data);
      } catch {
        setIsError(true);
      }

      setIsLoading(false);
    }

    fetchData();
  }, []);

  return <div className={css["cocktailTask"]}></div>;
};

export default CocktailTask;
