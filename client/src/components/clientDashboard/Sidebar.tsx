"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Bot,
  BookOpen,
  MessageSquare,
  Users,
  Brain,
  Wrench,
  ShoppingBag,
  Palette,
  BarChart3,
  Settings,
  Code2,
  X,
} from "lucide-react";

const navigation = [
  {
    title: "Overview",
    href: "/client-dashboard/overview",
    icon: LayoutDashboard,
  },
  {
    title: "Agent",
    href: "/client-dashboard/agent",
    icon: Bot,
  },
  {
    title: "Knowledge",
    href: "/client-dashboard/knowledge",
    icon: BookOpen,
  },
  {
    title: "Conversations",
    href: "/client-dashboard/conversations",
    icon: MessageSquare,
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: Users,
  },
  {
    title: "Memory",
    href: "/dashboard/memory",
    icon: Brain,
  },
  {
    title: "Tools",
    href: "/dashboard/tools",
    icon: Wrench,
  },
  {
    title: "Orders",
    href: "/dashboard/orders",
    icon: ShoppingBag,
  },
  {
    title: "Appearance",
    href: "/dashboard/appearance",
    icon: Palette,
  },
  {
    title: "Evaluation",
    href: "/dashboard/evaluation",
    icon: BarChart3,
  },
];

const bottomNavigation = [
  {
    title: "Developer",
    href: "/dashboard/developer",
    icon: Code2,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

interface SidebarProps {
  mobileOpen?: boolean;
  onClose?: () => void;
  pathname?: string;
}

export default function Sidebar({
  mobileOpen = false,
  onClose,
  pathname = "",
}: SidebarProps) {

  return (
    <>
      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-[260px] flex-col
          border-r border-zinc-200 bg-white
          transition-transform duration-300
          md:translate-x-0
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Logo */}
        <div className="flex h-[72px] items-center justify-between border-b border-zinc-200 px-5">
          <Link
            href="/dashboard"
            className="flex items-center gap-3"
            onClick={onClose}
          >
            <img src="logo.webp" alt="logo" />

            <div>
              <h1 className="text-[15px] font-semibold tracking-tight text-zinc-950">
                ChatDock
              </h1>

              <p className="text-[11px] text-zinc-500">
                AI Agent Platform
              </p>
            </div>
          </Link>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 md:hidden"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-3 py-5">
          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400">
            Workspace
          </p>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;

              const isActive =
                item.href === "/dashboard"
                  ? pathname === "/dashboard"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    group flex items-center gap-3 rounded-xl px-3 py-2.5
                    text-sm font-medium transition-all
                    ${
                      isActive
                        ? "bg-zinc-950 text-white shadow-sm"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                    }
                  `}
                >
                  <Icon
                    className={`h-[17px] w-[17px] ${
                      isActive
                        ? "text-white"
                        : "text-zinc-400 group-hover:text-zinc-700"
                    }`}
                  />

                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>

          <div className="my-5 h-px bg-zinc-200" />

          <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400">
            Manage
          </p>

          <nav className="space-y-1">
            {bottomNavigation.map((item) => {
              const Icon = item.icon;

              const isActive = pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`
                    flex items-center gap-3 rounded-xl px-3 py-2.5
                    text-sm font-medium transition-all
                    ${
                      isActive
                        ? "bg-zinc-950 text-white"
                        : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                    }
                  `}
                >
                  <Icon className="h-[17px] w-[17px]" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Organization */}
        <div className="border-t border-zinc-200 p-3">
          <div className="rounded-xl bg-zinc-50 p-3">
            <p className="text-xs font-medium text-zinc-950">
              Your Workspace
            </p>

            <p className="mt-1 truncate text-[11px] text-zinc-500">
              Free workspace
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}