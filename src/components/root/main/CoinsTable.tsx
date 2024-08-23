import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { coinsData, headers } from "@/data";
import ConnectButton from "../../ui/ConnectButton";
import { ArrowDown, ArrowUp } from "lucide-react";

export default function CoinsTable() {
  return (
    <section className="py-14">
      <div className="text-gray-600">
        <div className="">
          <h3 className="text-center text-2xl font-semibold text-gray-800 dark:text-gray-200 md:text-3xl">
            قیمت لحظه ای ارزهای دیجیتال
          </h3>

          <p className="my-2 text-gray-600 dark:text-gray-200">
            منطبق بر بازار‌های جهانی
          </p>
        </div>

        <div className="overflow-hidden">
          <Table className="overflow-hidden">
            <TableHeader>
              <TableRow className="!border-b-[12px] border-background">
                {headers.map((header, index) => (
                  <TableHead
                    key={index}
                    className={`whitespace-nowrap text-right text-gray-800 dark:text-gray-200 ${
                      index === 2 ? "hidden md:table-cell" : ""
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
                  <TableCell className="whitespace-nowrap font-medium text-gray-800 dark:text-gray-200">
                    {coin.name}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-gray-800 dark:text-gray-200">
                    {coin.price}
                  </TableCell>
                  <TableCell className="hidden whitespace-nowrap md:table-cell">
                    <div className="flex items-center gap-2">
                      {coin.changeDirection === "up" ? (
                        <ArrowUp className="size-4 self-baseline text-green-500" />
                      ) : (
                        <ArrowDown className="size-4 self-baseline text-red-500" />
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
        </div>
      </div>
    </section>
  );
}
