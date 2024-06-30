import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { coinsData, headers } from "@/data";
import ConnectButton from "../ui/ConnectButton";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function CoinsTable() {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
      <div className="">
        <h3 className="text-gray-800 dark:text-gray-200 text-2xl font-semibold md:text-3xl text-center">
          قیمت لحظه ای ارزهای دیجیتال
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 my-2">
          منطبق بر بازار‌های جهانی
        </p>
      </div>

      <div className="overflow-hidden rtl">
        <Table className="">
          <TableHeader>
            <TableRow className="!border-b-[12px] border-background">
              {headers.map((header, index) => (
                <TableHead
                  key={index}
                  className={`text-right ${
                    index === 0 ? "hidden md:table-cell" : ""
                  }`}
                >
                  {header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {coinsData.map((coin, index) => (
              <TableRow
                className="!border-b-[12px] border-background "
                key={index}
              >
                <TableCell className="font-medium whitespace-nowrap">
                  {coin.name}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {coin.price}
                </TableCell>
                <TableCell className="hidden md:table-cell whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    {coin.changeDirection === "up" ? (
                      <ArrowUp className="size-4 text-green-500 self-baseline" />
                    ) : (
                      <ArrowDown className="size-4 text-red-500 self-baseline" />
                    )}
                    <p
                      className={
                        coin.changeDirection === "up"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {coin.change}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-end">
                  <ConnectButton
                    title="خرید"
                    otherClasses="dark:!bg-[#161A31] !bg-slate-100"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div></div>
    </section>
  );
}
