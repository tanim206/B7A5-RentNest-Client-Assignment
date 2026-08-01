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

type Props = {
  request: any;
};

export default function RentalRequestDetailsDialog({ request }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          Details
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Rental Request Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-sm">
          <div>
            <p className="text-sm text-muted-foreground">Property</p>
            <p>{request.properties?.title || "Property"}</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Tenant</p>
              <p>{request.tenant?.name || "Unknown"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <Badge variant="outline">{request.rentalStatus}</Badge>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p>{request.properties?.location || "N/A"}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Price</p>
              <p>৳ {request.properties?.price || 0}</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Requested At</p>
            <p>
              {request.createdAt
                ? new Date(request.createdAt).toLocaleString()
                : "N/A"}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
