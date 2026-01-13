import { create } from "zustand";

interface CounterStore {
  x: number;
  y: number;
  q: number;

  setX: (userValue: number) => void;
  setY: (userValue: number) => void;
  setQ: (userValue: number) => void;

  resetValues: () => void;

  incrementX: () => void;
  incrementY: () => void;
  incrementQ: () => void;

  decrementX: () => void;
  decrementY: () => void;
  decrementQ: () => void;

  setValues: (x: number, y: number, q: number) => void;
}

export const useCounterStore = create<CounterStore>()((set) => {
  return {
    x: 0,
    y: 0,
    q: 0,

    setX: (userValue) =>
      set(() => ({
        x: userValue,
      })),

    setY: (userValue) =>
      set(() => ({
        y: userValue,
      })),

    setQ: (userValue) =>
      set(() => ({
        q: userValue,
      })),

    resetValues: () =>
      set(() => ({
        x: 0,
        y: 0,
        q: 0,
      })),

    incrementX: () => {
      set((state) => {
        return {
          x: state.x + 1,
        };
      });
    },

    incrementY: () => {
      set((state) => {
        return {
          y: state.y + 1,
        };
      });
    },

    incrementQ: () => {
      set((store) => {
        return {
          q: store.q + 1,
        };
      });
    },

    decrementX: () => {
      set((state) => {
        return {
          x: state.x > 0 ? state.x - 1 : 0,
        };
      });
    },

    decrementY: () => {
      set((state) => {
        return {
          y: state.y - 1,
        };
      });
    },

    decrementQ: () => {
      set((store) => {
        return {
          q: store.q - 1,
        };
      });
    },

    setValues: (x, y, q) => {
      set(() => {
        return {
          x: x,
          y: y,
          q: q,
        };
      });
    },
  };
});

//!=========================================
// const currentStore = {
//   x: 0,
//   y: 0,
//   q: 0,
// };

// const updates = {
//   x: 10,
// };

// const result = {
//   x: 0,
//   y: 0,
//   q: 0,
//   x: 10,
// };
