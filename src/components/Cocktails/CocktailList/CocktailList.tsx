import { Cocktail } from "../../../types/cocktail";
import css from "./CocktailList.module.css";

interface CocktailListProps {
  items: Cocktail[];
}
const CocktailList = ({ items }: CocktailListProps) => {
  return (
    <div className={css["cocktailList"]}>
      <ul>
        {items.map((item) => {
          return (
            <li key={item._id}>
              <img src={item.drinkThumb} alt={item.drink} height="200" />
              <p>{item.drink}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CocktailList;
