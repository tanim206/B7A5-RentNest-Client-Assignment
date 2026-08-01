import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import PropertyDetailsDialog from "./propertyDetailsDialog";
import { IProperty } from "@/lib/types";
import { ArrowRight, Building, MapPin } from "lucide-react";

export default function AdminPropertyList({
  properties,
}: {
  properties: IProperty[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#1868cd]">
            <Building size={16} />
          </div>
          <h2 className="font-bold text-slate-900 text-base">
            Recent Properties
          </h2>
        </div>
        <Link
          href="/dashboard/admin/properties"
          className="text-xs font-semibold text-[#1868cd] hover:underline flex items-center gap-1 transition-all"
        >
          View all <ArrowRight size={12} />
        </Link>
      </div>

      {/* List */}
      <div className="space-y-2.5">
        {properties.length > 0 ? (
          properties.slice(0, 5).map((property) => (
            <div
              key={property.id}
              className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-3.5 hover:bg-slate-50 transition-colors"
            >
              <div className="space-y-0.5 max-w-[50%]">
                <p className="font-semibold text-slate-900 text-sm truncate">
                  {property.title}
                </p>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <MapPin size={12} className="text-slate-400 shrink-0" />
                  <span className="truncate">{property.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Badge
                  variant="secondary"
                  className="text-[10px] bg-slate-200/60 text-slate-700 hover:bg-slate-200"
                >
                  {property.propertyType}
                </Badge>
                <Badge
                  className={`text-[10px] font-bold border ${
                    property.availabilityStatus === "BOOKED"
                      ? "bg-rose-50 text-rose-600 border-rose-200"
                      : "bg-emerald-50 text-emerald-600 border-emerald-200"
                  }`}
                  variant="outline"
                >
                  {property.availabilityStatus}
                </Badge>
                <PropertyDetailsDialog property={property} />
              </div>
            </div>
          ))
        ) : (
          <div className="py-8 text-center text-xs text-slate-400 border border-dashed border-slate-200 rounded-xl">
            No properties found.
          </div>
        )}
      </div>
    </div>
  );
}
