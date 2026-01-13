"use client";
import { getProducts } from "@/lib/productApi";
import css from "./SearchProductForm.module.css";
import { useProductStore } from "@/stores/productStore";

const SearchProductForm = () => {
  const setProducts = useProductStore((s) => s.setProducts);

  const handleSubmit = async (formData: FormData) => {
    const keyword = formData.get("keyword") as string;
    const res = await getProducts({ keyword });
    setProducts(res.results);
  };

  return (
    <form className={css["searchProductForm"]} action={handleSubmit}>
      <input
        className={css["input"]}
        type="text"
        name="keyword"
        placeholder="Search by name or category"
      />
      <button className={css["button"]} type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchProductForm;
