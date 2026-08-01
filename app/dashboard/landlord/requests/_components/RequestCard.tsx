"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PaymentButton from "../../../tenant/rentals/_components/paymentButton";
import { updateRentalStatus } from "../_actions/updateRentalStatus";
import { toast } from "sonner";
import {
  Home,
  MapPin,
  User,
  Mail,
  DollarSign,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  Loader2,
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
    switch (status) {
      case "APPROVED":
        return {
          variant: "default" as const,
          icon: <CheckCircle className="w-3.5 h-3.5" />,
          className:
            "bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200",
        };
      case "REJECTED":
        return {
          variant: "destructive" as const,
          icon: <XCircle className="w-3.5 h-3.5" />,
          className: "bg-red-100 text-red-700 border-red-200 hover:bg-red-200",
        };
      default:
        return {
          variant: "secondary" as const,
          icon: <Clock className="w-3.5 h-3.5" />,
          className:
            "bg-yellow-100 text-yellow-700 border-yellow-200 hover:bg-yellow-200",
        };
    }
  };

  const statusConfig = getStatusConfig(status);

  return (
    <div className="group bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-md">
      <div className="p-6">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
          {/* Left Section - Property Info */}
          <div className="flex-1 space-y-4 w-full">
            {/* Title & Location */}
            <div>
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-slate-900 tracking-tight line-clamp-1">
                  {rental.properties.title}
                </h2>
                <Badge
                  variant={statusConfig.variant}
                  className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium whitespace-nowrap ${statusConfig.className}`}
                >
                  {statusConfig.icon}
                  {status}
                </Badge>
              </div>

              <div className="flex items-center gap-2 mt-1.5 text-sm text-slate-500">
                <MapPin className="w-4 h-4" />
                <span>{rental.properties.location}</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-600" />
              <p className="text-2xl font-bold text-slate-900">
                ৳ {rental.properties.price.toLocaleString()}
              </p>
              <span className="text-sm text-slate-400">/ month</span>
            </div>

            {/* Tenant Info */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                  <User className="w-4 h-4 text-slate-600" />
                </div>
                <span className="font-medium">{rental.tenant.name}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Mail className="w-4 h-4" />
                <span>{rental.tenant.email}</span>
              </div>
            </div>

            {/* Additional Details */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>
                  Requested: {new Date(rental.createdAt).toLocaleDateString()}
                </span>
              </div>
              {rental.rentalStatus === "APPROVED" && (
                <div className="flex items-center gap-1.5 text-emerald-600">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>
                    Approved on{" "}
                    {new Date(rental.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right Section - Actions */}
          <div className="flex flex-col items-end gap-3 min-w-35 w-full lg:w-auto">
            {status === "PENDING" && (
              <div className="flex flex-col sm:flex-row lg:flex-col gap-2 w-full">
                <Button
                  size="sm"
                  onClick={() => handleAction("APPROVED")}
                  disabled={loading}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 w-full"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <CheckCircle className="w-4 h-4" />
                  )}
                  Approve
                </Button>

                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleAction("REJECTED")}
                  disabled={loading}
                  className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2 w-full"
                >
                  {loading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <XCircle className="w-4 h-4" />
                  )}
                  Reject
                </Button>
              </div>
            )}

            {status === "APPROVED" && (
              <div className="flex w-full flex-col gap-2">
                <div className="flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-2 justify-center">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm font-medium text-emerald-700">
                    Approved
                  </span>
                </div>
                <PaymentButton rentalRequestId={rental.id} />
              </div>
            )}

            {status === "REJECTED" && (
              <div className="flex items-center gap-2 px-4 py-2 bg-red-50 rounded-lg border border-red-200 w-full justify-center">
                <XCircle className="w-4 h-4 text-red-600" />
                <span className="text-sm font-medium text-red-700">
                  Rejected
                </span>
              </div>
            )}

            {/* Timestamp */}
            <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
              <Clock className="w-3 h-3" />
              <span>{new Date(rental.updatedAt).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
