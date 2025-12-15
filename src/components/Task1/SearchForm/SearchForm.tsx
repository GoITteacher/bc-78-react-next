import css from "./SearchForm.module.css";

interface SearchFormProps {
  onSubmit: (topic: string) => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const topic = formData.get("topic") as string;
    onSubmit(topic);
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <input className={css.input} type="text" name="topic" />
      <button type="submit">Search</button>
    </form>
  );
}
