"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { updateRentalStatus } from "../_actions/updateRentalStatus";
import { toast } from "sonner";

export default function RequestCard({ rental }: { rental: any }) {
  const handleAction = async (status: "APPROVED" | "REJECTED") => {
    const res = await updateRentalStatus(rental.id, status);

    if (res.success) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <Card>
      <CardContent className="space-y-4 p-6">
        <h2 className="text-xl font-bold">{rental.properties.title}</h2>

        <p>{rental.properties.location}</p>

        <p>৳ {rental.properties.price}</p>

        <hr />

        <div>
          <p>
            <b>Tenant:</b> {rental.tenant.name}
          </p>

          <p>{rental.tenant.email}</p>
        </div>

        <Badge>{rental.rentalStatus}</Badge>

        {rental.rentalStatus === "PENDING" && (
          <div className="flex gap-3">
            <Button onClick={() => handleAction("APPROVED")}>Approve</Button>

            <Button
              variant="destructive"
              onClick={() => handleAction("REJECTED")}
            >
              Reject
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
