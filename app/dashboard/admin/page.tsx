import { getUsers } from "./_actions/getUsers";
import { getAdminProperties } from "./_actions/getAdminProperties";
import { getAdminRentalRequests } from "./_actions/getAdminRentalRequests";
import AdminOverviewCards from "./_components/adminOverviewCards";
import AdminPropertyList from "./_components/adminPropertyList";
import AdminRentalRequestList from "./_components/adminRentalRequestList";

export default async function AdminPage() {
  const [usersResult, propertiesResult, rentalRequestsResult] =
    await Promise.all([
      getUsers(),
      getAdminProperties(),
      getAdminRentalRequests(),
    ]);

  const users = usersResult?.data?.result || [];
  const properties = propertiesResult?.data?.properties || [];
  const rentalRequests = Array.isArray(rentalRequestsResult?.data)
    ? rentalRequestsResult.data
    : rentalRequestsResult?.data?.result || [];

  return (
    <section className="container mx-auto space-y-8 py-8 px-4 max-w-7xl">
      {/* Header Section */}
      <div className="border-b border-slate-100 pb-5">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Monitor properties, rental requests, and users from a single unified
          workspace.
        </p>
      </div>

      {/* Analytics Overview Cards */}
      <AdminOverviewCards
        propertiesCount={properties.length}
        rentalRequestsCount={rentalRequests.length}
        usersCount={users.length}
      />

      {/* Lists Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        <AdminPropertyList properties={properties} />
        <AdminRentalRequestList requests={rentalRequests} />
      </div>
    </section>
  );
}
