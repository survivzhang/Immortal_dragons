"use client";

import { useState, useEffect } from "react";
import sidebar from "@/components/Sidebar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-primary">
      <sidebar />

      <main className="p-8">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        {/* Add your homepage content here */}
      </main>
    </div>
  );
}
