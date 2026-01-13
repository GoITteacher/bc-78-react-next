import { create } from "zustand";

interface UserStore {
  firstname: string;
  lastname: string;
  patronymic: string;

  setFullName: (fn: string, ln: string, p: string) => void;
  setFistname: (fn: string) => void;
  setLastname: (ln: string) => void;
  setPatronymic: (p: string) => void;
}

// const useUserStore = create<UserStore>()(() => {
//   return {
//     x: 0,
//     y: 0,
//     q: 0,
//   };
// });
