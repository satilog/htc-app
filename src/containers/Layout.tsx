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
    <div className="flex w-screen h-screen">
        <CommonProvider>
            <NavBar/>
            <main className="flex overflow-y-auto bg-white items-start justify-start w-full">
                {children}
            </main>
        </CommonProvider>
    </div>
  );
}
