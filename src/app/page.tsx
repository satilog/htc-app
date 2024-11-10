// app/page.tsx
"use client";

import Layout from "@/containers/Layout";

export default function Page() {
  return (
    <Layout headerFullWidth={false}>
      <div className="flex flex-col justify-center items-center py-14 gap-2">
        <h2 className="text-4xl font-bold text-brand-tin-dark">
          Welcome to{" "}
          <span className="text-brand-blue">
          </span>
        </h2>
        <p className="text-xl"></p>
      </div>
    </Layout>
  );
}
