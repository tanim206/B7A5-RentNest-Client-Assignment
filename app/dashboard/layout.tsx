import { Navbar } from "@/components/shared/navber";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { getMe } from "@/service/getMe";
import DashboardSidebar from "./_components/dashboardSidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  const role = user?.data?.result?.role;

  return (
    <TooltipProvider>
      <div className="min-h-screen flex flex-col bg-slate-50">
        {/* Top Navbar (Commented Out) */}
        {/* <Navbar user={user} /> */}

        <SidebarProvider className="" defaultOpen={true}>
          {/* Responsive Dashboard Sidebar */}
          <DashboardSidebar user={user} />

          {/* Main Content Area */}
          <SidebarInset className="flex flex-col flex-1">
            {/* Header / Sub-navbar with Sidebar Trigger */}
            <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b bg-white px-4 shadow-sm">
              <SidebarTrigger className="-ml-1" />
              <div className="h-4 w-[1px] bg-slate-200" />
              <span className="text-sm font-bold text-slate-700">
                {role ? `${role} DASHBOARD` : "DASHBOARD"}
              </span>
            </header>

            {/* Page Body Content */}
            <main className="flex-1 p-6 bg-slate-50">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </TooltipProvider>
  );
};

export default DashboardLayout;
