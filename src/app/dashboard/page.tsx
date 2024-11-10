import { Metadata } from "next";
import DashboardLayout from "./components/DashboardLayout";
import Layout from "@/containers/Layout";

export const metadata: Metadata = {
  title: "Browser Analytics Dashboard",
  description: "Dashboard for visualizing browser usage and tab analytics.",
};

export default function DashboardPage() {
  return (
    <Layout>
      <div className="flex-grow w-full p-6 space-y-4">
        <div className="flex items-center justify-between space-y-2 w-full">
          <h2 className="text-2xl font-bold tracking-tight">
            Browser Analytics Dashboard
          </h2>
        </div>
        <DashboardLayout></DashboardLayout>
      </div>
    </Layout>
  );
}
