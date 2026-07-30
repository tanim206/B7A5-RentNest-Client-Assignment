import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Home, CheckCircle2, ShieldCheck, Tag } from "lucide-react";
import { getSingleProperty } from "../_actions/getSingleProperty";

const PropertyDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const result = await getSingleProperty(id);
  const property = result?.data?.result;

  if (!property) {
    return notFound();
  }

  return (
    <section className="container mx-auto px-4 py-8 max-w-6xl">
      <Card className="overflow-hidden border border-slate-200/80 shadow-md bg-white rounded">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 min-h-[420px]">
          {/* LEFT SIDE: Image / Visual Area */}
          <div className="md:col-span-5 relative bg-slate-50 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-100 min-h-[220px] md:min-h-full">
            <div className="p-4 rounded-full bg-slate-100/80 text-slate-400">
              <Home className="h-14 w-14" />
            </div>

            {/* Status Badge */}
            <div className="absolute top-3 left-3">
              <Badge
                variant={
                  property.availabilityStatus === "AVAILABLE"
                    ? "default"
                    : "secondary"
                }
                className={`px-2.5 py-0.5 text-[11px] font-medium tracking-wide uppercase shadow-none ${
                  property.availabilityStatus === "AVAILABLE"
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-amber-500 text-white"
                }`}
              >
                {property.availabilityStatus}
              </Badge>
            </div>
          </div>

          {/* RIGHT SIDE: Compact Content Area */}
          <div className="md:col-span-7 p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              {/* Type & Title */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs text-indigo-600 font-medium">
                  <Tag size={13} />
                  <span>{property.propertyType}</span>
                </div>
                <h1 className="text-xl md:text-2xl text-slate-900 font-bold tracking-tight">
                  {property.title}
                </h1>
              </div>

              {/* Location & Price Strip */}
              <div className="flex flex-wrap items-center justify-between gap-2 py-3 px-3.5 bg-slate-50/80 rounded-lg border border-slate-100">
                <div className="flex items-center gap-1.5 text-slate-600 text-xs sm:text-sm">
                  <MapPin size={15} className="text-slate-400 shrink-0" />
                  <span>{property.location}</span>
                </div>

                <div className="flex items-baseline text-lg sm:text-xl font-bold text-slate-900">
                  <span className="text-indigo-600 mr-0.5 text-sm">৳</span>
                  {property.price?.toLocaleString()}
                  <span className="text-[11px] font-normal text-slate-500 ml-1">
                    / month
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Description
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              {property.amenities && property.amenities.length > 0 && (
                <div className="space-y-1.5 pt-1">
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Amenities
                  </h3>
                  <div className="grid grid-cols-2 gap-1.5">
                    {property.amenities.map(
                      (amenity: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-center gap-1.5 text-slate-700 bg-slate-50 px-2.5 py-1.5 rounded-md border border-slate-100"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-emerald-500 shrink-0"
                          />
                          <span className="text-xs font-medium">{amenity}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions & Security Note */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                <ShieldCheck size={15} className="text-indigo-500 shrink-0" />
                <span>Verified Listing</span>
              </div>

              <Button
                size="sm"
                disabled={property.availabilityStatus !== "AVAILABLE"}
                className="px-5 py-2 text-xs sm:text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-all disabled:opacity-50"
              >
                Request Booking
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default PropertyDetailsPage;
