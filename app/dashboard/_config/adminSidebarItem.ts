import { ISidebarItem } from "@/lib/types";
import { FileText, LayoutDashboard } from "lucide-react";

export const ADMIN_SIDEBAR_ITEMS: ISidebarItem[] = [
    
    {
        label : "User Manage",
        href : "/dashboard/users",
        icon : FileText
    },
]