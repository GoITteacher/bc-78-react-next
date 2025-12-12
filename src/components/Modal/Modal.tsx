import { useState } from "react";
import css from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
}
const Modal = ({ children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={css["modal"]}>
      <button onClick={handleModalClick}>{isOpen ? "Close" : "Open"}</button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Modal;
