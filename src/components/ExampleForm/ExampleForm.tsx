import { useState } from "react";
import css from "./ExampleForm.module.css";

const ExampleForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    pages: "",
    price: "",
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  };

  const handleSave = () => {
    console.log(formData);
  };

  return (
    <div className={css["exampleForm"]}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        value={formData.author}
        onChange={handleChange}
      />
      <input
        type="text"
        name="genre"
        value={formData.genre}
        onChange={handleChange}
      />
      <input
        type="text"
        name="pages"
        value={formData.pages}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />

      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ExampleForm;
