import css from "./Layout.module.css";

const Layout = ({ sidebar, children }) => {
  return (
    <div className={css["layout"]}>
      {sidebar}
      {children}
    </div>
  );
};

export default Layout;
