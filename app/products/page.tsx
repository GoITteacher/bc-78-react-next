import SearchProductForm from "@/components/products/SearchProductForm/SearchProductForm";
import css from "./Page.module.css";
import ProductList from "@/components/products/ProductList/ProductList";

const Page = () => {
  return (
    <div className={css["page"]}>
      <SearchProductForm />
      <ProductList />
    </div>
  );
};

export default Page;
