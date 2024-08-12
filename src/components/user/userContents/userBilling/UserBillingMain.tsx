import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BillingDataTable } from "./BillingDataTable";

const UserBillingMain = ({ payments }: { payments: any }) => {
  return (
    <Card className="lg:col-span-5">
        <CardHeader>
          <CardTitle className="text-xl">فاکتورهای من</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
          <BillingDataTable payments={payments} />
        </CardContent>
      </Card>
  )
}

export default UserBillingMain