import Header from "@/components/Header";
import React from "react";
import Dashboard from "@/components/Dashboard";

const Dashboards = () => {
  return (
    <div className="font-montserrat h-full w-full bg-background-page text-white">
      <Header />
      <div className="flex items-center justify-center">
        <Dashboard />
      </div>
      <div className="h-16"></div>
    </div>
  );
};

export default Dashboards;
