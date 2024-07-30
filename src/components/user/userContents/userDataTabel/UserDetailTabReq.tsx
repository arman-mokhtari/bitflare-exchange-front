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
import { toPersianNumbers } from "@/utils/toPersianNumbers";

import { CalendarIcon, CopyIcon } from "lucide-react";
const UserDetailTabReq = ({ rowData }: { rowData: MyCurrency }) => {
  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardHeader className="space-y-2 p-2">
        <CardTitle className="flex flex-col items-center justify-center gap-2 text-xl font-medium">
          <p className="">{rowData.currency}</p>
          <p>{toPersianNumbers(rowData.amount)} ريال</p>
        </CardTitle>
        <CardDescription className="flex flex-row items-center justify-between">
          <div className="flex gap-2">
            <CalendarIcon className="size-4" />
            <p>24 مهر 1403</p>
          </div>
          <div>تعداد: 500</div>
        </CardDescription>
      </CardHeader>
      <Separator className="space-y-2" />
      <CardContent className="space-y-2 p-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">تاریخچه معاملات</span>
          <Button
            variant="ghost"
            className="p-0 text-xs text-blue-600 hover:bg-transparent"
            onClick={() => navigator.clipboard.writeText("24 مهر 1403")}
          >
            <CopyIcon className="size-4" />
          </Button>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between text-sm">
            <span>June 15, 2024</span>
            <span>+$50.00</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>June 10, 2024</span>
            <span>-$25.00</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>June 5, 2024</span>
            <span>+$75.00</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserDetailTabReq;
