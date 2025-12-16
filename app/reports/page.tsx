"use client"

import * as React from "react"
import { PageBackground } from "@/components/windows95-ui/page-background"
import { PageHeader } from "@/components/windows95-ui/page-header"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/windows95-ui/card"
import { BarChartComponent } from "@/components/windows95-ui/bar-chart"

const chartData = [
  { month: "Jan", revenue: 4500, users: 3200, orders: 2100 },
  { month: "Feb", revenue: 5200, users: 3800, orders: 2400 },
  { month: "Mar", revenue: 4800, users: 3500, orders: 2200 },
  { month: "Apr", revenue: 6100, users: 4200, orders: 2800 },
  { month: "May", revenue: 5500, users: 3900, orders: 2600 },
  { month: "Jun", revenue: 6700, users: 4500, orders: 3100 },
]

export default function ReportsPage() {
  return (
    <PageBackground>
      <PageHeader
        title="Reports"
        description="View and generate reports"
      />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Report</CardTitle>
              <CardDescription>View monthly statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Generate monthly performance reports</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Yearly Report</CardTitle>
              <CardDescription>View yearly statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Generate yearly performance reports</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom Report</CardTitle>
              <CardDescription>Create custom reports</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">Build custom reports with filters</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Report Analytics</CardTitle>
            <CardDescription>Visual representation of report data</CardDescription>
          </CardHeader>
          <CardContent>
            <BarChartComponent
              data={chartData}
              dataKey="month"
              bars={[
                { dataKey: "revenue", name: "Revenue", color: "#000080" },
                { dataKey: "users", name: "Users", color: "#008080" },
                { dataKey: "orders", name: "Orders", color: "#800080" },
              ]}
              height={400}
            />
          </CardContent>
        </Card>
    </PageBackground>
  )
}

