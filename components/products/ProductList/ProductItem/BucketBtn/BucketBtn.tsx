"use client";
import { Product } from "@/types/products";
import css from "./BucketBtn.module.css";
import { useProductStore } from "@/stores/productStore";

const BucketBtn = ({ product }: { product: Product }) => {
  const addToBucket = useProductStore((s) => s.addProductToBucket);
  const removeFromBucket = useProductStore((s) => s.removeProductFromBucket);
  const bucketItems = useProductStore((s) => s.bucket);
  const bucketHasItem = bucketItems.some((el) => el._id === product._id);

  const handleAddToBucket = () => {
    addToBucket(product);
  };

  const handleRemoveFromBucket = () => {
    removeFromBucket(product._id);
  };

  if (bucketHasItem) {
    return <button onClick={handleRemoveFromBucket}>Remove from bucket</button>;
  }

  return <button onClick={handleAddToBucket}>Add to bucket</button>;
};

export default BucketBtn;
