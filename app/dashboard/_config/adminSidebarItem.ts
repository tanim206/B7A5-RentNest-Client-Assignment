import { ISidebarItem } from "@/lib/types";
import { Building2, FileText, LayoutDashboard, Users } from "lucide-react";

export const ADMIN_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Properties",
    href: "/dashboard/admin/properties",
    icon: Building2,
  },
  {
    label: "Rental Requests",
    href: "/dashboard/admin/rentals",
    icon: FileText,
  },
  {
    label: "User Manage",
    href: "/dashboard/admin/users",
    icon: Users,
  },
];
