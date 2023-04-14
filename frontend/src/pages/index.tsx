import Login from "@/components/Login";
import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="font-montserrat h-screen bg-[url('/pattern-motor.svg')] bg-center bg-no-repeat text-white">
      <Header />
      <Login />
    </div>
  );
}
