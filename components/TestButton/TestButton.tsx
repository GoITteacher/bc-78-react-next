"use client";

import { useRouter } from "next/navigation";
import css from "./TestButton.module.css";

const TestButton = () => {
  const navigation = useRouter();

  const handleClick = () => {
    console.log("Hello world");

    navigation.push("/");
  };

  return (
    <button className={css["testButton"]} onClick={handleClick}>
      Back To Home
    </button>
  );
};

export default TestButton;
