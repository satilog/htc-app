"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function TabList({ data }: any) {
  const [tabs, setTabs] = useState([]);

  // Update tabs data from props and sort by usage time
  useEffect(() => {
    if (data && data.length > 0) {
      const sortedTabs: any = [...data].sort((a, b) => b.duration - a.duration);
      setTabs(sortedTabs);
    }
  }, [data]);

  // Determine max usage time for proportional bar sizing
  const maxUsageTime =
    tabs.length > 0 ? Math.max(...tabs.map((tab: any) => tab.duration)) : 0;

  return (
    <div className="flex flex-col p-5 pt-0 gap-3">
      {tabs.length > 0 ? (
        tabs.map((tab: any, index: any) => (
          <Link key={index} href={`/tabs/${tab.domain}`} className="">
            <div className="p-3 px-4 rounded-md bg-gray-100 flex items-center gap-3">
              {tab.favUrls[0] ? (
                <img
                  src={tab.favUrls[0]} // Display the first favicon URL
                  alt={`${tab.domain} favicon`}
                  className="w-6 h-6"
                />
              ) : (
                <div className="w-6 h-6 bg-black text-white justify-center align-center items-center text-center rounded-md">?</div> // Render a black square if no favicon is available
              )}
              <div className="flex-1">
                <div className="flex flex-row text-md w-full justify-between font-bold text-gray-900">
                  {tab.domain}
                </div>
                <div className="flex flex-row justify-left items-center relative h-1 mt-1 rounded gap-2">
                  <div
                    className="top-0 left-0 h-full bg-[#1f449c] rounded"
                    style={{ width: `${(tab.duration / maxUsageTime) * 80}%` }}
                  ></div>
                  <p className="text-xs text-gray-500">
                    {Math.floor(tab.duration / 60)} min
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-gray-500 text-center">No tab data available</p>
      )}
    </div>
  );
}
