import React from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-slate-200 ">
      <div className="fixed hidden md:block md:w-64">
        <SideNav />
      </div>

      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
}
