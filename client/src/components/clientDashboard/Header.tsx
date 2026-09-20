"use client";

import { Menu, Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback } from "@/ui/avatar";

interface HeaderProps {
  onMenuClick?: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-zinc-200 bg-white/90 px-4 backdrop-blur-xl md:px-8">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 text-zinc-600 hover:bg-zinc-100 md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="hidden items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 sm:flex">
          <Search className="h-4 w-4 text-zinc-400" />

          <input
            placeholder="Search..."
            className="w-40 bg-transparent text-sm outline-none placeholder:text-zinc-400"
          />

          <kbd className="hidden rounded border bg-white px-1.5 py-0.5 text-[10px] text-zinc-400 lg:block">
            ⌘ K
          </kbd>
        </div>

        <div className="sm:hidden">
          <p className="text-sm font-semibold text-zinc-950">
            ChatDock
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="relative rounded-xl p-2.5 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900">
          <Bell className="h-[18px] w-[18px]" />

          <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
        </button>

        <div className="ml-1 h-7 w-px bg-zinc-200" />

        <button className="flex items-center gap-2 rounded-xl p-1.5 pr-2 transition hover:bg-zinc-100">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="bg-zinc-950 text-xs font-medium text-white">
              LU
            </AvatarFallback>
          </Avatar>

          <div className="hidden text-left sm:block">
            <p className="text-xs font-medium text-zinc-950">
              Workspace Owner
            </p>

            <p className="text-[10px] text-zinc-500">
              Business
            </p>
          </div>
        </button>
      </div>
    </header>
  );
}