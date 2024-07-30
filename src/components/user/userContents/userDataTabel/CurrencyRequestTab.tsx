import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MyCurrency } from "@/types";
import UserDetailTabReq from "./UserDetailTabReq";
import UserWithdrawTabReq from "./UserWithdrawTabReq";

export function CurrencyRequestTab({ rowData }: { rowData: MyCurrency }) {
  console.log("rowData: ", rowData);
  return (
    <Tabs dir="rtl" defaultValue="detail" className="">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="detail">جزئیات</TabsTrigger>
        <TabsTrigger value="withdraw">برداشت</TabsTrigger>
      </TabsList>

      <TabsContent value="detail">
        <UserDetailTabReq rowData={rowData} />
      </TabsContent>

      <TabsContent value="withdraw">
        <UserWithdrawTabReq rowData={rowData} />
      </TabsContent>
    </Tabs>
  );
}
