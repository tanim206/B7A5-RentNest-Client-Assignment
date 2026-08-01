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
    label: "Overview",
    href: "/dashboard/landlord",
    icon: LayoutDashboard,
  },

  {
    label: "Create Property",
    href: "/dashboard/landlord/properties/new",
    icon: PlusSquare,
  },
  {
    label: "Rental Requests",
    href: "/dashboard/landlord/requests",
    icon: ClipboardList,
  },
];
