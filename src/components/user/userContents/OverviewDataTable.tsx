"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toPersianNumbers } from "@/utils/toPersianNumbers";

export type Payment = {
  id: string;
  amount: number;
  currency: string;
};

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    currency: "بیت‌کوین",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    currency: "اتریوم",
  },
  {
    id: "derv1ws0",
    amount: 837,
    currency: "لایت‌کوین",
  },
  {
    id: "5kma53ae",
    amount: 874,
    currency: "ریپل",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    currency: "دوج‌کوین",
  },
  {
    id: "js5gw3e1",
    amount: 512,
    currency: "بایننس کوین",
  },
  {
    id: "kz9x7h3l",
    amount: 150,
    currency: "کاردانو",
  },
  {
    id: "hy7m4k8v",
    amount: 680,
    currency: "پولکادات",
  },
  {
    id: "vc8n9w4j",
    amount: 299,
    currency: "سولانا",
  },
  {
    id: "lw3s5b2p",
    amount: 430,
    currency: "چین لینک",
  },
  {
    id: "mq2r7v5z",
    amount: 600,
    currency: "استلار",
  },
  {
    id: "qw8t3l1m",
    amount: 745,
    currency: "ترون",
  },
  {
    id: "zr4k9p8d",
    amount: 390,
    currency: "یونی سواپ",
  },
  {
    id: "jt7w2f4r",
    amount: 520,
    currency: "آوالانچ",
  },
  {
    id: "py6l8h3c",
    amount: 815,
    currency: "تتا",
  },
  {
    id: "sf9t6b7x",
    amount: 410,
    currency: "ماتیک",
  },
  {
    id: "bk8j3m2z",
    amount: 375,
    currency: "فایل کوین",
  },
  {
    id: "mv3p6k5w",
    amount: 555,
    currency: "دش",
  },
  {
    id: "ph4l2j7t",
    amount: 230,
    currency: "زد کش",
  },
  {
    id: "rc8n1m6q",
    amount: 695,
    currency: "مونرو",
  },
  {
    id: "tg5k8v9b",
    amount: 850,
    currency: "تزوس",
  },
  {
    id: "wf7m4b2y",
    amount: 215,
    currency: "وی چین",
  },
  {
    id: "ql2j8v9d",
    amount: 475,
    currency: "ایاس",
  },
  {
    id: "hm9k3f1r",
    amount: 330,
    currency: "نئو",
  },
  {
    id: "nk7t4l3m",
    amount: 250,
    currency: "آیوتا",
  },
];

export const columns: ColumnDef<Payment>[] = [
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
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="size-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DigitalCurrencyDataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between py-4">
        <Input
          placeholder="Filter emails..."
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                ستون‌ها <ChevronDown className="ml-2 size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      className="flex justify-end"
                      key={column.id}
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id === "currency"
                        ? "نام ارز"
                        : column.id === "amount"
                          ? "موجودی"
                          : column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  هنوز سرمایه‌ای اضافه نشده!
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          صفحه {toPersianNumbers(table.getState().pagination.pageIndex + 1)} از{" "}
          {toPersianNumbers(table.getPageCount())}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            قبلی
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            بعدی
          </Button>
        </div>
      </div>
    </div>
  );
}
