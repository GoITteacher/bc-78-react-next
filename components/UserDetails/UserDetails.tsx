"use client";
import { useParams } from "next/navigation";
import css from "./UserDetails.module.css";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "@/lib/usersService";

const UserDetails = () => {
  const { userId } = useParams<{ userId: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ["getUser", userId],
    queryFn: () => getUserById(userId),
    refetchOnMount: false,
  });

  if (isLoading) {
    return <div>Loading User Data</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className={css["userDetails"]}>
      <p>{data?.name}</p>
      <p>{data?.username}</p>
      <p>{data?.email}</p>
      <p>{data?.phone}</p>
      <p>{data?.website}</p>
      <button>Save</button>
    </div>
  );
};

export default UserDetails;
