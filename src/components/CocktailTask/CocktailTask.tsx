import { useQuery } from "@tanstack/react-query";
import css from "./CocktailTask.module.css";
import { getRandomCocktails } from "../../services/cocktailService";

const CocktailTask = () => {
  const cocktailsQuery = useQuery({
    queryKey: ["random-cocktails"],
    queryFn: () => getRandomCocktails(),
  });

  const isLoading = cocktailsQuery.isLoading;
  const isError = cocktailsQuery.isError;
  const cocktails = cocktailsQuery.data ?? [];

  return (
    <div className={css["cocktailTask"]}>
      <button
        onClick={() => {
          cocktailsQuery.refetch();
        }}
      >
        LOAD RANDOM COCTAILS
      </button>

      {!isLoading && !isError && (
        <ul>
          {cocktails.map((item, i) => {
            return <li key={i}>{item.drink}</li>;
          })}
        </ul>
      )}

      {isLoading && <p>Loading ........</p>}
      {isError && <p>Error ...</p>}
    </div>
  );
};

export default CocktailTask;
