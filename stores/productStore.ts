import { Product } from "@/types/products";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProductStore {
  products: Product[];
  bucket: Product[];
  wishlist: Product[];

  setProducts: (products: Product[]) => void;
  addProductToBucket: (product: Product) => void;
  addProductToWishList: (product: Product) => void;
  removeProductFromBucket: (id: string) => void;
  removeProductFromWishList: (id: string) => void;
  clearBucket: () => void;
  clearWishList: () => void;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => {
      return {
        products: [],
        bucket: [],
        wishlist: [],

        setProducts: (products: Product[]) => {
          set(() => {
            return {
              products: products,
            };
          });
        },
        addProductToBucket: (product: Product) => {
          set((state) => {
            return {
              bucket: [...state.bucket, product],
            };
          });
        },
        addProductToWishList: (product: Product) => {
          set((state) => {
            return {
              wishlist: [...state.wishlist, product],
            };
          });
        },

        removeProductFromBucket: (id: string) => {
          set((state) => {
            const filtered = state.bucket.filter((el) => el._id !== id);
            return {
              bucket: filtered,
            };
          });
        },
        removeProductFromWishList: (id: string) => {
          set((state) => {
            const filtered = state.wishlist.filter((el) => el._id !== id);
            return {
              wishlist: filtered,
            };
          });
        },
        clearBucket: () => {
          set(() => {
            return {
              bucket: [],
            };
          });
        },
        clearWishList: () => {
          set(() => {
            return {
              wishlist: [],
            };
          });
        },
      };
    },
    {
      name: "products",
      partialize: (s) => ({
        bucket: s.bucket,
        wishlist: s.wishlist,
      }),
    }
  )
);
