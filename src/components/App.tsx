import css from "./App.module.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainContainer from "./MainContainer/MainContainer";
import Sidebar from "./Sidebar/Sidebar";

const App = () => {
  return (
    <div className={css["container"]}>
      <Header />
      <main className={css["main-container"]}>
        <Sidebar />
        <MainContainer />
      </main>
      <Footer />
    </div>
  );
};

export default App;
