"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar, Building, User, MapPin, Tag } from "lucide-react";

type Props = {
  request: any;
};

export default function RentalRequestDetailsDialog({ request }: Props) {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="outline"
          className="h-8 rounded-lg text-xs font-semibold px-3"
        >
          Details
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md rounded-2xl p-6">
        <DialogHeader>
          <DialogTitle className="text-lg font-bold text-slate-900">
            Rental Request Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 pt-2 text-xs sm:text-sm">
          {/* Property Title */}
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
            <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase">
              <Building size={12} />
              <span>Property</span>
            </div>
            <p className="font-bold text-slate-900 text-base">
              {request.properties?.title || "Property Name"}
            </p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl border border-slate-100 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase">
                <User size={12} />
                <span>Tenant</span>
              </div>
              <p className="font-semibold text-slate-800">
                {request.tenant?.name || "Unknown"}
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-100 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase">
                <Tag size={12} />
                <span>Status</span>
              </div>
              <Badge
                variant="outline"
                className={`text-[10px] font-bold uppercase ${getStatusBadge(
                  request.rentalStatus,
                )}`}
              >
                {request.rentalStatus}
              </Badge>
            </div>

            <div className="p-3 rounded-xl border border-slate-100 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase">
                <MapPin size={12} />
                <span>Location</span>
              </div>
              <p className="font-semibold text-slate-800 truncate">
                {request.properties?.location || "N/A"}
              </p>
            </div>

            <div className="p-3 rounded-xl border border-slate-100 space-y-1">
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-bold uppercase">
                <Tag size={12} />
                <span>Rent</span>
              </div>
              <p className="font-extrabold text-[#1868cd]">
                ৳ {request.properties?.price?.toLocaleString() || 0}
              </p>
            </div>
          </div>

          {/* Timestamp */}
          <div className="flex items-center gap-2 text-xs text-slate-400 pt-2 border-t border-slate-100">
            <Calendar size={13} />
            <span>
              Requested At:{" "}
              {request.createdAt
                ? new Date(request.createdAt).toLocaleString()
                : "N/A"}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
