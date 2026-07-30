import { Navbar } from "@/components/shared/navber";
import { getMe } from "@/service/getMe";

const propertiesLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1">
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
};

export default propertiesLayout;
