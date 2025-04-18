"use client";

import Sidebar from "@/components/Sidebar";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-primary">
      <Sidebar />
      <main className="p-8">
        <h1 className="text-4xl font-bold">About Me</h1>
        {/* Add your about me content here */}
      </main>
    </div>
  );
}
