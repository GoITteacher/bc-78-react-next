import { getCategoryList } from "@/lib/products-service";
import css from "./CategoryList.module.css";
import Link from "next/link";

const sleep = (d: number) => new Promise((r) => setTimeout(r, d));

const CategoryList = async () => {
  const categories = await getCategoryList();
  await sleep(5000);

  return (
    <div className={css["categoryList"]}>
      <h2>Categories</h2>
      <ul>
        {categories.map((el) => {
          return (
            <li key={el}>
              <Link href={`/products/${el}`}>{el}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryList;
