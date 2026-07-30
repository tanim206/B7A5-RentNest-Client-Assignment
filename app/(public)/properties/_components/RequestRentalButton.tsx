"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { createRentalRequest } from "../_actions/createRentalRequest";

export default function RequestRentalButton({
  propertyId,
}: {
  propertyId: string;
}) {
  const handleRequest = async () => {
    const result = await createRentalRequest(propertyId);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <Button className="w-full" onClick={handleRequest}>
      Request To Rent
    </Button>
  );
}
