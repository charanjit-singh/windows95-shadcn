"use client"

import * as React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts"
import { cn } from "@/lib/utils"

interface BarChartProps {
  data: Array<Record<string, any>>
  dataKey: string
  bars: Array<{
    dataKey: string
    name: string
    color?: string
  }>
  className?: string
  height?: number
}

export function BarChartComponent({
  data,
  dataKey,
  bars,
  className,
  height = 300,
}: BarChartProps) {
  const win95Colors = [
    "#000080", // Navy
    "#008080", // Teal
    "#800080", // Purple
    "#808000", // Olive
    "#008000", // Green
  ]

  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#808080"
            vertical={false}
          />
          <XAxis
            dataKey={dataKey}
            tick={{ fill: "#000000", fontSize: 12 }}
            axisLine={{ stroke: "#000000" }}
            tickLine={{ stroke: "#000000" }}
          />
          <YAxis
            tick={{ fill: "#000000", fontSize: 12 }}
            axisLine={{ stroke: "#000000" }}
            tickLine={{ stroke: "#000000" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#c0c0c0",
              border: "2px solid #000000",
              borderRadius: 0,
              boxShadow: "inset 1px 1px #ffffff, inset -1px -1px #000000",
            }}
            labelStyle={{ color: "#000000", fontWeight: "bold" }}
            itemStyle={{ color: "#000000" }}
          />
          <Legend
            wrapperStyle={{ paddingTop: "10px" }}
            iconType="square"
            iconSize={12}
          />
          {bars.map((bar, index) => (
            <Bar
              key={bar.dataKey}
              dataKey={bar.dataKey}
              name={bar.name}
              fill={bar.color || win95Colors[index % win95Colors.length]}
              radius={0}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

