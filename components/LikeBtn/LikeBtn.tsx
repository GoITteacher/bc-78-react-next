"use client";

import { useParams } from "next/navigation";

const LikeBtn = () => {
  const { postId } = useParams();

  const handleClick = () => {
    console.log("Hello", postId);
  };

  return <button onClick={handleClick}>Like</button>;
};

export default LikeBtn;
