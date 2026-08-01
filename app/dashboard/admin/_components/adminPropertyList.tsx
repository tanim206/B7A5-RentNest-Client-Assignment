import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function AdminPropertyList({
  properties,
}: {
  properties: any[];
}) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recent Properties</h2>
        <Link
          href="/dashboard/admin/properties"
          className="text-sm text-blue-600 hover:underline"
        >
          View all
        </Link>
      </div>

      <div className="space-y-3">
        {properties.length > 0 ? (
          properties.slice(0, 5).map((property) => (
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
              <div className="flex items-center gap-2">
                <Badge variant="secondary">{property.propertyType}</Badge>
                <Badge
                  variant={
                    property.availabilityStatus === "BOOKED"
                      ? "destructive"
                      : "default"
                  }
                >
                  {property.availabilityStatus}
                </Badge>
              </div>
            </div>
          ))
        ) : (
          <p className="py-4 text-center text-sm text-muted-foreground">
            No properties found.
          </p>
        )}
      </div>
    </div>
  );
}
