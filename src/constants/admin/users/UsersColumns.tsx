import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, SquareArrowOutUpRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { UserPayment } from "@/types";
import { toLocalDateString } from "@/utils/toLocalDate";
import Link from "next/link";

export const UsersColumns: ColumnDef<UserPayment>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <div className="whitespace-nowrap text-right">
          <Button
            className="px-0 hover:bg-transparent"
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            نام
            <ArrowUpDown className="mr-1 size-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: () => <div className="whitespace-nowrap text-right">ایمیل</div>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "phoneNumber",
    header: () => <div className="whitespace-nowrap text-right">شماره موبایل</div>,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("phoneNumber")}</div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="whitespace-nowrap text-right">تاریخ پیوستن</div>,
    cell: ({ row }) => (
      <div className="font-medium">
        {toLocalDateString(row.getValue("createdAt"))}
      </div>
    ),
  },
  {
    accessorKey: "_id",
    header: () => <div className="whitespace-nowrap text-right">مشاهده</div>,
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center">
          <Link href={`/admin/users/${row.getValue("_id")}`}>
            <SquareArrowOutUpRightIcon className="size-4 text-primary" />
          </Link>
        </div>
      );
    },
  },
];
