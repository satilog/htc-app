"use client"

import { useState } from "react";
import BarChart from "@/app/dashboard/components/CustomBarChart";
import ICUPatientList from "@/app/dashboard/components/TabList";
import CategoryUsageChart from "./CategoryUsageChart";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DashboardLayout() {
  const [stats, setStats] = useState({
    productiveTime: 1200,
    leisureTime: 900,
    mostActiveTimeOfDay: "Evening",
    topCategory: "Social Media",
  });

  const categories = [
    "Social Media", "News", "Shopping", "Entertainment", "Education", 
    "Productivity", "Communication", "Finance", "Search Engines",
    "Health & Fitness", "Real Estate", "Travel & Navigation",
    "Technology & Gadgets", "Lifestyle", "Government & Legal",
    "Job Search", "DIY & Hobbies", "Automotive", "Gaming", "Other",
  ];

  return (
    <div className="flex flex-col flex-grow w-full">
      <div className="flex-1 space-y-4 p-0 h-full">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold">
                Productive Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {stats.productiveTime} min
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold">
                Leisure Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {stats.leisureTime} min
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold">
                Most Active Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {stats.mostActiveTimeOfDay}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-bold">
                Top Category
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.topCategory}</div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-3 p-4 h-full">
            <BarChart />
          </Card>
          <Card className="col-span-2 h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold">
                Usage by Categories
              </CardTitle>
            </CardHeader>
            <div className="h-[calc(7*4rem)] overflow-y-auto">
              <CategoryUsageChart />
            </div>
          </Card>
          <Card className="col-span-2 h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold">
                Most Used Tabs
              </CardTitle>
            </CardHeader>
            <div className="h-[calc(7*4rem)] overflow-y-auto">
              <ICUPatientList />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}