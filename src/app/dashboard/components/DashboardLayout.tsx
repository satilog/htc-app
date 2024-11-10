"use client";

import { useState, useEffect } from "react";
import BarChart from "@/app/dashboard/components/CustomBarChart";
import ICUPatientList from "@/app/dashboard/components/TabList";
import CategoryUsageChart from "./CategoryUsageChart";
import {useCommon} from "@/app/context/CommonContext"
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

  const [categoryData, setCategoryData] = useState([]);
  const [tabData, setTabData] = useState([]);
  const {user} = useCommon();

  useEffect(() => {
    // Fetch category durations data
    async function fetchCategoryData() {
      try {
        const response = await fetch("http://127.0.0.1:5000/user/user_activity_summary/" + user.email, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);
        const data = await response.json();
        const categoryDurations = Object.keys(data).map(category => ({
          name: category,
          duration: data[category],
        }));
        setCategoryData(categoryDurations);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    }

    // Fetch domain durations data
    async function fetchTabData() {
      try {
        const response = await fetch("http://127.0.0.1:5000/user/user_domain_summary/" + user.email, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setTabData(data);
      } catch (error) {
        console.error("Error fetching tab data:", error);
      }
    }

    fetchCategoryData();
    fetchTabData();
  }, []);

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
              <CategoryUsageChart data={categoryData} />
            </div>
          </Card>
          <Card className="col-span-2 h-full">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold">
                Most Used Tabs
              </CardTitle>
            </CardHeader>
            <div className="h-[calc(7*4rem)] overflow-y-auto">
              <ICUPatientList data={tabData} />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}