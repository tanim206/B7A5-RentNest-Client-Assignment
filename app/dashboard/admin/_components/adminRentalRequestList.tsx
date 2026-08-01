import { Badge } from "@/components/ui/badge";

export default function AdminRentalRequestList({
  requests,
}: {
  requests: any[];
}) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Latest Rental Requests</h2>
      </div>

      <div className="space-y-3">
        {requests.length > 0 ? (
          requests.slice(0, 5).map((request) => (
            <div
              key={request.id}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <div>
                <p className="font-medium">
                  {request.properties?.title || "Property"}
                </p>
                <p className="text-sm text-muted-foreground">
                  Tenant: {request.tenant?.name || "Unknown"}
                </p>
              </div>
              <Badge variant="outline">{request.rentalStatus}</Badge>
            </div>
          ))
        ) : (
          <p className="py-4 text-center text-sm text-muted-foreground">
            No rental requests found.
          </p>
        )}
      </div>
    </div>
  );
}
