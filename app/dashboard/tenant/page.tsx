import Link from "next/link";
import { getRentalRequests } from "./_actions/getRentalRequests";

export default async function TenantDashboardPage() {
  const result = await getRentalRequests();
  const rentals = result?.data || [];

  const approvedCount = rentals.filter(
    (rental: any) => rental.rentalStatus === "APPROVED",
  ).length;
  const pendingCount = rentals.filter(
    (rental: any) => rental.rentalStatus === "PENDING",
  ).length;
  const rejectedCount = rentals.filter(
    (rental: any) => rental.rentalStatus === "REJECTED",
  ).length;

  return (
    <section className="container mx-auto space-y-6 py-8">
      <div>
        <h1 className="text-3xl font-bold">Tenant Dashboard</h1>
        <p className="text-muted-foreground">
          Track your rental requests and payments from one place.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Total Requests</p>
          <p className="mt-2 text-2xl font-semibold">{rentals.length}</p>
        </div>
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Approved</p>
          <p className="mt-2 text-2xl font-semibold">{approvedCount}</p>
        </div>
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Pending</p>
          <p className="mt-2 text-2xl font-semibold">{pendingCount}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Quick Actions</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/dashboard/tenant/rentals"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white"
            >
              View Rental Requests
            </Link>
          </div>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Requests</h2>
          </div>
          <div className="space-y-3">
            {rentals.length > 0 ? (
              rentals.slice(0, 5).map((rental: any) => (
                <div
                  key={rental.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div>
                    <p className="font-medium">
                      {rental.properties?.title || "Property"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {rental.properties?.location || "Location"}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {rental.rentalStatus}
                  </span>
                </div>
              ))
            ) : (
              <p className="py-4 text-center text-sm text-muted-foreground">
                No rental requests yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
