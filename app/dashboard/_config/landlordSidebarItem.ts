import { ISidebarItem } from "@/lib/types";
import {
  LayoutDashboard,
  Building2,
  PlusSquare,
  ClipboardList,
  DollarSign,
} from "lucide-react";

export const LANDLORD_SIDEBAR_ITEMS: ISidebarItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard/landlord",
    icon: LayoutDashboard,
  },
  {
    label: "My Properties",
    href: "/dashboard/landlord/properties",
    icon: Building2,
  },
  {
    label: "Create Property",
    href: "/dashboard/landlord/properties/new",
    icon: PlusSquare,
  },
  {
    label: "Rental Requests",
    href: "/dashboard/landlord/request",
    icon: ClipboardList,
  },
  {
    label: "Earnings",
    href: "/dashboard/landlord/earnings",
    icon: DollarSign,
  },
];
