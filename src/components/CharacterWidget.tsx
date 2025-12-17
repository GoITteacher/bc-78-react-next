import { useEffect, useState } from "react";
import { fetchUser } from "../services/userService";

export default function CharacterWidget() {
  const [userInfo, setUserInfo] = useState(null);
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUser(counter);
      setUserInfo(data);
    };
    fetchData();
  }, [counter]);

  useEffect(() => {
    console.log("Counter", counter);
  }, [counter]);

  useEffect(() => {
    console.log("START");
  }, []);

  useEffect(() => {
    console.log(`Hello ${userInfo?.name}`);
  }, [userInfo?.name]);

  return (
    <>
      <p>{userInfo?.name}</p>
      <button onClick={() => setCounter(counter + 1)}>Next User</button>
    </>
  );
}
