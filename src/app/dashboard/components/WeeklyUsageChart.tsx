"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const weeklyData = [
  { day: "S", activeTime: 120 },
  { day: "M", activeTime: 180 },
  { day: "T", activeTime: 240 },
  { day: "W", activeTime: 300 },
  { day: "T", activeTime: 60 },
  { day: "F", activeTime: 150 },
  { day: "S", activeTime: 90 },
];

export function WeeklyUsageChart() {
  return (
    <ResponsiveContainer width="100%" height={150}>
      <BarChart data={weeklyData}>
        <XAxis dataKey="day" stroke="#888888" tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" tickLine={false} axisLine={false} tickFormatter={(value) => `${value}min`} />
        <Bar dataKey="activeTime" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}