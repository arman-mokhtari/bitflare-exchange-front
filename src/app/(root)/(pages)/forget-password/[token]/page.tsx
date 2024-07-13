"use client";
import ResetPassTokenMainContent from "@/components/root/auth/forgetPassword/ResetPassTokenMainContent";
import { useGetIsValidateToken } from "@/hooks/useResetPassword";
import { useParams, useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const { token } = useParams<{ token: string }>();
  const router = useRouter();
  const { data, isLoading } = useGetIsValidateToken(token);
  const { isValid } = data || {};

  if (isLoading) return <div>Loading...</div>;

  if (!isValid) return router.push("/404");
  return <ResetPassTokenMainContent token={token} />;
};

export default Page;
