"use client";

import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
);

export default function CategoryUsageChart({ data }) {
  // Get top 5 categories by duration in descending order
  const topCategories = data
    ? [...data].sort((a, b) => b.duration - a.duration).slice(0, 5)
    : [];

  // Prepare chart data if there are top categories, otherwise show empty chart
  const chartData = topCategories.length > 0
    ? {
        labels: topCategories.map((item) => item.name),
        datasets: [
          {
            label: "Usage Time (minutes)",
            data: topCategories.map((item) => Math.floor(item.duration / 60)),
            backgroundColor: "rgba(31, 68, 156, 0.2)",
            borderColor: "rgb(31 68 156)",
            borderWidth: 2,
            pointBackgroundColor: "rgb(31 68 156)",
          },
        ],
      }
    : null;

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' },
      tooltip: { enabled: true },
    },
    scales: {
      r: {
        beginAtZero: true,
        angleLines: { display: true, color: "rgba(0, 0, 0, 0.1)" },
        grid: { color: "rgba(0, 0, 0, 0.1)" },
        pointLabels: { color: "#666", font: { size: 12, weight: "normal" } },
        ticks: { display: true, stepSize: 20, beginAtZero: true, color: "#666" },
      },
    },
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      {chartData ? (
        <div className="w-[90%] h-[90%]">
          <Radar data={chartData} options={options} />
        </div>
      ) : (
        <p className="text-gray-500 text-center">No category data available</p>
      )}
    </div>
  );
}