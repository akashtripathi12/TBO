"use client";

import Navigation from "@/components/legacy/Navigation";
import Sidebar from "@/components/legacy/Sidebar";
import { SidebarProvider, useSidebar } from "@/context/SidebarContext";

function DashboardLayoutContent({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="mt-16">{children}</main>
    </>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayoutContent>{children}</DashboardLayoutContent>;
}
