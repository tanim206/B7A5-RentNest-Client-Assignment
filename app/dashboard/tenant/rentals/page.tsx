import PaymentButton from "./_components/paymentButton";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Calendar, MapPin, Tag, Home } from "lucide-react";
import { getRentalRequests } from "../_actions/getRentalRequests";
import RentalDetailsDialog from "./_components/rentalDetailsDialog";

export default async function TenantRentalRequestPage() {
  const result = await getRentalRequests();
  const rentals = result?.data || [];

  // Rental Status অনুযায়ী Badge-এর কালার সেট করার জন্য Helper Function
  const getStatusBadge = (status: string) => {
    switch (status?.toUpperCase()) {
      case "APPROVED":
        return "bg-emerald-500/10 text-emerald-600 border-emerald-200 hover:bg-emerald-500/20";
      case "PENDING":
        return "bg-amber-500/10 text-amber-600 border-amber-200 hover:bg-amber-500/20";
      case "REJECTED":
        return "bg-rose-500/10 text-rose-600 border-rose-200 hover:bg-rose-500/20";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <section className="space-y-6">
      {/* Page Title & Subtitle */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
          My Rental Requests
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          View and manage all your rental property applications.
        </p>
      </div>

      {/* Card Grid Layout */}
      {rentals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rentals.map((rental: any) => (
            <Card
              key={rental.id}
              className="flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Header Section */}
              <CardHeader className="p-5 pb-3 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#1868cd] shrink-0">
                      <Home size={18} />
                    </div>
                    <h3 className="line-clamp-1 text-base font-bold text-slate-900">
                      {rental.properties?.title || "Property Request"}
                    </h3>
                  </div>

                  <Badge
                    variant="outline"
                    className={`rounded-full px-3 py-0.5 text-[11px] font-semibold uppercase shrink-0 ${getStatusBadge(
                      rental.rentalStatus,
                    )}`}
                  >
                    {rental.rentalStatus}
                  </Badge>
                </div>
              </CardHeader>

              {/* Body Section */}
              <CardContent className="p-5 pt-0 space-y-3 text-xs text-slate-600 font-medium">
                {/* Location */}
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-slate-400 shrink-0" />
                  <span className="truncate">
                    {rental.properties?.location}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <Tag size={14} className="text-slate-400 shrink-0" />
                  <span className="text-sm font-bold text-slate-900">
                    ৳ {rental.properties?.price?.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-slate-400">/ monthly</span>
                </div>

                {/* Created Date */}
                <div className="flex items-center gap-2 text-slate-400 pt-1 border-t border-slate-100">
                  <Calendar size={13} className="shrink-0" />
                  <span>
                    Requested on:{" "}
                    {new Date(rental.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </CardContent>

              {/* Action Buttons Footer */}
              <CardFooter className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-2">
                <RentalDetailsDialog rental={rental} />

                {rental.rentalStatus === "APPROVED" && (
                  <PaymentButton rentalRequestId={rental.id} />
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 py-16 text-center space-y-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            <Home size={24} />
          </div>
          <p className="text-sm font-medium text-slate-600">
            No Rental Requests Found
          </p>
          <p className="text-xs text-slate-400 max-w-xs">
            You haven&apos;t requested to rent any properties yet.
          </p>
        </div>
      )}
    </section>
  );
}
