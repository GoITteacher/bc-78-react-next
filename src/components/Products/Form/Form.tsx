import css from "./Form.module.css";

interface FormProps {
  onSubmit: (query: string) => void;
}
const Form = ({ onSubmit }: FormProps) => {
  const handleSubmit = (formData: FormData) => {
    const value = formData.get("query") as string;
    onSubmit(value);
  };

  return (
    <form className={css["my-form"]} action={handleSubmit}>
      <input type="text" name="query" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
