import WishList from "@/components/products/WishList/WishList";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <WishList />
    </div>
  );
};

export default Page;
