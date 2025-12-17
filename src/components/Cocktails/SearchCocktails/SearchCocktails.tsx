import css from "./SearchCocktails.module.css";

const SearchCocktails = ({ onSubmit }) => {
  const handleSubmit = (formData: FormData) => {
    const drink = formData.get("drink");
    onSubmit(drink);
  };

  return (
    <form className={css["searchCocktails"]} action={handleSubmit}>
      <input type="text" name="drink" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchCocktails;
