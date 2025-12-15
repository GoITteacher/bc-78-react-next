import { useId } from "react";
import { SearchProductParams } from "../../../types/product";
import css from "./SearchProductForm.module.css";

interface SearchProductFormProps {
  onSubmit: (params: SearchProductParams) => void;
}

const SearchProductForm = ({ onSubmit }: SearchProductFormProps) => {
  const id = useId();

  const handleSubmit = (formData: FormData) => {
    const params = {
      keyword: formData.get("keyword") as string,
      page: Number(formData.get("page")),
      limit: Number(formData.get("limit")),
    };

    onSubmit(params);
  };
  return (
    <form className={css["searchProductForm"]} action={handleSubmit}>
      <input type="text" name={`keyword-${id}`} placeholder="Keyword" />
      <input type="number" name={`page-${id}`} placeholder="Page" />
      <input type="number" name={`limit-${id}`} placeholder="Limit" />
      <button>Search</button>
    </form>
  );
};

export default SearchProductForm;
