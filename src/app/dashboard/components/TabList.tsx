"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function TabList() {
  // Dummy data representing active browser tabs with usage time in seconds
  const [tabs, setTabs] = useState([
    { tabId: "tab1", title: "Social Media", usageTime: 3600 }, // 1 hour
    { tabId: "tab2", title: "News", usageTime: 2700 },
    { tabId: "tab3", title: "Shopping", usageTime: 1800 },
    { tabId: "tab4", title: "Entertainment", usageTime: 4500 },
    { tabId: "tab5", title: "Education", usageTime: 1200 },
  ]);

  // Sort tabs by descending order of usage time
  useEffect(() => {
    setTabs((prevTabs) =>
      [...prevTabs].sort((a, b) => b.usageTime - a.usageTime)
    );
  }, []);

  // Determine max usage time for proportional bar sizing
  const maxUsageTime = Math.max(...tabs.map((tab) => tab.usageTime));

  return (
    <div className="flex flex-col p-5 pt-0 gap-3">
      {tabs.map((tab) => (
        <Link key={tab.tabId} href={`/tabs/${tab.tabId}`} className="">
          <div className="p-3 px-4 rounded-md bg-gray-100">
            <div className="flex flex-row text-md w-full justify-between font-bold text-gray-900">
              {tab.title}
            </div>
            <div className="flex flex-row justify-left items-center relative h-1 mt-1 rounded gap-2">
              <div
                className="top-0 left-0 h-full bg-[#1f449c] rounded"
                style={{ width: `${(tab.usageTime / maxUsageTime) * 80}%` }}
              ></div>
              <p className="text-xs text-gray-500">
                {Math.floor(tab.usageTime / 60)} min
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
