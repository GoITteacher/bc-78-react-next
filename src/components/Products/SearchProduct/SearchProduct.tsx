import css from "./SearchProduct.module.css";

interface SearchProductProps {
  updateQuery: (name: string) => void;
}

const SearchProduct = ({ updateQuery }: SearchProductProps) => {
  const handleSubmit = (formData: FormData) => {
    const query = formData.get("query") as string;
    updateQuery(query);
  };
  return (
    <form className={css["searchProduct"]} action={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchProduct;
