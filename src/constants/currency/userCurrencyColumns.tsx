import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";

import { MyCurrency } from "@/types";
import UserCurrencyRequestDialog from "@/components/user/userContents/userOverview/UserCurrencyRequestDialog";

export const userCurrencyColumns: ColumnDef<MyCurrency>[] = [
  {
    accessorKey: "title",
    header: () => <div className="text-right">نام ارز</div>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "quantity",
    header: ({ column }) => {
      return (
        <div className="text-right">
          <Button
            className="px-0 hover:bg-transparent"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            موجودی
            <ArrowUpDown className="mr-1 size-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("quantity"));

      const formatted = new Intl.NumberFormat("fa-IR").format(amount);

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
  {
    id: "actions",
    header: () => <div className="text-right">عملیات</div>,
    cell: ({ row }) => {
      const rowData = row.original;
      return <UserCurrencyRequestDialog rowData={rowData} />;
    },
  },
];
