"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ISidebarItem, NavbarProps } from "@/lib/types";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarMenuItems } from "../_config/sidebarManuItems";

export default function DashboardSidebar({ user }: NavbarProps) {
  const pathname = usePathname();

  const role = user?.data?.result?.role?.toUpperCase();

  const navItems: ISidebarItem[] =
    role === "TENANT"
      ? sidebarMenuItems.TENANT
      : role === "LANDLORD"
        ? sidebarMenuItems.LANDLORD
        : role === "ADMIN"
          ? sidebarMenuItems.ADMIN
          : [];

  return (
    <Sidebar collapsible="icon" className="border-r-0">
      <SidebarContent className="px-3 py-5 bg-gradient-to-b from-[#1868cd] via-[#155ebc] to-[#104b97] text-white">
        {/* Brand Header / Logo */}
        <Link href="/" className="shrink-0 flex items-center mb-6 gap-2.5">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white"
          >
            <path
              d="M16 4L4 14V26H28V14L16 4Z"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 26V18H20V26"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 12H18M14 15H18"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M2 29H30"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="text-2xl tracking-tight text-white">
            Rentnest
          </span>
        </Link>

        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={active}
                      tooltip={item.label}
                      className={`h-11 transition-all duration-200 ${
                        active
                          ? "bg-white/10 text-white font-bold"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <Link href={item.href}>
                        <item.icon
                          className={`h-5 w-5 shrink-0 ${
                            active ? "text-black" : "text-white/80"
                          }`}
                        />
                        <span className="font-medium text-sm">
                          {item.label}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
