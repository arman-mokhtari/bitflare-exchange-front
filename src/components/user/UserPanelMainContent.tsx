"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CartesianGrid, XAxis, Line, LineChart, Bar, BarChart } from "recharts";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";

import { DollarSignIcon, TrendingUpIcon } from "lucide-react";
import { TabsContent } from "../ui/tabs";
import UserOverview from "./userContents/UserOverview";
import { useGetUser } from "@/hooks/useAuth";

export default function Component() {
  const { data, isLoading } = useGetUser();
  const { user, payments, combinedData } = data || {};

  if (isLoading) return <div>Loading...</div>;

  const modifiedPayments = payments?.filter(
    (payment: { status: string }) => payment.status === "COMPLETED"
  );
console.log("combinedData: ",combinedData)
  return (
    <div className="grid w-full gap-4">
      <TabsContent value="overview">
        <UserOverview user={user} payments={modifiedPayments} currencies={combinedData} />
      </TabsContent>

      <TabsContent value="analytics">
        <Card>
          <CardHeader>
            <CardTitle>Usage</CardTitle>
            <CardDescription>Your current usage metrics.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">75%</div>
                  <div className="text-sm text-muted-foreground">
                    Storage used
                  </div>
                </div>
                <Progress value={75} className="w-24" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">45%</div>
                  <div className="text-sm text-muted-foreground">
                    Bandwidth used
                  </div>
                </div>
                <Progress value={45} className="w-24" />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="settings">
        <Card>
          <CardHeader>
            <CardTitle>Insights</CardTitle>
            <CardDescription>Key metrics for your account.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">+12.5%</div>
                  <div className="text-sm text-muted-foreground">
                    Traffic growth
                  </div>
                </div>
                <TrendingUpIcon className="size-6 text-green-500" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">$1,250</div>
                  <div className="text-sm text-muted-foreground">
                    Revenue this month
                  </div>
                </div>
                <DollarSignIcon className="size-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>{" "}
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
      <TabsContent value="">
        <Card>
          <CardHeader>
            <CardTitle>Conversion Rates</CardTitle>
            <CardDescription>
              Track your conversion rates across different channels.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <BarchartContent className="aspect-[4/3] w-full" />
          </CardContent>
        </Card>
      </TabsContent>
    </div>
  );
}

function BarchartContent(props: any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <BarChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
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
