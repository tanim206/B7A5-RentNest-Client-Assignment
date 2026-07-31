"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function RentalDetailsDialog({ rental }: { rental: any }) {
  const property = rental.properties;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Details
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>{property.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-sm">
          <div>
            <strong>Description</strong>
            <p>{property.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <strong>Location</strong>
              <p>{property.location}</p>
            </div>

            <div>
              <strong>Price</strong>
              <p>৳ {property.price}</p>
            </div>

            <div>
              <strong>Property Type</strong>
              <p>{property.propertyType}</p>
            </div>

            <div>
              <strong>Availability</strong>
              <p>{property.availabilityStatus}</p>
            </div>

            <div>
              <strong>Rental Status</strong>

              <div className="mt-1">
                <Badge>{rental.rentalStatus}</Badge>
              </div>
            </div>

            <div>
              <strong>Created At</strong>
              <p>{new Date(rental.createdAt).toLocaleString()}</p>
            </div>
          </div>

          <div>
            <strong>Amenities</strong>

            <div className="mt-2 flex flex-wrap gap-2">
              {property.amenities?.map((item: string) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
