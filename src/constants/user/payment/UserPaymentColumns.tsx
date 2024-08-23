import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";

import { UserPayment } from "@/types";

export const UserPaymentColumns: ColumnDef<UserPayment>[] = [
  {
    accessorKey: "invoiceNumber",
    header: () => <div className="text-right">فاکتور</div>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("invoiceNumber")}</div>
    ),
  },
  {
    accessorFn: (row) => row.cart?.productDetail[0]?.title,
    id: "title",
    header: () => <div className="text-right">نام ارز</div>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("title")}</div>
    ),
  },
  {
    accessorFn: (row) => row.cart?.productDetail[0]?.quantity,
    id: "quantity",
    header: () => <div className="text-right">تعداد</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("quantity"));
      const formatted = !isNaN(amount)
        ? new Intl.NumberFormat("fa-IR").format(amount)
        : "-";

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorFn: (row) => row.cart?.payDetail?.totalPrice,
    id: "total",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            className="px-0 hover:bg-transparent"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            مجموع
            <ArrowUpDown className="mr-1 size-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("total"));
      const formatted = !isNaN(amount)
        ? new Intl.NumberFormat("fa-IR").format(amount)
        : "-";

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-right">وضعیت</div>,
    cell: ({ row }) => (
      <div className="text-sm">
        {row.getValue("status") === "sent" ? "ارسال شده" : "انتظار"}
      </div>
    ),
  },
];
