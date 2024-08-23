"use client";

import { useGetData } from "@/hooks/useAuth";
import { UsersDataTable } from "./UsersDataTable";

const UsersMainContent = () => {
  const { isLoading, data } = useGetData();
  const { users } = data || {};

  if (isLoading) return <div>Loading...</div>;
  return <UsersDataTable users={users} />;
};

export default UsersMainContent;
