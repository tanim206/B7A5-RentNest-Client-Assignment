import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, MapPin, Tag, Gift, ShieldCheck } from "lucide-react";
import { IProperty } from "@/lib/types";

type Props = {
  property: IProperty;
};

export default function PublicPropertyCard({ property }: Props) {
  // availabilityStatus অনুযায়ী ডায়নামিক কালার নির্ধারণের ফাংশন
  const getStatusBadgeStyles = (status?: string) => {
    switch (status?.toUpperCase()) {
      case "AVAILABLE":
        return "text-emerald-700 bg-emerald-50 border-emerald-200";
      case "RENTED":
      case "BOOKED":
      case "UNAVAILABLE":
        return "text-rose-700 bg-rose-50 border-rose-200";
      case "PENDING":
        return "text-amber-700 bg-amber-50 border-amber-200";
      default:
        return "text-slate-700 bg-slate-100 border-slate-200";
    }
  };

  return (
    <Card className="w-full overflow-hidden rounded-xl border border-slate-200/80 bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="flex flex-col justify-between p-6 sm:p-8 space-y-6">
        {/* Header Section: Title & Description */}
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-slate-900 line-clamp-1">
            {property?.title}
          </h3>
          <p className="text-xs text-slate-500 line-clamp-2 max-w-xs mx-auto leading-relaxed">
            {property?.description}
          </p>
        </div>

        {/* Pricing & Offer Tag Section */}
        <div className="text-center space-y-1 py-3 border-y border-slate-100">
          <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            ৳ {property?.price?.toLocaleString()}
          </div>
          <div className="text-xs font-medium text-slate-400">/ monthly</div>

          {/* Status Badge - Dynamic Colors Applied */}
          <div
            className={`mt-3 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border ${getStatusBadgeStyles(
              property?.availabilityStatus,
            )}`}
          >
            <Gift size={13} />
            <span className="uppercase">{property?.availabilityStatus}</span>
          </div>
        </div>

        {/* Property Features Checklist */}
        <div className="space-y-3 py-1 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-2.5">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shrink-0">
              <Check size={12} strokeWidth={3} />
            </div>
            <span className="truncate flex items-center gap-1">
              <MapPin size={13} className="text-slate-400 shrink-0" />
              {property?.location}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shrink-0">
              <Check size={12} strokeWidth={3} />
            </div>
            <span className="truncate flex items-center gap-1">
              <Tag size={13} className="text-slate-400 shrink-0" />
              Category: {property?.propertyType}
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shrink-0">
              <Check size={12} strokeWidth={3} />
            </div>
            <span className="truncate flex items-center gap-1">
              <ShieldCheck size={13} className="text-slate-400 shrink-0" />
              Verified & Secure Property
            </span>
          </div>
        </div>

        {/* Bottom Dark CTA Button */}
        <Button
          asChild
          className="w-full rounded-xl bg-slate-900 hover:bg-[#1868cd] text-white font-semibold py-6 text-sm shadow-md transition-all duration-300"
        >
          <Link href={`/properties/${property?.id}`}>View Details</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
