import { ISidebarItem } from "@/lib/types";
import { FileText, LayoutDashboard } from "lucide-react";

export const ADMIN_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard/admin",
    icon: FileText,
  },

  {
    label: "User Manage",
    href: "/dashboard/admin/users",
    icon: FileText,
  },
];
