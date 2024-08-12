"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { CartesianGrid, XAxis, Line, LineChart } from "recharts";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";

import { TabsContent } from "../ui/tabs";
import { useGetUser } from "@/hooks/useAuth";
import UserOverview from "./userContents/userOverview/UserOverview";
import ShoppingCartMainContent from "./userContents/shopping/ShoppingCartMainContent";
import UserBillingMain from "./userContents/userBilling/UserBillingMain";


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
        <UserBillingMain
          payments={modifiedPayments}
        />
      </TabsContent>

      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Traffic Overview</CardTitle>
            <CardDescription>
              Visualize your website traffic over time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LinechartContent className="aspect-[4/3] w-full" />
          </CardContent>
        </Card>
      </TabsContent>
    </div>
  );
}

function LinechartContent(props: any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
