"use client";

import { TabsContent } from "../ui/tabs";
// import { useGetUser } from "@/hooks/useAuth";

const AdminPanelMainContent = () => {
//   const { data, isLoading } = useGetUser();
//   const { user, payments, combinedData, cart } = data || {};

//   if (isLoading) return <div>Loading...</div>;

//   const modifiedPayments = payments?.filter(
//     (payment: { status: string }) => payment.status === "COMPLETED"
//   );

  return (
    <div className="grid w-full gap-4">
      <TabsContent value="overview">
        {/* <UserOverview
          user={user}
          payments={modifiedPayments}
          currencies={combinedData}
        /> */}
      </TabsContent>

      <TabsContent value="shoppingCart">
        {/* <ShoppingCartMainContent cart={cart} /> */}
      </TabsContent>

      <TabsContent value="billing">
        {/* <UserBillingMain payments={modifiedPayments} /> */}
      </TabsContent>

      <TabsContent value="settings">
        {/* <UserSettingsContent user={user}  /> */}
      </TabsContent>
    </div>
  );
}

export default AdminPanelMainContent;
