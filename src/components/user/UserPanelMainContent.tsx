"use client";

import { Button } from "@/components/ui/button";

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
import UserAside from "./userNav/UserAside";
import { Tabs, TabsContent } from "../ui/tabs";

export default function Component() {
  return (
    <Tabs
      defaultValue="overview"
      dir="rtl"
      className="flex min-h-screen w-full bg-muted/40"
    >
      <UserAside otherClasses="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex"/>

      <div className="flex w-full flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 gap-4 border-b bg-background px-4 sm:hidden sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <UserAside otherClasses="flex flex-row"/>
        </header>

        <main className="flex items-start p-4">
          <div className="grid w-full gap-4">
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Pro Account</CardTitle>
                  <CardDescription>
                    Your current subscription plan.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold">Pro</div>
                      <div className="text-sm text-muted-foreground">
                        Expires on 2024-07-31
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
                  <CardDescription>
                    Key metrics for your account.
                  </CardDescription>
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
        </main>
      </div>
    </Tabs>
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
