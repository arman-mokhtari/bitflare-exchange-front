import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { MyCurrency } from "@/types";
import { toLocalDateStringShort } from "@/utils/toLocalDate";
import { toPersianNumbers } from "@/utils/toPersianNumbers";

import { CalendarIcon, CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";
const UserDetailTabReq = ({ rowData }: { rowData: MyCurrency }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const paymentHistory = rowData.payments
      .map((payment) => {
        const date = toLocalDateStringShort(payment.createdAt);
        const quantity = toPersianNumbers(
          payment.cart.productDetail[0].quantity
        );
        return `${date}: ${quantity} عدد`;
      })
      .join("\n");

    navigator.clipboard
      .writeText(paymentHistory)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardHeader className="space-y-2 p-2">
        <CardTitle className="flex flex-col items-center justify-center gap-2 text-xl font-medium">
          <p className="">
            {rowData.title}
            <span className="mr-1 text-sm">({rowData.acronym})</span>
          </p>
        </CardTitle>
        <CardDescription className="flex flex-row items-center justify-between">
          <div className="flex gap-2">
            <CalendarIcon className="size-4" />
            <p>{toLocalDateStringShort(rowData.updatedAt)}</p>
          </div>
          <div>تعداد: {toPersianNumbers(rowData.quantity)}</div>
        </CardDescription>
      </CardHeader>
      <Separator className="space-y-2" />
      <CardContent className="space-y-2 p-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">تاریخچه فاکتورها</span>
          <Button
            variant="ghost"
            className="p-0 text-xs text-blue-600 hover:bg-transparent"
            onClick={handleCopyClick}
          >
            {copied ? (
              <CheckIcon className="size-4" />
            ) : (
              <CopyIcon className="size-4" />
            )}
          </Button>
        </div>
        <div className="grid gap-2">
          {rowData.payments.map((payment, idx) => {
            return (
              <div
                key={idx}
                className="flex items-center justify-between text-sm"
              >
                <span>{toLocalDateStringShort(payment.createdAt)}</span>
                <span>
                  {toPersianNumbers(payment.cart.productDetail[0].quantity)}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserDetailTabReq;
