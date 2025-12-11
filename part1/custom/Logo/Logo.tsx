import css from "./Logo.module.css";
import { FaBookReader } from "react-icons/fa";

const Logo = () => {
  return (
    <div className={css["logo"]}>
      <FaBookReader />
    </div>
  );
};

export default Logo;
