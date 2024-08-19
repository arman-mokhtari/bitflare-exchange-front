"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useGetData } from "@/hooks/useAuth";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";

const AdminPanelMainContent = () => {
  const { isLoading, data } = useGetData();
  const { users, payments, products } = data || {};

  if (isLoading) return <div>Loading...</div>;
  const totalPayments = payments.reduce(
    (acc: number, payment: { amount: number }) => acc + payment.amount,
    0
  );

  const AdminOverviewCardData = [
    {
      title: "کاربران",
      description: "تعداد کاربران تایید شده",
      content: users?.length || 0,
    },
    {
      title: "ارز دیجیتال",
      description: "ارزهای دیجیتال ثبت شده",
      content: products?.length || 0,
    },
    {
      title: "سفارشات",
      description: "تعداد سفارشات ثبت شده",
      content: payments?.length || 0,
    },
    {
      title: "مجموع سفارشات",
      description: "مجموع مبلغ سفارشات",
      content: totalPayments,
    },
  ];

  return (
    <div className="grid gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {AdminOverviewCardData.map((card, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl text-primary">
                {card.title}
              </CardTitle>
              <CardDescription>{card.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {toPersianNumbersWithComma(card.content)}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminPanelMainContent;
