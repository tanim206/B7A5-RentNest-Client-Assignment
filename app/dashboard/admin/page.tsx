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
    <section className="container mx-auto space-y-6 py-8">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Monitor properties, rental requests, and users from one place.
        </p>
      </div>

      <AdminOverviewCards
        propertiesCount={properties.length}
        rentalRequestsCount={rentalRequests.length}
        usersCount={users.length}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <AdminPropertyList properties={properties} />
        <AdminRentalRequestList requests={rentalRequests} />
      </div>
    </section>
  );
}
