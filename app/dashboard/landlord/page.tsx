import Link from "next/link";
import PaymentButton from "../tenant/rentals/_components/paymentButton";
import { getlandloardProperties } from "./properties/_actions/landloadgetProperty";
import { getLandlordRequests } from "./requests/_actions/getLandlordRequests";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Clock,
  CheckCircle2,
  Plus,
  MapPin,
  User,
  ChevronRight,
  Home,
  FileText,
} from "lucide-react";

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

  // Status Badge Colors Helper
  const getStatusBadge = (status: string) => {
    switch (status?.toUpperCase()) {
      case "APPROVED":
        return "bg-emerald-50 text-emerald-600 border-emerald-200";
      case "PENDING":
        return "bg-amber-50 text-amber-600 border-amber-200";
      case "REJECTED":
        return "bg-rose-50 text-rose-600 border-rose-200";
      case "AVAILABLE":
        return "bg-blue-50 text-[#1868cd] border-blue-200";
      case "RENTED":
        return "bg-slate-100 text-slate-700 border-slate-200";
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
            Landlord Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage your properties and review incoming tenant applications.
          </p>
        </div>

        <Link
          href="/dashboard/landlord/properties/add" // আপনার প্রপার্টি অ্যাড করার রাউট দিন
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1868cd] px-5 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-slate-900 transition-all duration-300 w-fit"
        >
          <Plus size={16} />
          Add New Property
        </Link>
      </div>

      {/* Analytics / Stats Cards */}
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-3">
        {/* Total Properties */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium text-slate-500">
              Your Properties
            </p>
            <p className="text-3xl font-extrabold text-slate-900">
              {properties.length}
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#1868cd]">
            <Building2 size={22} />
          </div>
        </div>

        {/* Pending Requests */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium text-slate-500">
              Pending Requests
            </p>
            <p className="text-3xl font-extrabold text-amber-600">
              {pendingRequests}
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
            <Clock size={22} />
          </div>
        </div>

        {/* Approved Requests */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs font-medium text-slate-500">
              Approved Tenants
            </p>
            <p className="text-3xl font-extrabold text-emerald-600">
              {approvedRequests}
            </p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
            <CheckCircle2 size={22} />
          </div>
        </div>
      </div>

      {/* Grid: Properties & Recent Requests */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Your Properties Box */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900">
              Your Properties
            </h2>
            <Link
              href="/dashboard/landlord/properties"
              className="text-xs font-semibold text-[#1868cd] hover:underline flex items-center gap-1"
            >
              View All <ChevronRight size={12} />
            </Link>
          </div>

          <div className="space-y-3">
            {properties.length > 0 ? (
              properties.slice(0, 5).map((property: any) => (
                <div
                  key={property.id}
                  className="flex items-center justify-between rounded-xl border border-slate-100 p-3.5 hover:bg-slate-50/80 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600 shrink-0">
                      <Home size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 line-clamp-1">
                        {property.title}
                      </p>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                        <MapPin size={11} />
                        <span className="truncate max-w-[150px] sm:max-w-xs">
                          {property.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Badge
                    variant="outline"
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase ${getStatusBadge(
                      property.availabilityStatus,
                    )}`}
                  >
                    {property.availabilityStatus || "Available"}
                  </Badge>
                </div>
              ))
            ) : (
              <div className="py-10 text-center space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400 mx-auto">
                  <Building2 size={20} />
                </div>
                <p className="text-xs font-medium text-slate-600">
                  No properties added yet
                </p>
                <p className="text-[11px] text-slate-400">
                  Click on &quot;Add New Property&quot; to list your first
                  rental.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Recent Requests Box */}
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-base font-bold text-slate-900">
              Recent Rental Requests
            </h2>
            <Link
              href="/dashboard/landlord/requests"
              className="text-xs font-semibold text-[#1868cd] hover:underline flex items-center gap-1"
            >
              Review All <ChevronRight size={12} />
            </Link>
          </div>

          <div className="space-y-3">
            {requests.length > 0 ? (
              requests.slice(0, 5).map((request: any) => (
                <div
                  key={request.id}
                  className="flex flex-col gap-3 rounded-xl border border-slate-100 p-3.5 hover:bg-slate-50/80 transition-colors sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#1868cd] shrink-0">
                      <FileText size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 line-clamp-1">
                        {request.properties?.title || "Property"}
                      </p>
                      <div className="flex items-center gap-1 text-[11px] text-slate-400 mt-0.5">
                        <User size={11} />
                        <span>Tenant: {request.tenant?.name || "N/A"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                    <Badge
                      variant="outline"
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase ${getStatusBadge(
                        request.rentalStatus,
                      )}`}
                    >
                      {request.rentalStatus}
                    </Badge>

                    {/* {request.rentalStatus === "APPROVED" && (
                      <div className="shrink-0">
                        <PaymentButton rentalRequestId={request.id} />
                      </div>
                    )} */}
                  </div>
                </div>
              ))
            ) : (
              <div className="py-10 text-center space-y-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-400 mx-auto">
                  <FileText size={20} />
                </div>
                <p className="text-xs font-medium text-slate-600">
                  No rental requests yet
                </p>
                <p className="text-[11px] text-slate-400">
                  New applications from tenants will appear here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
