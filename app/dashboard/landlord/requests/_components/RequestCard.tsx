"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PaymentButton from "../../../tenant/rentals/_components/paymentButton";
import { updateRentalStatus } from "../_actions/updateRentalStatus";
import { toast } from "sonner";
import {
  MapPin,
  User,
  Mail,
  Calendar,
  Clock,
  CheckCircle2,
  XCircle,
  Loader2,
  Building,
} from "lucide-react";
import { useState } from "react";

export default function RequestCard({ rental }: { rental: any }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(rental.rentalStatus);

  const handleAction = async (action: "APPROVED" | "REJECTED") => {
    setLoading(true);
    const res = await updateRentalStatus(rental.id, action);

    if (res.success) {
      setStatus(action);
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    setLoading(false);
  };

  const getStatusConfig = (status: string) => {
    switch (status?.toUpperCase()) {
      case "APPROVED":
        return {
          icon: <CheckCircle2 className="w-3.5 h-3.5" />,
          className: "bg-emerald-50 text-emerald-600 border-emerald-200",
        };
      case "REJECTED":
        return {
          icon: <XCircle className="w-3.5 h-3.5" />,
          className: "bg-rose-50 text-rose-600 border-rose-200",
        };
      default:
        return {
          icon: <Clock className="w-3.5 h-3.5" />,
          className: "bg-amber-50 text-amber-600 border-amber-200",
        };
    }
  };

  const statusConfig = getStatusConfig(status);

  return (
    <div className="group rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 flex flex-col justify-between space-y-5">
      {/* Top Header Info */}
      <div className="space-y-4">
        {/* Title, Location & Status Badge */}
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#1868cd] shrink-0">
                <Building size={16} />
              </div>
              <h2 className="text-base font-bold text-slate-900 line-clamp-1">
                {rental.properties?.title || "Property Title"}
              </h2>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 pl-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{rental.properties?.location}</span>
            </div>
          </div>

          <Badge
            variant="outline"
            className={`flex items-center gap-1 rounded-full px-3 py-0.5 text-[10px] font-bold uppercase shrink-0 ${statusConfig.className}`}
          >
            {statusConfig.icon}
            {status}
          </Badge>
        </div>

        {/* Price Tag */}
        <div className="rounded-xl bg-slate-50 p-3 flex items-baseline gap-1.5 border border-slate-100">
          <span className="text-lg font-extrabold text-[#1868cd]">
            ৳ {rental.properties?.price?.toLocaleString()}
          </span>
          <span className="text-xs font-medium text-slate-400">
            / monthly rent
          </span>
        </div>

        {/* Tenant Information */}
        <div className="space-y-2 pt-1 border-t border-slate-100">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Tenant Information
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2 text-slate-700 bg-slate-50/80 p-2 rounded-lg">
              <div className="w-6 h-6 rounded-md bg-white border border-slate-200/60 flex items-center justify-center text-slate-500 shrink-0">
                <User className="w-3.5 h-3.5" />
              </div>
              <span className="font-semibold truncate">
                {rental.tenant?.name || "N/A"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-600 bg-slate-50/80 p-2 rounded-lg">
              <div className="w-6 h-6 rounded-md bg-white border border-slate-200/60 flex items-center justify-center text-slate-500 shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span className="truncate text-slate-500">
                {rental.tenant?.email || "N/A"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Timestamps & Actions */}
      <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Timestamp */}
        <div className="text-[11px] text-slate-400 space-y-0.5">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>
              Requested: {new Date(rental.createdAt).toLocaleDateString()}
            </span>
          </div>
          {status === "APPROVED" && rental.updatedAt && (
            <div className="flex items-center gap-1 text-emerald-600 font-medium">
              <CheckCircle2 className="w-3 h-3" />
              <span>
                Approved on {new Date(rental.updatedAt).toLocaleDateString()}
              </span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="w-full sm:w-auto shrink-0">
          {status === "PENDING" && (
            <div className="flex items-center gap-2 w-full">
              <Button
                size="sm"
                onClick={() => handleAction("APPROVED")}
                disabled={loading}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl px-4 py-2 transition-all shadow-sm flex-1 sm:flex-initial"
              >
                {loading ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                )}
                Approve
              </Button>

              <Button
                size="sm"
                variant="destructive"
                onClick={() => handleAction("REJECTED")}
                disabled={loading}
                className="bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs rounded-xl px-4 py-2 transition-all shadow-sm flex-1 sm:flex-initial"
              >
                {loading ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <XCircle className="w-3.5 h-3.5 mr-1" />
                )}
                Reject
              </Button>
            </div>
          )}

          {status === "APPROVED" && (
            <div className="flex items-center gap-2">
              <PaymentButton rentalRequestId={rental.id} />
            </div>
          )}

          {status === "REJECTED" && (
            <div className="inline-flex items-center gap-1 px-3 py-1 bg-rose-50 text-rose-600 rounded-lg text-xs font-semibold border border-rose-200">
              <XCircle className="w-3.5 h-3.5" /> Rejected
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
