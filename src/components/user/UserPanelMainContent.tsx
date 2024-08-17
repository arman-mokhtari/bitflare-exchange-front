"use client";

import { TabsContent } from "../ui/tabs";
import { useGetUser } from "@/hooks/useAuth";
import UserOverview from "./userContents/userOverview/UserOverview";
import ShoppingCartMainContent from "./userContents/shopping/ShoppingCartMainContent";
import UserBillingMain from "./userContents/userBilling/UserBillingMain";
import UserSettingsContent from "./userContents/setting/UserSettingsContent";

export default function Component() {
  const { data, isLoading } = useGetUser();
  const { user, payments, combinedData, cart } = data || {};

  if (isLoading) return <div>Loading...</div>;

  const modifiedPayments = payments?.filter(
    (payment: { status: string }) => payment.status === "COMPLETED"
  );

  return (
    <div className="grid w-full gap-4">
      <TabsContent value="overview">
        <UserOverview
          user={user}
          payments={modifiedPayments}
          currencies={combinedData}
        />
      </TabsContent>

      <TabsContent value="shoppingCart">
        <ShoppingCartMainContent cart={cart} />
      </TabsContent>

      <TabsContent value="billing">
        <UserBillingMain payments={modifiedPayments} />
      </TabsContent>

      <TabsContent value="settings">
        <UserSettingsContent user={user}  />
      </TabsContent>
    </div>
  );
}
