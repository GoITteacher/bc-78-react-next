import { useState } from "react";
import css from "./ItemList.module.css";

const ItemList = () => {
  const [items, setItems] = useState<number[]>([1, 2, 3]);

  const handleClick = () => {
    const lastItem = items[items.length - 1] * 2;
    setItems([...items, lastItem]);
    // setItems([lastItem, ...items]);
  };

  return (
    <div className={css["itemList"]}>
      <ul>
        {items.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>

      <button onClick={handleClick}>Add Item</button>
    </div>
  );
};

export default ItemList;
