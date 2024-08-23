"use client";
import { useGetUserById } from "@/hooks/useAuth";
import { useParams, useRouter } from "next/navigation";
import { useMemo } from "react";
interface Payment {
  id: string;
  amount: number;
  status: string;
}
const Page = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string | string[] }>();

  const userId = Array.isArray(id) ? id[0] : id;

  const { data, isLoading, error } = useGetUserById(userId);

  const { user, payments } = data || {};

  const modifiedPayments = useMemo(
    () =>
      payments?.filter((payment: Payment) => payment.status === "COMPLETED"),
    [payments]
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return console.error(error.message);

  if (!user || user._id !== userId) {
    router.push("/404");
    return null;
  }

  return (
    <div>
      <h1>{user.name}s Payments</h1>
      <ul>
        {modifiedPayments.map((payment: Payment) => (
          <li key={payment.id}>
            Payment ID: {payment.id}, Amount: ${payment.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
