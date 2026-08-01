import { Badge } from "@/components/ui/badge";
import RentalRequestDetailsDialog from "./rentalRequestDetailsDialog";
import { FileText, User } from "lucide-react";

export default function AdminRentalRequestList({
  requests,
}: {
  requests: any[];
}) {
  const getStatusBadge = (status: string) => {
    switch (status?.toUpperCase()) {
      case "APPROVED":
        return "bg-emerald-50 text-emerald-600 border-emerald-200";
      case "REJECTED":
        return "bg-rose-50 text-rose-600 border-rose-200";
      default:
        return "bg-amber-50 text-amber-600 border-amber-200";
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#1868cd]">
            <FileText size={16} />
          </div>
          <h2 className="font-bold text-slate-900 text-base">
            Latest Rental Requests
          </h2>
        </div>
      </div>

      {/* List */}
      <div className="space-y-2.5">
        {requests.length > 0 ? (
          requests.slice(0, 5).map((request) => (
            <div
              key={request.id}
              className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-3.5 hover:bg-slate-50 transition-colors"
            >
              <div className="space-y-0.5 max-w-[55%]">
                <p className="font-semibold text-slate-900 text-sm truncate">
                  {request.properties?.title || "Property"}
                </p>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <User size={12} className="text-slate-400 shrink-0" />
                  <span className="truncate">
                    Tenant: {request.tenant?.name || "Unknown"}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Badge
                  variant="outline"
                  className={`text-[10px] font-bold uppercase ${getStatusBadge(
                    request.rentalStatus,
                  )}`}
                >
                  {request.rentalStatus}
                </Badge>
                <RentalRequestDetailsDialog request={request} />
              </div>
            </div>
          ))
        ) : (
          <div className="py-8 text-center text-xs text-slate-400 border border-dashed border-slate-200 rounded-xl">
            No rental requests found.
          </div>
        )}
      </div>
    </div>
  );
}
