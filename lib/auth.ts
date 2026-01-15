import { nextServer } from "./nextServerConfig";

export const loginUser = async (email: string, password: string) => {
  const userData = { email, password };
  const res = await nextServer.post("/auth/login", userData);
  return res;
};
export const registerUser = () => {};
