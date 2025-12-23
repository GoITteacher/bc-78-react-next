import css from "./SearchBox.module.css";

interface SearchBoxProps {
  value: string;
  onChange: (x: string) => void;
}
const SearchBox = ({ value, onChange }: SearchBoxProps) => {
  return (
    <div className={css["searchBox"]}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={css["searchInput"]}
      />
    </div>
  );
};

export default SearchBox;
