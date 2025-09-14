"use client";

import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";

const issuesData = [
  { issue: "Anxiety", count: 186, fill: "var(--color-anxiety)" },
  { issue: "Stress", count: 205, fill: "var(--color-stress)" },
  { issue: "Depression", count: 124, fill: "var(--color-depression)" },
  { issue: "Burnout", count: 98, fill: "var(--color-burnout)" },
  { issue: "Sleep", count: 140, fill: "var(--color-sleep)" },
  { issue: "Social", count: 75, fill: "var(--color-social)" },
];

const appointmentsData = [
  { month: "Jan", count: 86 },
  { month: "Feb", count: 94 },
  { month: "Mar", count: 112 },
  { month: "Apr", count: 121 },
  { month: "May", count: 132 },
  { month: "Jun", count: 140 },
];

const chartConfig: ChartConfig = {
  count: {
    label: "Count",
  },
  anxiety: {
    label: "Anxiety",
    color: "hsl(var(--chart-1))",
  },
  stress: {
    label: "Stress",
    color: "hsl(var(--chart-2))",
  },
  depression: {
    label: "Depression",
    color: "hsl(var(--chart-3))",
  },
  burnout: {
    label: "Burnout",
    color: "hsl(var(--chart-4))",
  },
  sleep: {
    label: "Sleep",
    color: "hsl(var(--chart-5))",
  },
  social: {
    label: "Social",
    color: "hsl(var(--chart-1))", // Re-using a color
  },
};

export function AnalyticsCharts() {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Commonly Reported Issues</CardTitle>
          <CardDescription>
            Based on AI chat interactions and resource searches
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={issuesData}>
              <XAxis
                dataKey="issue"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="count" radius={8} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Appointment Bookings</CardTitle>
          <CardDescription>January - June 2024</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <LineChart accessibilityLayer data={appointmentsData}>
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickCount={4}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="count"
                type="natural"
                stroke="var(--color-anxiety)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  );
}
