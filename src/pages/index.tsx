import Link from "next/link";
import React, { useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const customButtonClass = `mx-4 rounded-lg bg-slate-700 py-2 px-4 text-white 
    hover:bg-slate-800 focus:outline-none`;

  return (
    <div className="font-montserrat h-screen bg-background-page text-white">
      <Header />
      <button data-testid="dashboardButton" className={customButtonClass}>
        <Link href="/dashboards">Dashboards</Link>
      </button>
    </div>
  );
}
