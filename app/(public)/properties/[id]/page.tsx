import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Home,
  CheckCircle2,
  ShieldCheck,
  Tag,
  Bed,
  Bath,
  LogIn,
} from "lucide-react";

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

  if (!property) {
    return notFound();
  }

  const mainImage =
    property.images && property.images.length > 0 ? property.images[0] : null;

  return (
    <section className="container mx-auto max-w-6xl px-4 py-8 md:py-12">
      <Card className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl">
        <div className="grid min-h-[460px] grid-cols-1 md:grid-cols-12">
          {/* Left Side - Image Section */}
          <div className="relative flex min-h-[300px] items-center justify-center bg-slate-100 md:col-span-5 md:min-h-full">
            {mainImage ? (
              <Image
                src={mainImage}
                alt={property.title}
                fill
                priority
                className="object-cover"
              />
            ) : (
              <div className="flex flex-col items-center gap-2 text-slate-400">
                <div className="rounded-full bg-slate-200/70 p-5">
                  <Home className="h-12 w-12" />
                </div>
                <span className="text-xs font-medium">No Image Available</span>
              </div>
            )}

            {/* Availability Badge */}
            <div className="absolute top-4 left-4 z-10">
              <Badge
                className={`px-3 py-1 text-xs font-semibold backdrop-blur-md border-0 ${
                  property.availabilityStatus === "AVAILABLE"
                    ? "bg-emerald-500/90 text-white"
                    : "bg-slate-700/90 text-white"
                }`}
              >
                {property.availabilityStatus === "AVAILABLE"
                  ? "Available"
                  : property.availabilityStatus}
              </Badge>
            </div>
          </div>

          {/* Right Side - Details Section */}
          <div className="flex flex-col justify-between space-y-6 p-6 md:col-span-7 md:p-8">
            <div className="space-y-5">
              {/* Category & Title */}
              <div>
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-md bg-sky-50 px-2.5 py-1 text-xs font-semibold text-[#1868cd]">
                  <Tag size={13} />
                  {property.propertyType}
                </div>

                <h1 className="text-2xl font-extrabold text-slate-900 md:text-3xl leading-snug">
                  {property.title}
                </h1>
              </div>

              {/* Price & Location */}
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-4">
                <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                  <MapPin size={18} className="text-[#1868cd] shrink-0" />
                  <span>{property.location}</span>
                </div>

                <div className="text-2xl font-extrabold text-[#1868cd]">
                  ৳ {property.price?.toLocaleString()}
                  <span className="ml-1 text-xs font-normal text-slate-500">
                    / month
                  </span>
                </div>
              </div>

              {/* Property Specs (Bedrooms / Bathrooms) */}
              {(property.bedrooms || property.bathrooms) && (
                <div className="flex items-center gap-6 rounded-xl border border-slate-100 p-3 text-sm font-medium text-slate-700">
                  {property.bedrooms && (
                    <div className="flex items-center gap-2">
                      <Bed size={18} className="text-[#1868cd]" />
                      <span>{property.bedrooms} Bedrooms</span>
                    </div>
                  )}
                  {property.bathrooms && (
                    <div className="flex items-center gap-2">
                      <Bath size={18} className="text-[#1868cd]" />
                      <span>{property.bathrooms} Bathrooms</span>
                    </div>
                  )}
                </div>
              )}

              {/* Description */}
              <div>
                <h3 className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                  Description
                </h3>
                <p className="leading-relaxed text-slate-600 text-sm">
                  {property.description}
                </p>
              </div>

              {/* Amenities */}
              {property.amenities?.length > 0 && (
                <div>
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Amenities
                  </h3>
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                    {property.amenities.map(
                      (amenity: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                        >
                          <CheckCircle2
                            size={15}
                            className="text-[#1868cd] shrink-0"
                          />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100 pt-5">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <ShieldCheck size={18} className="text-[#1868cd]" />
                Verified & Secure Listing
              </div>

              {/* Action Button Conditional Rendering */}
              <div>
                {user?.success && user?.data?.result?.id ? (
                  property.availabilityStatus === "AVAILABLE" && (
                    <RequestRentalButton propertyId={property.id} />
                  )
                ) : (
                  <Button
                    asChild
                    size="sm"
                    className="bg-[#1868cd] hover:bg-[#155ebc] text-white rounded-xl"
                  >
                    <Link href="/login" className="flex items-center gap-2">
                      <LogIn size={15} />
                      Login to Request
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default PropertyDetailsPage;
