// import Button from "./Button/Button";
import Button from "./Button/Button";
import Counter from "./Counter/Counter";
import ItemList from "./ItemList/ItemList";
import Modal from "./Modal/Modal";
import UserForm from "./UserForm/UserForm";
import UserInfo from "./UserInfo/UserInfo";

export default function App() {
  return (
    <div>
      <h1>Lesson App</h1>
      {/* <UserForm />
      <hr />
      <ItemList />
      <hr />
      <UserInfo />
      <hr />
      <Counter /> */}

      <Modal>
        <h5>Hello H5</h5>
        <div>Hello world</div>
      </Modal>
      {/* <Button>Hello</Button>
      <Button>Click Me</Button>
      <Button>
        Click <span>Me</span>
      </Button> */}
    </div>
  );
}
