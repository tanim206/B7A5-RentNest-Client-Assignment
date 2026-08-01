"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  MapPin,
  Tag,
  Home,
  Calendar,
  CheckCircle2,
  Info,
  Eye,
  Check,
} from "lucide-react";

export default function RentalDetailsDialog({ rental }: { rental: any }) {
  const property = rental?.properties || {};

  // Status Badge Color Helper
  const getStatusBadge = (status: string) => {
    switch (status?.toUpperCase()) {
      case "APPROVED":
        return "bg-emerald-500/10 text-emerald-600 border-emerald-200";
      case "PENDING":
        return "bg-amber-500/10 text-amber-600 border-amber-200";
      case "REJECTED":
        return "bg-rose-500/10 text-rose-600 border-rose-200";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="rounded-xl border-slate-200 hover:bg-slate-100 text-xs font-semibold gap-1.5 transition-all"
        >
          <Eye size={14} className="text-slate-500" />
          View Details
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-xl rounded-2xl p-6 sm:p-8 bg-white border border-slate-200/80 shadow-2xl">
        <DialogHeader className="space-y-2 text-left border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-[#1868cd]">
              <Home size={18} />
            </div>
            <DialogTitle className="text-xl font-bold text-slate-900 line-clamp-1">
              {property.title || "Property Details"}
            </DialogTitle>
          </div>
          <DialogDescription className="text-xs text-slate-500">
            Full request summary and property specs.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-2 text-xs text-slate-600">
          {/* Description Box */}
          {property.description && (
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-1">
              <strong className="text-slate-900 font-semibold flex items-center gap-1.5 text-xs">
                <Info size={14} className="text-[#1868cd]" /> Description
              </strong>
              <p className="text-slate-500 leading-relaxed text-xs">
                {property.description}
              </p>
            </div>
          )}

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-slate-400 font-medium flex items-center gap-1">
                <MapPin size={13} className="text-slate-400" /> Location
              </span>
              <p className="font-semibold text-slate-900 truncate">
                {property.location || "N/A"}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 font-medium flex items-center gap-1">
                <Tag size={13} className="text-slate-400" /> Monthly Price
              </span>
              <p className="font-extrabold text-[#1868cd] text-sm">
                ৳ {property.price?.toLocaleString()}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 font-medium flex items-center gap-1">
                <Home size={13} className="text-slate-400" /> Property Type
              </span>
              <p className="font-semibold text-slate-900">
                {property.propertyType || "N/A"}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 font-medium flex items-center gap-1">
                <CheckCircle2 size={13} className="text-slate-400" /> Property
                Status
              </span>
              <p className="font-semibold text-emerald-600 uppercase">
                {property.availabilityStatus || "N/A"}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 font-medium">Rental Status</span>
              <div>
                <Badge
                  variant="outline"
                  className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${getStatusBadge(
                    rental.rentalStatus,
                  )}`}
                >
                  {rental.rentalStatus}
                </Badge>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 font-medium flex items-center gap-1">
                <Calendar size={13} className="text-slate-400" /> Requested On
              </span>
              <p className="font-semibold text-slate-900">
                {rental.createdAt
                  ? new Date(rental.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                  : "N/A"}
              </p>
            </div>
          </div>

          {/* Amenities Section */}
          {property.amenities && property.amenities.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <strong className="text-slate-900 font-semibold block text-xs">
                Amenities & Features
              </strong>
              <div className="flex flex-wrap gap-2">
                {property.amenities.map((item: string) => (
                  <div
                    key={item}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-medium"
                  >
                    <Check size={11} className="text-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
