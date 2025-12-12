// import Button from "./Button/Button";
import Counter from "./Counter/Counter";
import ItemList from "./ItemList/ItemList";
import UserInfo from "./UserInfo/UserInfo";

export default function App() {
  return (
    <div>
      <h1>Lesson App</h1>
      <ItemList />
      <hr />
      <UserInfo />
      <hr />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}
