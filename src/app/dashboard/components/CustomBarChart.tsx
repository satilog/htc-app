"use client";

import React, { useState, useEffect } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

export default function StatBarChart() {
  // Dummy data with screen time for each day of the week for both last week and current week
  const [data, setData] = useState([
    { name: "Monday", lastWeek: Math.floor(Math.random() * 240), currentWeek: Math.floor(Math.random() * 240) },
    { name: "Tuesday", lastWeek: Math.floor(Math.random() * 240), currentWeek: Math.floor(Math.random() * 240) },
    { name: "Wednesday", lastWeek: Math.floor(Math.random() * 240), currentWeek: Math.floor(Math.random() * 240) },
    { name: "Thursday", lastWeek: Math.floor(Math.random() * 240), currentWeek: Math.floor(Math.random() * 240) },
    { name: "Friday", lastWeek: Math.floor(Math.random() * 240), currentWeek: Math.floor(Math.random() * 240) },
    { name: "Saturday", lastWeek: Math.floor(Math.random() * 240), currentWeek: Math.floor(Math.random() * 240) },
    { name: "Sunday", lastWeek: Math.floor(Math.random() * 240), currentWeek: Math.floor(Math.random() * 240) },
  ]);

  return (
    <ResponsiveContainer width="100%" height={"100%"}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}m`} // Display in minutes
        />
        <Tooltip
          cursor={{ fill: 'rgba(255, 255, 255, 0.2)' }}
          formatter={(value) => [`${value} minutes`, 'Screen Time']}
        />
        <Legend verticalAlign="top" height={36} />
        <Bar
          dataKey="lastWeek"
          // fill="rgb(242,164,60)" // Orange for last week
          // fill="#ABB6CC"
          fill="rgba(171, 182, 204, 0.6)"
          radius={[4, 4, 0, 0]}
          name="Last Week"
        />
        <Bar
          dataKey="currentWeek"
          // fill="#3B83F7" // Blue for current week
          fill="rgb(31 68 156)" // Blue for current week
          radius={[4, 4, 0, 0]}
          name="Current Week"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}