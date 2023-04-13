import Header from "@/components/Header";
import React from "react";
import Dashboard from "@/components/Dashboard";

const Dashboards = () => {
  return (
    <div className="font-montserrat h-screen w-full bg-background-page text-white">
      <Header />
      <div className="flex items-center justify-center pb-20">
        <Dashboard />
      </div>
    </div>
  );
};

export default Dashboards;
