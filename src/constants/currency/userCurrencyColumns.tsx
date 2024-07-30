import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";

import { MyCurrency } from "@/types";
import UserCurrencyRequestDialog from "@/components/user/userContents/userDataTabel/UserCurrencyRequestDialog";

export const userCurrencyColumns: ColumnDef<MyCurrency>[] = [
  {
    accessorKey: "currency",
    header: () => <div className="text-right">نام ارز</div>,
    cell: ({ row }) => <div>{row.getValue("currency")}</div>,
  },
  {
    accessorKey: "amount",
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
      const amount = parseFloat(row.getValue("amount"));

      const formatted = new Intl.NumberFormat("fa-IR", {
        style: "currency",
        currency: "IRR",
      }).format(amount);
      const parts = formatted.split("\u00A0");
      const newFormat = parts.reverse().join(" ");

      return <div className="text-right font-medium">{newFormat}</div>;
    },
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
