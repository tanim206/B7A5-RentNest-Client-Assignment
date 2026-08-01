import { ISidebarItem } from "@/lib/types";
import { FileText, LayoutDashboard, User } from "lucide-react";

export const TENANT_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard/tenant",
    icon: LayoutDashboard,
  },

  {
    label: "Rental Request",
    href: "/dashboard/tenant/rentals",
    icon: FileText,
  },
];
