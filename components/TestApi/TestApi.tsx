"use client";

import { getIngridientById } from "@/lib/api";
import css from "./TestApi.module.css";
import { AxiosError } from "axios";
import { notFound, useRouter } from "next/navigation";

const TestApi = () => {
  // const handleClick = async () => {
  //   try {
  //     const data = await getIngridientById("1");
  //     console.log(data);
  //   } catch (err) {
  //     const error = err as AxiosError;
  //     if (error.status === 404) {
  //       notFound();
  //     } else {
  //       throw err;
  //     }
  //   }
  // };

  // const router = useRouter();

  // const handleClick = () => {
  // router.push("/");
  // router.back();
  // router.forward();
  // router.replace("/");
  // };

  return (
    <div className={css["testApi"]}>
      {/* <button onClick={handleClick}>Test</button> */}
      {/* <button onClick={handleClick}>Back</button> */}
    </div>
  );
};

export default TestApi;
