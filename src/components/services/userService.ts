import type { User } from "../types/user";

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Gagal fetch users");
  const data: User[] = await res.json();
  return data;
};
