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
  Filler, // Ensure Filler is registered for background shading
  Tooltip,
  Legend,
  Title
);

export default function RadarChart() {
  const data = {
    labels: ["Social Media", "News", "Shopping", "Entertainment", "Education"],
    datasets: [
      {
        label: "Usage Time (minutes)",
        data: [60, 45, 30, 75, 20],
        backgroundColor: "rgba(31, 68, 156, 0.2)", // Light blue shading
        borderColor: "rgb(31 68 156)", // Solid blue line
        borderWidth: 2,
        pointBackgroundColor: "rgb(31 68 156)", // Point color without border
        pointBorderWidth: 0, // Removes border around points
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
        r: {
          beginAtZero: true,
          max: 100,
          angleLines: {
            display: true,
            color: "rgba(0, 0, 0, 0.1)",
          },
          grid: {
            color: "rgba(0, 0, 0, 0.1)",
          },
          pointLabels: {
            color: "#666",
            font: {
              size: 12,
              weight: "normal",
            },
          },
          ticks: {
            display: true,
            backdropColor: "rgba(255, 255, 255, 0.8)",
            color: "#666",
            stepSize: 20,
            beginAtZero: true,
          },
        },
      },
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[90%] h-[90%]">
        <Radar data={data} options={options} />
      </div>
    </div>
  );
}