import { useState } from "react";

type UseModalResponse = [boolean, () => void, () => void];

export const useModal = (): UseModalResponse => {
  const [modalState, setModalState] = useState(true);
  const openModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };
  return [modalState, openModal, closeModal];
};
