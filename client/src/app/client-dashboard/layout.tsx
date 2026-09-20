"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "../../components/clientDashboard/Sidebar";
import Header from "../../components/clientDashboard/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar Section */}
      <Sidebar
        mobileOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
        pathname={pathname}
      />

      <div className="md:pl-65">
        {/* Header Section*/}
        <Header onMenuClick={() => setMobileSidebarOpen(true)} />

        {/* Main Content */}
        <main>{children}</main>
      </div>
    </div>
  );
}
