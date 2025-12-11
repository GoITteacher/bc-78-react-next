import Cats from "../Cats/Cats";
import UserList from "../UserList/UserList";
import css from "./Home.module.css";

const Home = () => {
  return (
    <main>
      <h1 className={css.title}>Home Page</h1>
      <hr />
      <Cats />
      <hr />
      <UserList />
      <hr />
    </main>
  );
};

export default Home;
