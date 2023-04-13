import Login from "@/components/Login";
import Link from "next/link";
import React from "react";
import Header from "../components/Header";

export default function Home() {
  const customButtonClass = `mx-4 rounded-lg bg-slate-700 py-2 px-4 text-white 
    hover:bg-slate-800 focus:outline-none`;

  return (
    <div className="font-montserrat h-screen bg-[url('/pattern-motor.svg')] bg-center bg-no-repeat text-white">
      <Header />
      <div>
        <div className="flex h-screen items-center justify-center">
          <Login />
          {/* <button data-testid="dashboardButton" className={customButtonClass}>
            <Link href="/dashboards">Dashboards</Link>
          </button> */}
        </div>
      </div>
    </div>
  );
}
