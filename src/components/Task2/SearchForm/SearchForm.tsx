import { useId } from "react";
import { GetPostsParams } from "../../../types/post";
import css from "./SearchForm.module.css";

interface SearchFormProps {
  onSubmit: (res: GetPostsParams) => void;
}

const SearchForm = ({ onSubmit }: SearchFormProps) => {
  const id = useId();

  const handleSubmit = (formData: FormData) => {
    const res = {
      limit: Number(formData.get("limit")),
      skip: Number(formData.get("skip")),
    };

    onSubmit(res);
  };

  return (
    <form className={css["searchForm"]} action={handleSubmit}>
      <label htmlFor={`limit-${id}`}>Limit</label>
      <input type="number" name="limit" id={`limit-${id}`} />

      <label htmlFor={`skip-${id}`}>Skip</label>
      <input type="number" name="skip" id={`skip-${id}`} />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
