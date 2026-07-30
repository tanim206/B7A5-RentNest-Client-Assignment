import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, Home, CheckCircle2, ShieldCheck, Tag } from "lucide-react";

import { getSingleProperty } from "../_actions/getSingleProperty";
import RequestRentalButton from "../_components/RequestRentalButton";
import { getMe } from "@/service/getMe";

const PropertyDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const result = await getSingleProperty(id);
  const property = result?.data?.result;

  const user = await getMe();
  // console.log("USER:", user);
  // console.log("ROLE:", user?.data?.role);
  // console.log("STATUS:", property.availabilityStatus);

  if (!property) {
    return notFound();
  }

  return (
    <section className="container mx-auto max-w-6xl px-4 py-8">
      <Card className="overflow-hidden rounded border border-slate-200/80 bg-white shadow-md">
        <div className="grid min-h-[420px] grid-cols-1 md:grid-cols-12">
          {/* Left Side */}
          <div className="relative flex min-h-[220px] items-center justify-center border-b border-slate-100 bg-slate-50 p-6 md:col-span-5 md:min-h-full md:border-r md:border-b-0">
            <div className="rounded-full bg-slate-100/80 p-4 text-slate-400">
              <Home className="h-14 w-14" />
            </div>

            <div className="absolute top-3 left-3">
              <Badge
                variant={
                  property.availabilityStatus === "AVAILABLE"
                    ? "default"
                    : "secondary"
                }
                className={`px-2.5 py-0.5 text-[11px] font-medium uppercase ${
                  property.availabilityStatus === "AVAILABLE"
                    ? "bg-emerald-600 text-white"
                    : "bg-amber-500 text-white"
                }`}
              >
                {property.availabilityStatus}
              </Badge>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-between space-y-5 p-6 md:col-span-7">
            <div className="space-y-4">
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs font-medium text-indigo-600">
                  <Tag size={13} />
                  {property.propertyType}
                </div>

                <h1 className="text-2xl font-bold text-slate-900">
                  {property.title}
                </h1>
              </div>

              <div className="flex flex-wrap items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin size={16} />
                  {property.location}
                </div>

                <div className="text-2xl font-bold text-indigo-600">
                  ৳ {property.price?.toLocaleString()}
                  <span className="ml-1 text-sm font-normal text-slate-500">
                    / month
                  </span>
                </div>
              </div>

              <div>
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Description
                </h3>

                <p className="leading-7 text-slate-600">
                  {property.description}
                </p>
              </div>

              {property.amenities?.length > 0 && (
                <div>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Amenities
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    {property.amenities.map(
                      (amenity: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 rounded-md border border-slate-100 bg-slate-50 p-2"
                        >
                          <CheckCircle2 size={14} className="text-green-600" />

                          <span className="text-sm">{amenity}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between border-t border-slate-100 pt-5">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <ShieldCheck size={16} className="text-indigo-600" />
                Verified Listing
              </div>

              {user?.success &&
                user?.data?.result.role === "TENANT" &&
                property.availabilityStatus === "AVAILABLE" && (
                  <RequestRentalButton propertyId={property.id} />
                )}
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default PropertyDetailsPage;
