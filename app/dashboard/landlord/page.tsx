import Link from "next/link";
import PaymentButton from "../tenant/rentals/_components/paymentButton";
import { getlandloardProperties } from "./properties/_actions/landloadgetProperty";
import { getLandlordRequests } from "./requests/_actions/getLandlordRequests";

export default async function LandlordDashboardPage() {
  const [propertiesResult, requestsResult] = await Promise.all([
    getlandloardProperties(),
    getLandlordRequests(),
  ]);

  const properties =
    propertiesResult?.data?.properties || propertiesResult?.data || [];
  const requests = requestsResult?.data || [];

  const pendingRequests = requests.filter(
    (request: any) => request.rentalStatus === "PENDING",
  ).length;
  const approvedRequests = requests.filter(
    (request: any) => request.rentalStatus === "APPROVED",
  ).length;

  return (
    <section className="container mx-auto space-y-6 py-8">
      <div>
        <h1 className="text-3xl font-bold">Landlord Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your properties and review incoming rental requests.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Your Properties</p>
          <p className="mt-2 text-2xl font-semibold">{properties.length}</p>
        </div>
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Pending Requests</p>
          <p className="mt-2 text-2xl font-semibold">{pendingRequests}</p>
        </div>
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <p className="text-sm text-muted-foreground">Approved Requests</p>
          <p className="mt-2 text-2xl font-semibold">{approvedRequests}</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Your Properties</h2>
            <Link
              href="/dashboard/landlord/properties"
              className="text-sm text-blue-600 hover:underline"
            >
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {properties.length > 0 ? (
              properties.slice(0, 5).map((property: any) => (
                <div
                  key={property.id}
                  className="flex items-center justify-between rounded-lg border p-3"
                >
                  <div>
                    <p className="font-medium">{property.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {property.location}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {property.availabilityStatus}
                  </span>
                </div>
              ))
            ) : (
              <p className="py-4 text-center text-sm text-muted-foreground">
                No properties added yet.
              </p>
            )}
          </div>
        </div>

        <div className="rounded-xl border bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Requests</h2>
            <Link
              href="/dashboard/landlord/requests"
              className="text-sm text-blue-600 hover:underline"
            >
              Review all
            </Link>
          </div>
          <div className="space-y-3">
            {requests.length > 0 ? (
              requests.slice(0, 5).map((request: any) => (
                <div
                  key={request.id}
                  className="flex flex-col gap-3 rounded-lg border p-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <p className="font-medium">
                      {request.properties?.title || "Property"}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {request.tenant?.name || "Tenant"}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {request.rentalStatus}
                    </span>
                    {request.rentalStatus === "APPROVED" && (
                      <div className="min-w-25">
                        <PaymentButton rentalRequestId={request.id} />
                      </div>
                    )}
                  </div>
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
