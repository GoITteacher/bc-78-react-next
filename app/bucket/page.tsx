import Bucket from "@/components/products/Bucket/Bucket";
import css from "./Page.module.css";

const Page = () => {
  return (
    <div className={css["page"]}>
      <Bucket />
    </div>
  );
};

export default Page;
