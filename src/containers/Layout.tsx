"use client";

import { CommonProvider } from "@/app/context/CommonContext";
import NavBar from "@/components/navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode | ReactNode[];
  headerFullWidth?: boolean;
  headerFixed?: boolean;
  onlyLogo?: boolean;
}

export default function Layout({
  children,
  headerFullWidth = false,
  headerFixed = true,
  onlyLogo = false,
}: LayoutProps) {
  const isScreenHeight = true;

  return (
    <div
      className={`flex flex-col ${
        isScreenHeight ? "h-screen justify-between" : "h-screen justify-center"
      }`}
    >
      <NavBar />

      <main className="flex-grow pl-20 items-start justify-start w-full">
        <CommonProvider>{children}</CommonProvider>
      </main>
    </div>
  );
}
