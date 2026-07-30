import { Navbar } from "@/components/shared/navber";
import { SidebarProvider } from "@/components/ui/sidebar";
import { getMe } from "@/service/getMe";
import DashboardSidebar from "./_components/dashboardSidebar";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();

  return (
    <div className="min-h-screen">
      <Navbar user={user} />

      <SidebarProvider>
        <DashboardSidebar user={user} />

        {/* Main Content */}
        <main className="fixed top-16 left-64 right-0 bottom-0 overflow-y-auto bg-slate-50">
          <div className="p-6">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
