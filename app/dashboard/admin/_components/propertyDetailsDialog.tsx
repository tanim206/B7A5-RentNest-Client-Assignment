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
import { IProperty } from "@/lib/types";

type Props = {
  property: IProperty;
};

export default function PropertyDetailsDialog({ property }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Details
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>{property.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-sm">
          <div>
            <p className="text-sm text-muted-foreground">Description</p>
            <p>{property.description || "No description available."}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p>{property.location}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Price</p>
              <p>৳ {property.price}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Property Type</p>
              <p>{property.propertyType}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Availability</p>
              <p>{property.availabilityStatus}</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Landlord</p>
            <p>{property.landlord?.name || "Unknown landlord"}</p>
            <p className="text-xs text-muted-foreground">
              {property.landlord?.email || "No email available"}
            </p>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Amenities</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {property.amenities?.length ? (
                property.amenities.map((item: string) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))
              ) : (
                <p className="text-muted-foreground">No amenities listed.</p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
