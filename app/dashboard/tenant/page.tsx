import Link from "next/link";
import { getRentalRequests } from "./_actions/getRentalRequests";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  CheckCircle2,
  Clock,
  ArrowRight,
  Home,
  MapPin,
  Building,
  ChevronRight,
} from "lucide-react";

export default async function TenantDashboardPage() {
  const result = await getRentalRequests();
  const rentals = result?.data || [];

  const approvedCount = rentals.filter(
    (rental: any) => rental.rentalStatus === "APPROVED",
  ).length;
  const pendingCount = rentals.filter(
    (rental: any) => rental.rentalStatus === "PENDING",
  ).length;

  // Status Badge Helper Function
  const getStatusBadge = (status: string) => {
    switch (status?.toUpperCase()) {
      case "APPROVED":
        return "bg-emerald-50 text-emerald-600 border-emerald-200";
      case "PENDING":
        return "bg-amber-50 text-amber-600 border-amber-200";
      case "REJECTED":
        return "bg-rose-50 text-rose-600 border-rose-200";
      default:
        return "bg-slate-50 text-slate-600 border-slate-200";
    }
  };

  return (
    <section className="container mx-auto space-y-8 py-8 px-4 max-w-7xl">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Tenant Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Track your rental requests and property applications in one place.
          </p>
        </div>
        <Link
          href="/properties"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1868cd] px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-slate-900 transition-all duration-300 w-fit"
        >
          <Building size={15} />
          Explore Properties
        </Link>
      </div>

      {/* Analytics/Stats Cards */}
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-3">
        {/* Total Requests */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium text-slate-500">Total Requests</p>
            <p className="text-3xl font-extrabold text-slate-900">
              {rentals.length}
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1868cd]">
            <FileText size={22} />
          </div>
        </div>

        {/* Approved */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium text-slate-500">
              Approved Applications
            </p>
            <p className="text-3xl font-extrabold text-emerald-600">
              {approvedCount}
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
            <CheckCircle2 size={22} />
          </div>
        </div>

        {/* Pending */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium text-slate-500">
              Pending Requests
            </p>
            <p className="text-3xl font-extrabold text-amber-600">
              {pendingCount}
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
            <Clock size={22} />
          </div>
        </div>
      </div>

      {/* Grid: Quick Actions & Recent Requests */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Quick Actions (1 Column) */}
        <div className="lg:col-span-1 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
              Quick Actions
            </h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Quickly manage your submitted requests, complete payments for
              approved rentals, or look for new listings.
            </p>
          </div>

          <div className="space-y-3 pt-6">
            <Link
              href="/dashboard/tenant/rentals"
              className="group flex items-center justify-between rounded-xl bg-slate-900 px-4 py-3 text-xs font-medium text-white hover:bg-[#1868cd] transition-all duration-300"
            >
              <span>View All Rental Requests</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Recent Requests List (2 Columns) */}
        <div className="lg:col-span-2 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900">
              Recent Requests
            </h2>
            {rentals.length > 0 && (
              <Link
                href="/dashboard/tenant/rentals"
                className="text-xs font-semibold text-[#1868cd] hover:underline flex items-center gap-1"
              >
                See All <ChevronRight size={12} />
              </Link>
            )}
          </div>

          <div className="space-y-3">
            {rentals.length > 0 ? (
              rentals.slice(0, 5).map((rental: any) => (
                <div
                  key={rental.id}
                  className="flex items-center justify-between rounded-xl border border-slate-100 p-3.5 hover:bg-slate-50/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 shrink-0">
                      <Home size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 line-clamp-1">
                        {rental.properties?.title || "Property Listing"}
                      </p>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                        <MapPin size={11} />
                        <span className="truncate max-w-[180px] sm:max-w-xs">
                          {rental.properties?.location || "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Badge
                    variant="outline"
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase ${getStatusBadge(
                      rental.rentalStatus,
                    )}`}
                  >
                    {rental.rentalStatus}
                  </Badge>
                </div>
              ))
            ) : (
              <div className="py-12 text-center space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400 mx-auto">
                  <FileText size={20} />
                </div>
                <p className="text-xs font-medium text-slate-600">
                  No rental requests yet
                </p>
                <p className="text-[11px] text-slate-400">
                  Browse available properties to send your first application.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
